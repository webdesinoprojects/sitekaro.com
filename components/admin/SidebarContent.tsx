"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LogOut,
  Briefcase,
  FileText,
  Mail,
  MapPin,
  ImageIcon,
  Globe,
  MessageSquare,
  Settings,
  HelpCircle,
  Layers,
  UserCog,
  BarChart3,
} from "lucide-react";
import { logout } from "@/lib/auth-actions";

interface SidebarContentProps {
  onNavigate?: () => void;
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 backdrop-blur-2xl border-r border-white/10 shadow-2xl relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4b11]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff6b3d]/10 rounded-full blur-3xl" />
      
      {/* Logo - Enhanced */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0 relative z-10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4b11] to-[#ff6b3d] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-[#ff4b11] to-[#ff6b3d] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Layers size={16} className="text-white" />
            </div>
          </div>
          <span className="text-base font-black tracking-wider text-white/95 group-hover:text-white transition-colors duration-200">SITEKARO</span>
        </div>
      </div>

      {/* Nav - Enhanced */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 scrollbar-hide relative z-10">
        <SectionLabel label="Main" />
        <NavItem href="/admin/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === "/admin/dashboard"} onClick={onNavigate} />
        <NavItem href="/admin/analytics" icon={<BarChart3 size={18} />} label="Analytics" active={pathname.startsWith("/admin/analytics")} onClick={onNavigate} />
        <NavItem href="/admin/enquiries" icon={<Mail size={18} />} label="Enquiries" active={pathname.startsWith("/admin/enquiries")} onClick={onNavigate} />
        <NavItem href="/admin/blogs" icon={<FileText size={18} />} label="Blogs" active={pathname.startsWith("/admin/blogs")} onClick={onNavigate} />
        <NavItem href="/admin/case-studies" icon={<Briefcase size={18} />} label="Case Studies" active={pathname.startsWith("/admin/case-studies")} onClick={onNavigate} />

        <SectionLabel label="Content" />
        <NavItem href="/admin/clients" icon={<Globe size={18} />} label="Clients" active={pathname.startsWith("/admin/clients")} onClick={onNavigate} />
        <NavItem href="/admin/services" icon={<Layers size={18} />} label="Services" active={pathname.startsWith("/admin/services")} onClick={onNavigate} />
        <NavItem href="/admin/locations" icon={<MapPin size={18} />} label="Locations" active={pathname.startsWith("/admin/locations")} onClick={onNavigate} />
        <NavItem href="/admin/pages" icon={<FileText size={18} />} label="Pages" active={pathname.startsWith("/admin/pages")} onClick={onNavigate} />
        <NavItem href="/admin/team" icon={<Users size={18} />} label="Team" active={pathname.startsWith("/admin/team")} onClick={onNavigate} />
        <NavItem href="/admin/media" icon={<ImageIcon size={18} />} label="Media" active={pathname.startsWith("/admin/media")} onClick={onNavigate} />
        <NavItem href="/admin/faqs" icon={<HelpCircle size={18} />} label="FAQs" active={pathname.startsWith("/admin/faqs")} onClick={onNavigate} />
        <NavItem href="/admin/testimonials" icon={<MessageSquare size={18} />} label="Testimonials" active={pathname.startsWith("/admin/testimonials")} onClick={onNavigate} />
        <NavItem href="/admin/employees" icon={<UserCog size={18} />} label="Employees" active={pathname.startsWith("/admin/employees")} onClick={onNavigate} />

        <SectionLabel label="Account" />
        <NavItem href="/admin/profile" icon={<Settings size={18} />} label="Settings" active={pathname.startsWith("/admin/profile")} onClick={onNavigate} />
      </nav>

      {/* Logout - Enhanced */}
      <div className="p-4 border-t border-white/10 shrink-0 relative z-10">
        <form action={logout}>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all duration-200 group">
            <LogOut size={18} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="pt-6 pb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">{label}</p>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-[#ff4b11]/15 to-[#ff6b3d]/10 text-white shadow-lg shadow-[#ff4b11]/10 border border-[#ff4b11]/20"
          : "text-white/60 hover:bg-white/5 hover:text-white/90 border border-transparent hover:border-white/10"
      }`}
    >
      {active && (
        <>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-gradient-to-b from-[#ff4b11] to-[#ff6b3d] shadow-lg shadow-[#ff4b11]/50" />
          <span className="absolute inset-0 bg-gradient-to-r from-[#ff4b11]/5 to-transparent rounded-xl" />
        </>
      )}
      <span className={`relative z-10 transition-all duration-200 ${active ? "text-[#ff6b3d] scale-110" : "text-white/50 group-hover:text-white/80 group-hover:scale-105"}`}>
        {icon}
      </span>
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
