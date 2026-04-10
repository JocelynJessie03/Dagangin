import { motion } from 'motion/react';
import { 
  Package, 
  AlertTriangle, 
  CreditCard, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';

const INVENTORY_ITEMS = [
  { id: 1, name: 'Aura Noise-Canceling Headphones', sku: 'AUD-NC-992', category: 'Electronics', price: 3450000, stock: 42, status: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcWvQAK4wDhUKLOwS62LNX06BDBIKCFI8vrPQuW0FRg0kf1PZI1I8ga7cOeJf_2W7sxe_UyWu7kJ0ubDZWLurlBl-rbDgQEv-7fNo10DsYLQX2QWWQUI93KDxkfHbfCBFpoI5AxbtM5593Zgd1aIPh1d-w223PhoyZIhVF_A5A9z9VGZQ3ZFbaf0nCKWAfdbHSEiyIeh7knt_WAeACXdKa33NrhrjzO1_xHKMZmuUQqXaNoMF3YxA3DXWdMfWI32pHsFnTD5WIcp0X' },
  { id: 2, name: 'Barista Pro Espresso Maker', sku: 'KIT-ESP-302', category: 'Appliances', price: 8200000, stock: 5, status: 'Low Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa90EWLEZXZ6l8CC3CRNX8SYLxua11M-DRfTM9d15WW8O_W5b6s9kUAwKo3i_n0fR1zoeThYSvVpWz5TtPr94SLlA6FajecF7-n8qxK-sCxqCpBFmhlR_9Y3vBQXmGH1fs-ClaKfOjC3-E-_QoJ7ryeMMdaifNP5qnpaRLNXMqVNwiCZz3Kk4Umzn3EUSVl3LnoiMCpOeeTx-W5CuN0FjaB18CNqRVMyFYM-j8uSaSoOdxZjOEmc6xM-CrJLn9em0pfAOvMGz4zHXG' },
  { id: 3, name: 'Essential Cotton Tee - Sage', sku: 'APP-TS-044', category: 'Apparel', price: 249000, stock: 0, status: 'Out of Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKaJsAPUitRPGkBwhy5t74dZjoE58nl9NX8CUP47HKeUmib5DLfsd2K61_rVVcK9DDDecjkL8FrFOYsEJWHaZ9AVxcFx4jfEnTvDrbzIUsBy6tQrbOBcZaDbIaFRq1-scNVqPKVeGuid4RPQ5CPZPE7oLsaRXrqZpxhQ5x0vcx-YJapUgMUpMGjWMNuZXjyMcr6TsUs2jDQwNsFEmw2PlmEO_kglP3teaBxRb5Sd2TJSqXtozeVVPdFPnPXAoefbM4Am4I6JITNi4U' },
  { id: 4, name: 'Vegan Leather Desk Mat', sku: 'OFF-DM-881', category: 'Office', price: 550000, stock: 152, status: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBObHH3kkEG2Hl-G2vdwY309oFlGR8MyYDUH6sY8_V6pI_P35kHTG4RljeBhfweSJl20odj8_cvhSjoFcDoPDIsy0pO1r0aYTlKFiXkVL4nYt0orgfaPDupirsgH4SvOg9QWAeFWFfTE7CW1VaU15UbnNGHN5a8A8p9VQO53jQ6koz14sTXjYeDQq-cNHQx76wQ1RlYWBi8dcJ8ZAh1QvCN0Ve3YIiDBLwqDUp-ZcWGYEJMFDLYg9rblGOt_wpoEF6x0xkS-K0Wdv_s' },
];

export default function Inventory() {
  return (
    <div className="p-8 space-y-10 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Inventory Central</h1>
        <p className="text-slate-500 max-w-2xl">Manage your stock, track product movements, and optimize your supply chain with our real-time steward engine.</p>
      </div>

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Items */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/50 group hover:border-primary/20 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-primary">
              <Package size={24} />
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">+2.4%</span>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Total Items</p>
            <p className="text-3xl font-extrabold font-headline">1,284</p>
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/50 group hover:border-error/20 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-error-container/20 flex items-center justify-center text-error">
              <AlertTriangle size={24} />
            </div>
            <span className="text-xs font-bold text-error bg-error-container px-3 py-1 rounded-full">Attention Required</span>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Low Stock</p>
            <p className="text-3xl font-extrabold font-headline">18</p>
          </div>
        </div>

        {/* Inventory Value */}
        <div className="bg-primary p-6 rounded-3xl border border-primary/20 group hover:bg-primary/90 transition-all shadow-xl shadow-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <TrendingUp size={24} />
            </div>
            <span className="text-xs font-bold text-white/70 bg-white/10 px-3 py-1 rounded-full">Total Value</span>
          </div>
          <div className="space-y-1">
            <p className="text-white/60 font-bold text-xs uppercase tracking-widest">Inventory Value</p>
            <p className="text-3xl font-extrabold font-headline text-white tracking-tight">Rp 42.8M</p>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200/50">
        {/* Table Header Controls */}
        <div className="px-8 py-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl">
            {['All', 'Low Stock', 'Out of Stock'].map((tab) => (
              <button
                key={tab}
                className={cn(
                  "px-6 py-2 text-sm font-bold rounded-xl transition-all",
                  tab === 'All' ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Filter size={16} />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Product</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">SKU</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Category</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Price</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Stock</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400">Status</th>
                <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-black text-slate-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {INVENTORY_ITEMS.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/50">
                        <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                      </div>
                      <span className="font-bold text-on-surface text-sm font-headline">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-mono text-xs text-slate-400 font-bold">{item.sku}</td>
                  <td className="px-8 py-5 text-sm text-slate-500 font-medium">{item.category}</td>
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">Rp {item.price.toLocaleString()}</td>
                  <td className={cn("px-8 py-5 text-sm font-black font-headline", item.stock <= 5 ? "text-error" : "text-on-surface")}>{item.stock}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                      item.status === 'In Stock' ? "bg-primary/10 text-primary" : 
                      item.status === 'Low Stock' ? "bg-error-container text-error" : "bg-slate-100 text-slate-400"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                      <MoreHorizontal size={20} className="text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="px-8 py-5 bg-slate-50/30 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400">Showing 1-10 of 1,284 products</span>
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
