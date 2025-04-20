import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nudia team",
  description: "وبسایت اعضای تیم نودیا",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
