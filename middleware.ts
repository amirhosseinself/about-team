import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // اگر مسیر دقیقاً "/dashboard" بود، به "/dashboard/home" ریدایرکت کن
  if (request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  return NextResponse.next();
}

// تعریف مسیرهای خاصی که Middleware روی آن‌ها اجرا شود
export const config = {
  matcher: "/dashboard", // فقط روی "/dashboard" اجرا می‌شود
};
