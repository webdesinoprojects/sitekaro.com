// import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Sitekaro Admin",
  description: "Admin Dashboard for Sitekaro",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* <Toaster /> */}
    </>
  );
}
