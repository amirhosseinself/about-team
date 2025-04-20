import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Code2, GraduationCap, Mail, MapPin } from "lucide-react";
import { MembersDetailsData } from "@/data/data";

interface MemberPageProps {
  params: Promise<{
    id: string;
  }>;
}

// ✅ متادیتا داینامیک برای هر عضو
export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { id } = await params; // تغییر به async برای دسترسی به params

  const member = MembersDetailsData.find((m) => m.id === id);

  if (!member) {
    return { title: "عضو یافت نشد" };
  }

  return {
    title: `رزومه‌ی ${member.name}`,
    description: `اطلاعات کامل مربوط به ${member.name} - ${member.role}`,
  };
}

// ✅ Static paths generation
export async function generateStaticParams() {
  return MembersDetailsData.map((member) => ({
    id: member.id,
  }));
}

// ✅ صفحه استاتیک برای هر عضو
export default async function MemberPage({ params }: MemberPageProps) {
  // باید params به صورت async از API یا static داده‌ها بارگذاری بشه
  const { id } = await params; // تغییر به async برای دسترسی به params

  const member = MembersDetailsData.find((m) => m.id === id);

  if (!member) return notFound();

  return (
    <div className="container py-16 pt-20 max-w-4xl mx-auto text-center space-y-8">
      {/* Profile Picture */}
      <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden grayscale hover:grayscale-0 transition duration-500 ring-4 ring-primary">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Name & Role */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
        <p className="text-lg text-gray-500">{member.role}</p>
      </div>

      {/* Bio */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-right leading-8 text-gray-700">
        {member.bio}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
          <Code2 size={20} /> مهارت‌ها
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {member.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education & Location */}
      <div className="flex justify-center flex-wrap gap-6 text-gray-600 mt-6">
        <div className="flex items-center gap-2">
          <GraduationCap size={20} />
          <span>{member.education}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={20} />
          <span>{member.location}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6">
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank">
            <BadgeCheck className="text-blue-600 hover:text-blue-700 transition" />
          </Link>
        )}
        {member.twitter && (
          <Link href={member.twitter} target="_blank">
            <BadgeCheck className="text-sky-400 hover:text-sky-500 transition" />
          </Link>
        )}
        {member.x && (
          <Link href={member.x} target="_blank">
            <BadgeCheck className="text-neutral-800 hover:text-black transition" />
          </Link>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`}>
            <Mail className="text-red-500 hover:text-red-600 transition" />
          </a>
        )}
      </div>
    </div>
  );
}
