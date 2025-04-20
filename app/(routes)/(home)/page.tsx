"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="container pt-[90px] pb-20 text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          به تیم ما خوش آمدید
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ما گروهی از توسعه‌دهندگان، طراحان و متخصصین با هدف خلق تجربه‌های
          دیجیتال بی‌نظیر هستیم.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/team">
            <Button>معرفی اعضا</Button>
          </Link>
          <Link href="#about">
            <Button variant="outline">درباره ما</Button>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="container text-center space-y-6">
          <motion.h2
            className="text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            درباره ما
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-gray-600 leading-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            تیم ما متشکل از افرادی متخصص با تجربه در زمینه‌های طراحی UI/UX،
            توسعه‌ی وب و مدیریت پروژه است. ما در پروژه‌های مختلف به مشتریان کمک
            می‌کنیم تا بهترین تجربه دیجیتال را خلق کنند.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        ساخته شده با 💻 توسط تیم ما
      </footer>
    </main>
  );
}
