import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Mail } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminEnquiriesPage() {
  const enquiries = await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-8">
      {/* Page Header - Enhanced */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Enquiries</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">Manage and respond to customer enquiries</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-700">{enquiries.length} Total</span>
        </div>
      </div>

      {/* Premium Glass Container */}
      <div className="relative group">
        {/* Ambient glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff4b11]/20 to-[#ff6b3d]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main container */}
        <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-slate-200/60 bg-gradient-to-r from-slate-50/50 to-transparent hover:bg-slate-50/80">
                <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Name</TableHead>
                <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Email</TableHead>
                <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Service</TableHead>
                <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Status</TableHead>
                <TableHead className="font-bold text-slate-700 text-xs uppercase tracking-wider">Date</TableHead>
                <TableHead className="text-right font-bold text-slate-700 text-xs uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry, index) => (
                <TableRow 
                  key={enquiry.id}
                  className="border-b border-slate-100/60 hover:bg-gradient-to-r hover:from-[#ff4b11]/5 hover:to-transparent transition-all duration-200 group/row"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-bold text-slate-900 group-hover/row:text-[#ff4b11] transition-colors duration-200">
                    {enquiry.name}
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium text-sm">{enquiry.email}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                      {enquiry.service || "General"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      enquiry.status === 'new' 
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30' 
                        : enquiry.status === 'contacted'
                        ? 'bg-gradient-to-r from-[#ff4b11] to-[#ff6b3d] text-white shadow-[#ff4b11]/30'
                        : 'bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-slate-500/30'
                    }`}>
                      {enquiry.status.toUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium text-sm">
                    {new Date(enquiry.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/admin/enquiries/${enquiry.id}`}>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-9 w-9 rounded-xl text-slate-400 hover:text-[#ff4b11] hover:bg-[#ff4b11]/10 hover:scale-110 transition-all duration-200 border border-transparent hover:border-[#ff4b11]/20 shadow-sm hover:shadow-md"
                      >
                        <Eye size={16} />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {enquiries.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-16">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <Mail className="h-8 w-8 text-slate-400" />
                      </div>
                      <p className="text-slate-500 font-semibold">No enquiries found</p>
                      <p className="text-slate-400 text-sm">New enquiries will appear here</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
