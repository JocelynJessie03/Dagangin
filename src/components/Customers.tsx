import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  UserPlus, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Star,
  Mail,
  Phone,
  History,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';

const CUSTOMERS = [
  { id: 1, name: 'Budi Santoso', email: 'budi.s@gmail.com', phone: '+62 812-3456-7890', totalSpend: 2450000, visits: 12, points: 2450, tier: 'Gold', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA60bhP337s7F1UZc8mo5h1zgjUeAP7_DVjj6NREcualg5kg4ZrpD_GFCnLGoToRFZ5mVhPA8ph3_HtpHEAIbnW2ZTKrlOEatLYc0ZCOy7tVnFu3rRbejjH9h5n8kKcut-5-ISHD1BRhJfDVCkpu9mgjGfJux9MXJL8HWDQaKqdowOFQHHmNB5cXHpcG-gn4hf1d0YrEo2v_8C-QamlddUPDMUmS4D-_r6rVFn7rMwU3O3-cty4NnDJ1XvtLKTnx7ZBjbLV5BMRa1o6' },
  { id: 2, name: 'Maya Putri', email: 'maya.p@outlook.com', phone: '+62 811-9876-5432', totalSpend: 1280000, visits: 8, points: 1280, tier: 'Silver', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEPhg5zbERd-lvzweep9EqG2Od1t219hNBZve5JTQIkPoepOtO9EzPZEky3hEysRdIrPEmvs5sTtBT1EWIuh-tCz-89bwmdZ_Dsb42wSy2xos0Bov7MklncTO1D2sRBj-aqVuqPNv1A1zcsM9og_u6hSaTvlh-L6AdPxkq1GoOLigi7Y3UJC9-3h2EoBlVztlEMFqxpqVv88idfzNn_zumEtrI4R_dzBD_-Ox8LmlFqPkFDqDSHvdhOReob95qWtm5MUPA-ennVrUt' },
  { id: 3, name: 'Andi Wijaya', email: 'andi.w@yahoo.com', phone: '+62 813-1122-3344', totalSpend: 850000, visits: 5, points: 850, tier: 'Bronze', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt7PBy1rdN8KPj5MRQgFUr-HMiokOGb7C1y2QEGur0jZOVt_pgc_IPGv3A23Xm8Pud2_t5HmuRYiu1Z_LuJ2TJ-e6aKs97RHhNi1_Wkt7RtwVWvqcUtkdTunhRwPf24N46Jqa6KSvPX_pCB1wgtTbP5gUAXRxjppdMmtoFc6qJyxCgol0_Ve1ffEZNGBKrDuZrQlPCTZPlMlNAALz4VWYMQUJ2RIcTjAc642OxHx-GGJFo338wZJ_1K1a2Y3FviGTON1NG47TbA76z' },
  { id: 4, name: 'Siti Aminah', email: 'siti.a@gmail.com', phone: '+62 815-5566-7788', totalSpend: 3200000, visits: 15, points: 3200, tier: 'Platinum', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfClNtCGabHxvFd5rUm8WaEaX94s4ZRHfJP6qBDKnt36DcaflRNFoh2abWDFyVeT3CvKn912bkftwriDNUG9vXtsu23F-rhIM1keyY5MQxiUbsF2-CfV_yrkXOajzmUJ36uB88_h1H1tNlmyyUgMkjjzfgx1zROpL-gxl0ewdjW3vLQ9n17SnJH6QwRJ9cc09_T3y9paZuqEkZiflLfdqb0YLKIFdNILa-KCX8KSKeh7Uylk2o0IQbiAm6EHAjKMs3fbl2Y-ISCxmY' },
];

export default function Customers() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Customer Directory</h1>
          <p className="text-slate-500 max-w-2xl">Manage your customer relationships and loyalty programs.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all self-start sm:self-auto">
          <UserPlus size={20} />
          <span>Add New Customer</span>
        </button>
      </div>

      {/* Loyalty Tiers Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Platinum', count: 12, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
          { label: 'Gold', count: 48, color: 'bg-amber-50 text-amber-700 border-amber-100' },
          { label: 'Silver', count: 156, color: 'bg-slate-50 text-slate-700 border-slate-200' },
          { label: 'Bronze', count: 842, color: 'bg-orange-50 text-orange-700 border-orange-100' },
        ].map((tier, i) => (
          <div key={i} className={cn("p-5 rounded-3xl border shadow-sm flex flex-col items-center text-center", tier.color)}>
            <Star size={24} className="mb-2" fill="currentColor" />
            <p className="text-[10px] font-black uppercase tracking-widest mb-1">{tier.label} Members</p>
            <p className="text-2xl font-black font-headline">{tier.count}</p>
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
              placeholder="Search by name, email or phone..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100/50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <TrendingUp size={16} />
              <span>Top Spenders</span>
            </button>
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Star size={16} />
              <span>Tier Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Customer</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Contact</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Total Spend</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Visits</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Loyalty Points</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Tier</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={customer.img} 
                        alt={customer.name} 
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-primary/10"
                        referrerPolicy="no-referrer"
                      />
                      <span className="font-bold text-on-surface text-sm font-headline">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Mail size={12} />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Phone size={12} />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-on-surface">Rp {customer.totalSpend.toLocaleString()}</td>
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{customer.visits} visits</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-3/4 rounded-full" />
                      </div>
                      <span className="text-xs font-bold text-secondary">{customer.points} pts</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full",
                      customer.tier === 'Platinum' ? "bg-indigo-100 text-indigo-700" : 
                      customer.tier === 'Gold' ? "bg-amber-100 text-amber-700" : 
                      customer.tier === 'Silver' ? "bg-slate-100 text-slate-700" : "bg-orange-100 text-orange-700"
                    )}>
                      {customer.tier}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-primary/10 text-primary rounded-xl transition-colors">
                        <History size={18} />
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
          <span className="text-xs font-bold text-slate-400">Showing 1-10 of 1,058 customers</span>
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
