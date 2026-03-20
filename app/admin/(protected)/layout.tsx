import { createClient } from "@/lib/supabase/server";
import { SidebarContent } from "@/components/admin/SidebarContent";
import { MobileSidebar } from "@/components/admin/MobileSidebar";
import Link from "next/link";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : "A";
  const userName = user?.email ? user.email.split("@")[0] : "Admin";
  const userEmail = user?.email ?? "admin@sitekaro.com";

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-slate-50/50 to-slate-100/80 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#ff4b11]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#ff6b3d]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* DESKTOP SIDEBAR - Premium Glass */}
      <aside className="w-64 hidden md:block fixed h-full z-20">
        <SidebarContent />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 w-full min-w-0 relative z-10">
        {/* TOP NAVBAR - Enhanced Glass */}
        <header className="h-16 bg-white/70 backdrop-blur-xl border-b border-white/60 flex items-center justify-between px-6 md:px-8 sticky top-0 z-30 shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_8px_24px_-4px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-4">
            <MobileSidebar />
            <Link
              href="/admin/dashboard"
              className="text-sm font-bold text-slate-800 tracking-tight hidden sm:block hover:text-[#ff4b11] transition-colors duration-200"
            >
              Admin Panel
            </Link>
          </div>

          {/* Right: Enhanced user pill */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-xs font-bold text-slate-800 capitalize">{userName}</span>
              <span className="text-[10px] text-slate-500 font-medium">{userEmail}</span>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4b11] to-[#ff6b3d] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-[#ff4b11] to-[#ff6b3d] flex items-center justify-center text-white text-sm font-bold shadow-lg ring-2 ring-white/50 group-hover:scale-105 transition-transform duration-200">
                {userInitial}
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  );
}
