import { FC } from "react";
import { Linkedin, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MemberCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  twitter: string;
  x: string;
}

const MemberCard: FC<MemberCardProps> = ({
  id,
  name,
  role,
  image,
  linkedin,
  twitter,
  x,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center space-y-3 group cursor-pointer transition">
      {/* Profile image */}
      <Link
        href={`/team/${id}`}
        className="w-24 h-24 relative rounded-full overflow-hidden block"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </Link>

      {/* Name & role */}
      <div>
        <Link href={`/team/${id}`} className="block">
          <h3 className="text-lg font-bold text-[#222]">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-700 hover:text-blue-800 transition" />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Instagram className="w-5 h-5 text-rose-500 hover:text-rose-600 transition" />
        </a>
        <a href={x} target="_blank" rel="noopener noreferrer" aria-label="X">
          <X className="w-5 h-5 text-neutral-800 hover:text-black transition" />
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
