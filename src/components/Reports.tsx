import { motion } from 'motion/react';
import { 
  TrendingUp, 
  TrendingDown, 
  ShoppingCart, 
  CreditCard, 
  ArrowRight, 
  Download, 
  Filter, 
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const DATA = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 6500 },
  { name: 'Wed', revenue: 5500 },
  { name: 'Thu', revenue: 8500 },
  { name: 'Fri', revenue: 7500 },
  { name: 'Sat', revenue: 9500 },
  { name: 'Sun', revenue: 6000 },
];

const TOP_PRODUCTS = [
  { name: 'Kopi Susu Gula Aren', sold: 420, progress: 85 },
  { name: 'Signature Croissant', sold: 315, progress: 65 },
  { name: 'Earl Grey Tea', sold: 284, progress: 58 },
  { name: 'Almond Milk Latte', sold: 190, progress: 40 },
];

const RECENT_REPORTS = [
  { id: '#REP-2023-081', category: 'Financial Summary', date: 'Oct 24, 2023', status: 'Completed' },
  { id: '#REP-2023-080', category: 'Inventory Audit', date: 'Oct 22, 2023', status: 'Completed' },
  { id: '#REP-2023-079', category: 'Employee Performance', date: 'Oct 21, 2023', status: 'Pending' },
  { id: '#REP-2023-078', category: 'Customer Loyalty Analytics', date: 'Oct 19, 2023', status: 'Completed' },
];

export default function Reports() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Reports & Analytics</h2>
          <p className="text-slate-500 max-w-2xl">Review your business performance and insights.</p>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-2xl self-start">
          {['Daily', 'Weekly', 'Monthly'].map((tab) => (
            <button
              key={tab}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                tab === 'Weekly' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Revenue', value: 'Rp 42.850.000', change: '+12.5%', icon: CreditCard, color: 'bg-primary/10', iconColor: 'text-primary', up: true },
          { label: 'Total Orders', value: '1,284', change: '+8.2%', icon: ShoppingCart, color: 'bg-secondary-container', iconColor: 'text-secondary', up: true },
          { label: 'Average Ticket', value: 'Rp 33.372', change: '-2.1%', icon: Clock, color: 'bg-tertiary-container/10', iconColor: 'text-tertiary', up: false },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", kpi.color, kpi.iconColor)}>
                <kpi.icon size={24} />
              </div>
              <span className={cn(
                "flex items-center text-xs font-black gap-1 px-2 py-1 rounded-full",
                kpi.up ? "text-primary bg-primary/10" : "text-error bg-error-container"
              )}>
                {kpi.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {kpi.change}
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</p>
            <h3 className="text-2xl font-black font-headline text-on-surface tracking-tight">{kpi.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Analytics Section (Bento Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Performance Bar Chart */}
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xl font-bold text-on-surface font-headline">Revenue Performance</h4>
            <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View Details
              <ArrowRight size={16} />
            </button>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                  {DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 5 ? '#005050' : '#00505040'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products Side Section */}
        <div className="lg:col-span-4 bg-slate-100/50 p-8 rounded-3xl border border-slate-200/30">
          <h4 className="text-xl font-bold text-on-surface mb-8 font-headline">Top Products</h4>
          <div className="space-y-8">
            {TOP_PRODUCTS.map((product, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-on-surface font-headline">{product.name}</span>
                  <span className="text-slate-500 font-bold text-xs">{product.sold} sold</span>
                </div>
                <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${product.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-5 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Insight of the week</p>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Beverage sales are up 14% on weekends. Consider a <span className="text-primary font-bold">"Weekend Brunch Bundle"</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="text-xl font-bold text-on-surface font-headline">Recent Reports</h4>
          <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-all">
            <Filter size={16} />
            Filter By Category
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400">
                <th className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Report ID</th>
                <th className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Category</th>
                <th className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Generated Date</th>
                <th className="px-8 py-5 font-black text-[10px] uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 font-black text-[10px] uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_REPORTS.map((report, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5 text-sm font-bold text-on-surface font-headline">{report.id}</td>
                  <td className="px-8 py-5 text-sm text-slate-500 font-medium">{report.category}</td>
                  <td className="px-8 py-5 text-sm text-slate-500 font-medium">{report.date}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 w-fit",
                      report.status === 'Completed' ? "bg-primary/10 text-primary" : "bg-secondary-container text-secondary"
                    )}>
                      {report.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {report.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="flex items-center gap-2 text-xs font-black text-primary ml-auto hover:underline">
                      <Download size={14} />
                      DOWNLOAD CSV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-5 bg-slate-50/30 flex justify-center border-t border-slate-100">
          <button className="text-sm font-bold text-slate-400 hover:text-primary transition-all">View All Archived Reports</button>
        </div>
      </div>
    </div>
  );
}
