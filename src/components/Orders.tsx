import { motion } from 'motion/react';
import { 
  Receipt, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  XCircle,
  Eye
} from 'lucide-react';
import { cn } from '../lib/utils';

const ORDERS = [
  { id: '#ORD-8291', customer: 'Budi Santoso', date: 'Oct 24, 2023, 14:20', total: 102120, items: 3, status: 'Completed', method: 'Cash' },
  { id: '#ORD-8290', customer: 'Maya Putri', date: 'Oct 24, 2023, 13:45', total: 45000, items: 1, status: 'Completed', method: 'QRIS' },
  { id: '#ORD-8289', customer: 'Walk-in Customer', date: 'Oct 24, 2023, 12:10', total: 125000, items: 4, status: 'Pending', method: 'Card' },
  { id: '#ORD-8288', customer: 'Andi Wijaya', date: 'Oct 23, 2023, 18:30', total: 88000, items: 2, status: 'Cancelled', method: 'Cash' },
  { id: '#ORD-8287', customer: 'Siti Aminah', date: 'Oct 23, 2023, 17:15', total: 210000, items: 6, status: 'Completed', method: 'QRIS' },
];

export default function Orders() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Order History</h1>
          <p className="text-slate-500 max-w-2xl">Track and manage all transactions from your POS terminals.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders', value: '1,284', icon: Receipt, color: 'text-primary bg-primary/10' },
          { label: 'Completed', value: '1,120', icon: CheckCircle2, color: 'text-green-600 bg-green-50' },
          { label: 'Pending', value: '45', icon: Clock, color: 'text-amber-600 bg-amber-50' },
          { label: 'Cancelled', value: '119', icon: XCircle, color: 'text-error bg-error-container/30' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className={cn("p-2 rounded-lg", stat.color)}>
                <stat.icon size={18} />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
            <p className="text-2xl font-black font-headline">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100/50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={16} />
              <span>Filter Status</span>
            </button>
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Clock size={16} />
              <span>Date Range</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Order ID</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Customer</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Date & Time</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Items</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Total</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Status</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5 text-sm font-bold text-primary font-headline">{order.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-on-surface">{order.customer}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{order.method}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-500 font-medium">{order.date}</td>
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{order.items} items</td>
                  <td className="px-8 py-5 text-sm font-black text-on-surface">Rp {order.total.toLocaleString()}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 w-fit",
                      order.status === 'Completed' ? "bg-green-100 text-green-700" : 
                      order.status === 'Pending' ? "bg-amber-100 text-amber-700" : "bg-error-container text-error"
                    )}>
                      {order.status === 'Completed' ? <CheckCircle2 size={12} /> : 
                       order.status === 'Pending' ? <Clock size={12} /> : <XCircle size={12} />}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-primary/10 text-primary rounded-xl transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                        <MoreHorizontal size={18} className="text-slate-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-5 bg-slate-50/30 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400">Showing 1-10 of 1,284 orders</span>
          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl border border-slate-200 hover:bg-white transition-all disabled:opacity-30 shadow-sm" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="p-2.5 rounded-xl border border-slate-200 hover:bg-white transition-all shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
