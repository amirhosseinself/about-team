import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MembersDetailsData } from "@/data/data";
import MemberContent from "@/components/team/MemberContent";

interface MemberPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { id } = await params;

  const member = MembersDetailsData.find((m) => m.id === id);

  if (!member) return { title: "عضو یافت نشد" };

  return {
    title: `رزومه‌ی ${member.name}`,
    description: `اطلاعات کامل مربوط به ${member.name} - ${member.role}`,
  };
}

export async function generateStaticParams() {
  return MembersDetailsData.map((member) => ({
    id: member.id,
  }));
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { id } = await params;

  const member = MembersDetailsData.find((m) => m.id === id);

  if (!member) return notFound();

  return <MemberContent member={member} />;
}
