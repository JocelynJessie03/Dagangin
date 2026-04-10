import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  Trash2, 
  Minus, 
  PauseCircle, 
  CreditCard,
  UserPlus,
  QrCode,
  ShoppingCart,
  Receipt
} from 'lucide-react';
import { cn } from '../lib/utils';

const PRODUCTS = [
  { id: 1, name: 'Signature Caffe Latte', category: 'Coffee & Espresso', price: 32000, sku: 'CF-01', stock: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMofhHItqBaena0jzLxUbh2rI2E4SOR9TjzYn95GfZ0Nk93AGfd1SvmPdem4q9Mhq1fIBE63WnAS5aKXT6YmVBxVk1mviHiG2QQ-ufVtMOKSTLKeSD_DVBMXzqbr3HCaFxMHP7jOofv9e6pNBlQkN1I3eIY_8-GkKTFeFi44g9FIDcemJU8CpQ9PECt2rvyon6XHFWcHh6Y5GP5iVDDwec-6jhif8zA9-1Tx2n3wDs1nNCI3e-UdA-NBeeBTpL3SjsececaONFM7V5' },
  { id: 2, name: 'Arabica Gayo Special', category: 'Beans (Retail)', price: 145000, sku: 'BN-04', stock: 'Low Stock (8)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHA2Sg-v6Jnd3BmCJ8Rr_Q3RLP2QsAeEdw1GiQ5_yCZydEFZej7etAAuzAAwseyyv4JRQXxvzo4K_vWx-LecF7T5EqmMeZN8VjuNXU2H6picLi554kKT6YSRZopHg2_hzm6hKjoVybxd7krTUSO-AyMvQO1z-qngaYJK9YftOD8BiRcDjrnIlISBwghYULmbAuyyo_dCJNNY5vQ58guhk-gaGeEWeyAkxy4HjQaIV2gBbEnfboxW8fb0dCYiozg369jkWvnaoaouFc' },
  { id: 3, name: 'Double Shot Flat White', category: 'Coffee & Espresso', price: 35000, sku: 'CF-02', stock: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifxOYZnPr_3nAWfA_qeSwwhxDCvxzQv1wS3S78ToOH6VSaaRhjlRq6rb1ALyGVhwjomvF07TWTm2L1BcWGeP42ErQLA_cdt2gMhNZ7zQ8k5dBDNS7C43WD63fm1VavNfi7fmPR5ovRXbpKBWL_mqg1VwvhWajOA72OlZtzS0u-H0Dpk7CHkd3pVxfZ627-EEBD2P5XBm19eEBRMEvVYAahdEpEvpACxlBZFoj3YVpZZ73EP-yfEbiBg4m4KVU8AVuYAwJqtK_YH82' },
  { id: 4, name: 'Pain au Chocolat', category: 'Bakery & Pastry', price: 28000, sku: 'BK-01', stock: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtA-hgNo6t6sjLh7bPblD_BS9DI3ZsqpFGXReH9l5i4lUZwdgybrmldaMlU0PInSLnVWvoZ1-evS1oAHQK1zWAB1bEgIFKYgGQoYBbY0kJKgD7xk3VDR7-BcqGoj0pwX2U6j2xA_RZMgtGXWGanC8L_nQ2tDgalgM4exzob8E0Ko3yRo88cciISGtSlAzWSS0pWOtJeiNSbyMCHnR-DvhNYotQXIeP7fUIDVJ06-F4pPmWdtCFThsfjLoDReVe7byp0N2NqDf8i4pH' },
  { id: 5, name: 'Ceremonial Matcha Latte', category: 'Tea & Matcha', price: 38000, sku: 'TM-01', stock: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTm4yO_2WxHZTwGCw1zolcDz2fwXG1efISY-mskHu-f1WDrHyIuTIrd8zVSjLz0eED88knaeTSgePHcyxjvdUb1hby41j68ndgYC4C_hp1zElPHLtTfG3dg42TlFMd92sRkxLY4eBTnvnBRzLnlvUo_JyRlIfext7MZJm5vZ5okNvDCRCTd7RDCNu8xfmtWhr0eIJhP1XDoqLsTSg7-PwO-Hmfjpq_y2kJCUotfvMI9KF54ki5_qYgxhcnsP66nP2DMCLADfI8T3Ws' },
  { id: 6, name: 'Classic Iced Americano', category: 'Coffee & Espresso', price: 25000, sku: 'CF-03', stock: 'In Stock', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhjB3aMnn6o1F3ICPZYqJbmBgkqYzfun_Ook0Tfl_gv9l1G4f7GR1TkyvQRaFoFRBxS54sYbxzmneNnLisAfy1h56dCbPhrJvApox0S0DmzZDmEXsoIvsXRlyGEJM-RUKTFROxkW3dISUpcGfMa6WRxrJMqHsa8VJrGlzj6wRPMC5l87AZGAr1pI35R5nDVZ2T_rWxQhXvETiKQhy30t082R_dDhN1TybLMe2jWCAG0jNUav1c2rhEhehmp-wEt2xrpVYIM73P9L-o' },
];

const CATEGORIES = ['All Products', 'Coffee & Espresso', 'Tea & Matcha', 'Bakery & Pastry', 'Merchandise', 'Beans (Retail)'];

export default function POS() {
  const [cart, setCart] = useState<any[]>([
    { ...PRODUCTS[0], quantity: 2, options: '+ Oat Milk, + Extra Shot', price: 64000 },
    { ...PRODUCTS[3], quantity: 1, options: 'Freshly baked', price: 28000 },
  ]);
  const [activeCategory, setActiveCategory] = useState('All Products');

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.11;
  const total = subtotal + tax;

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Side: Product Catalog */}
      <section className="flex-1 flex flex-col p-8 bg-surface overflow-hidden">
        {/* Categories Bar */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto pr-2 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 content-start no-scrollbar">
          {/* Manual Entry Card */}
          <button className="flex flex-col items-center justify-center gap-4 p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl hover:border-primary/50 hover:bg-slate-100 transition-all group aspect-[4/5]">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary transition-transform group-hover:scale-110">
              <Plus size={24} />
            </div>
            <p className="font-bold text-primary font-headline">Manual Entry</p>
            <p className="text-xs text-slate-400 text-center px-4">Add custom item not in catalog</p>
          </button>

          {PRODUCTS.map((product) => (
            <motion.div
              layout
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer border border-slate-200/50 hover:border-primary/20 flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden bg-slate-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={cn(
                  "absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full",
                  product.stock.includes('Low') ? "bg-error-container text-error" : "bg-primary/10 text-primary"
                )}>
                  {product.stock}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-bold text-on-surface font-headline leading-tight mb-3 line-clamp-2">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-bold text-primary">Rp {product.price.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400 font-bold">SKU: {product.sku}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Right Side: Current Order Sidebar */}
      <aside className="w-[400px] bg-white flex flex-col shadow-2xl shadow-slate-900/10 z-10 border-l border-slate-200/30">
        {/* Order Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-on-surface font-headline">Current Order</h3>
            <p className="text-xs text-slate-400 font-medium">Order #POS-8291 • Dine In</p>
          </div>
          <button className="p-2 text-slate-400 hover:bg-error-container hover:text-error rounded-xl transition-all">
            <Trash2 size={20} />
          </button>
        </div>

        {/* Order Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {cart.map((item, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img src={item.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold text-sm text-on-surface truncate">{item.name}</h4>
                  <span className="text-sm font-bold text-primary">Rp {item.price.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium mb-3">{item.options}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-slate-100 rounded-xl p-0.5">
                    <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button className="text-error opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="p-6 bg-slate-50/50 space-y-4 border-t border-slate-100">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Subtotal</span>
            <span className="font-bold text-on-surface">Rp {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>Tax (11%)</span>
            <span className="font-bold text-on-surface">Rp {tax.toLocaleString()}</span>
          </div>
          <div className="pt-4 border-t border-slate-200/50 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Payable</p>
              <p className="text-3xl font-black text-primary font-headline tracking-tight">Rp {total.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-bold">Points Earned</p>
              <p className="text-xs font-bold text-secondary">102 pts</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <button className="py-4 bg-secondary-container text-secondary font-bold rounded-2xl hover:brightness-95 transition-all flex items-center justify-center gap-2">
            <PauseCircle size={20} />
            <span>Hold Order</span>
          </button>
          <button className="py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <CreditCard size={20} />
            <span>Checkout</span>
          </button>
        </div>
      </aside>

      {/* Floating Quick Actions */}
      <div className="fixed bottom-8 right-[420px] flex flex-col gap-3">
        <button className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all border border-slate-200/50">
          <UserPlus size={24} />
        </button>
        <button className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all border border-slate-200/50">
          <Receipt size={24} />
        </button>
        <button className="w-14 h-14 bg-primary text-white shadow-2xl shadow-primary/40 rounded-full flex items-center justify-center hover:scale-110 transition-all">
          <QrCode size={24} />
        </button>
      </div>
    </div>
  );
}
