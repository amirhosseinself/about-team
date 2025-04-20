"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Code2,
  GraduationCap,
  Linkedin,
  Instagram,
  X,
  Mail,
  MapPin,
} from "lucide-react";

interface Props {
  member: {
    name: string;
    image: string;
    role: string;
    bio: string;
    skills: string[];
    education: string;
    location: string;
    linkedin?: string;
    instagram?: string;
    x?: string;
    email?: string;
  };
}

export default function MemberContent({ member }: Props) {
  return (
    <motion.div
      className="container py-16 pt-20 max-w-4xl mx-auto text-center space-y-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Picture */}
      <motion.div
        className="w-32 h-32 mx-auto relative rounded-full overflow-hidden grayscale hover:grayscale-0 transition duration-500 ring-4 ring-primary"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Name & Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
        <p className="text-lg text-gray-500">{member.role}</p>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="bg-gray-50 p-6 rounded-xl shadow-md text-right leading-8 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {member.bio}
      </motion.div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
          <Code2 size={20} /> مهارت‌ها
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {member.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
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
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-blue-600 hover:text-blue-700 transition" />
          </Link>
        )}
        {member.instagram && (
          <Link
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-rose-500 hover:text-rose-600 transition" />
          </Link>
        )}
        {member.x && (
          <Link href={member.x} target="_blank" rel="noopener noreferrer">
            <X className="text-neutral-800 hover:text-black transition" />
          </Link>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`}>
            <Mail className="text-red-500 hover:text-red-600 transition" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
