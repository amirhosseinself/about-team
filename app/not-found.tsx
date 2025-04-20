// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f0f9fe] text-[#222] px-4">
      {/* Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        {/* Optional: Error Illustration */}
        <div className="relative w-full h-64 mx-auto mb-6 rounded-xl overflow-hidden">
          <Image
            src="/images/404.svg" // 👈 تصویر دلخواه خودت رو بذار اینجا
            alt="Page not found"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">صفحه پیدا نشد</h1>
        <p className="text-gray-600 mb-6">
          متأسفیم! صفحه‌ای که دنبالش هستید وجود ندارد یا ممکن است حذف شده باشد.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#3b2f2f] text-white font-medium py-2 px-6 rounded-lg transition hover:bg-[#5c4747]"
        >
          بازگشت به صفحه اصلی
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
