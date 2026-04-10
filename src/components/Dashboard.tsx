import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Tag, 
  Package, 
  BarChart3,
  Plus,
  ArrowRight,
  Download,
  MoreVertical
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-primary bg-gradient-to-br from-primary to-primary-container p-8 text-white shadow-xl shadow-primary/10">
          <div className="relative z-10">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Daily Sales Summary</p>
            <h2 className="text-4xl font-extrabold font-headline mb-4">Rp 4.250.000</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold">
                <TrendingUp size={16} />
                <span>+12.5% vs yesterday</span>
              </div>
              <div className="flex gap-2">
                <button className="bg-white text-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors">View Details</button>
                <button className="bg-primary-container border border-white/20 text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary-container/80 transition-colors">
                  <Download size={16} />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <button className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/50 p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
          <div className="w-16 h-16 bg-secondary-container text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <ShoppingCart size={32} />
          </div>
          <h3 className="text-xl font-bold text-on-surface font-headline">New Transaction</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Quickly open the POS to register a new sale</p>
        </button>
      </section>

      {/* Grid: Performance & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Store Performance */}
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-slate-100/50 rounded-3xl p-8 border border-slate-200/30">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold font-headline">Store Performance</h3>
                <p className="text-sm text-slate-500">Top performing products this week</p>
              </div>
              <button className="text-primary font-bold text-sm hover:underline">View All</button>
            </div>
            
            <div className="space-y-8">
              {[
                { label: 'Best Seller', name: 'Arabica Beans - Signature Blend', sold: 142, progress: 85, color: 'bg-primary' },
                { label: 'Popular', name: 'Single Origin - Gayo', sold: 98, progress: 55, color: 'bg-primary/60' },
                { label: 'Trending', name: 'Espresso Roast #04', sold: 72, progress: 42, color: 'bg-primary/40' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className={cn("text-[10px] font-bold uppercase tracking-widest mb-1", i === 0 ? "text-primary" : "text-slate-400")}>{item.label}</p>
                      <p className="font-bold text-lg font-headline">{item.name}</p>
                    </div>
                    <p className="text-sm font-bold">{item.sold} units sold</p>
                  </div>
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={cn("h-full rounded-full", item.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Status */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-headline px-1">Inventory Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Paper Cups', value: '12 left', status: 'Low Stock', type: 'error' },
                { name: 'Whole Milk', value: '5 units', status: 'Critical', type: 'error' },
                { name: 'Oat Milk', value: '42 units', status: 'In Stock', type: 'success' },
                { name: 'Syrup Vanilla', value: '18 left', status: 'Replenish Soon', type: 'warning' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-xs text-slate-500 font-medium mb-1">{item.name}</p>
                  <p className={cn("text-xl font-bold font-headline", item.type === 'error' ? "text-error" : "text-on-surface")}>{item.value}</p>
                  <span className={cn(
                    "inline-block mt-2 px-2 py-0.5 text-[10px] font-bold rounded uppercase",
                    item.type === 'error' ? "bg-error-container text-error" : 
                    item.type === 'success' ? "bg-primary/10 text-primary" : "bg-secondary-container text-secondary"
                  )}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <aside className="bg-slate-100/50 p-6 rounded-3xl border border-slate-200/30">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg font-headline">Recent Activity</h3>
            <button className="p-2 hover:bg-white rounded-full transition-colors">
              <MoreVertical size={16} className="text-slate-400" />
            </button>
          </div>
          
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
            {[
              { title: 'New Sale: #TRX-9402', desc: '2x Signature Blend, 1x Latte', time: '2 mins ago • Terminal 01', icon: ShoppingCart, color: 'bg-primary-container' },
              { title: 'Stock Warning', desc: 'Paper Cups reached threshold (12)', time: '45 mins ago • System', icon: Package, color: 'bg-secondary-container' },
              { 
                title: 'Maya Putri clocked in', 
                desc: 'Morning shift started', 
                time: '07:00 AM • Staff Portal', 
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEPhg5zbERd-lvzweep9EqG2Od1t219hNBZve5JTQIkPoepOtO9EzPZEky3hEysRdIrPEmvs5sTtBT1EWIuh-tCz-89bwmdZ_Dsb42wSy2xos0Bov7MklncTO1D2sRBj-aqVuqPNv1A1zcsM9og_u6hSaTvlh-L6AdPxkq1GoOLigi7Y3UJC9-3h2EoBlVztlEMFqxpqVv88idfzNn_zumEtrI4R_dzBD_-Ox8LmlFqPkFDqDSHvdhOReob95qWtm5MUPA-ennVrUt' 
              },
              { title: 'New Sale: #TRX-9401', desc: '1x Single Origin Gayo', time: 'Yesterday • Terminal 01', icon: ShoppingCart, color: 'bg-primary-container' },
            ].map((item, i) => (
              <div key={i} className="relative flex gap-4">
                <div className="z-10 shrink-0">
                  {item.img ? (
                    <img src={item.img} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                  ) : (
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm", item.color)}>
                      {item.icon && <item.icon size={18} />}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-3 text-sm font-bold text-primary bg-white hover:bg-white/80 rounded-2xl transition-all shadow-sm">
            Show All Activity
          </button>
        </aside>
      </div>

      {/* specialized MSME Growth Card */}
      <section className="bg-primary-container/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-primary/10">
        <div className="flex gap-6 items-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <TrendingUp size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold font-headline text-primary">Growth Metric</h4>
            <p className="text-slate-600 max-w-md mt-1">Your coffee bean efficiency is 18% higher than last month. This saved approximately Rp 450k in operational costs.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm text-center min-w-[160px]">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Efficiency Index</p>
          <p className="text-4xl font-extrabold font-headline text-primary">94.2</p>
        </div>
      </section>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Plus size={32} />
      </button>
    </div>
  );
}
