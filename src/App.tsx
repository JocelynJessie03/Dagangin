import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Calculator, 
  Package, 
  Receipt, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Search,
  Bell,
  RefreshCw,
  Plus,
  Store
} from 'lucide-react';
import { cn } from './lib/utils';

// Mock Screens (to be implemented in detail)
import Dashboard from './components/Dashboard';
import POS from './components/POS';
import Inventory from './components/Inventory';
import Reports from './components/Reports';
import Orders from './components/Orders';
import Customers from './components/Customers';

type Screen = 'dashboard' | 'pos' | 'inventory' | 'reports' | 'orders' | 'customers';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pos', label: 'Point of Sale', icon: Calculator },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'orders', label: 'Orders', icon: Receipt },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <Dashboard />;
      case 'pos': return <POS />;
      case 'inventory': return <Inventory />;
      case 'reports': return <Reports />;
      case 'orders': return <Orders />;
      case 'customers': return <Customers />;
      default: return <div className="p-8">Screen {activeScreen} coming soon...</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface text-on-surface font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 border-r border-slate-200/50 flex flex-col z-50">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
              <Store size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-primary tracking-tight leading-none">Dagangin</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Modern Steward</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id as Screen)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                activeScreen === item.id 
                  ? "bg-slate-200/50 text-primary font-bold border-r-4 border-primary" 
                  : "text-slate-500 hover:bg-slate-200/50 hover:text-primary"
              )}
            >
              <item.icon size={20} className={cn(activeScreen === item.id ? "text-primary" : "text-slate-400 group-hover:text-primary")} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200/50 space-y-2">
          <button className="w-full py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <Plus size={18} />
            <span>Open Register</span>
          </button>
          
          <div className="pt-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-200/50 rounded-xl transition-colors">
              <Settings size={18} />
              <span className="text-sm font-medium">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-200/50 rounded-xl transition-colors">
              <HelpCircle size={18} />
              <span className="text-sm font-medium">Support</span>
            </button>
          </div>

          <div className="mt-6 p-4 bg-primary rounded-2xl flex items-center gap-3 cursor-pointer group overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsjIstOSxVwLDZ3FhImrKB9aU_yUdOcb618IOSbyDTDLR6N5dy-akGqbfA8OavY4UoWLdkhkdGK2oAjov855L7m921od-P5qaopqVLBzpxDZJWqnx9bnudbxNk63LqXqxBs13Wmh5EhV0DP-eYaUJrgOSvOo7NG058ZeZ1lHPzgZn0FWPcwk4zZAWrqbQGa0x6roh3WeSSwkxtIs9XCQMWtruyeKLQtNtpxAd6nccdPHgOJyCD58GWmeekJGVnsp-RD-yByE1Raxxx" 
              alt="Profile" 
              className="w-10 h-10 rounded-lg object-cover border border-white/20"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Ahmad's Coffee</p>
              <p className="text-[10px] text-white/70 truncate">Store Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* TopBar */}
        <header className="sticky top-0 z-40 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/20 px-8 flex items-center justify-between">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-xl font-extrabold text-primary capitalize">{activeScreen.replace('-', ' ')}</h2>
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search everything..." 
                className="w-full pl-12 pr-4 py-2.5 bg-slate-100/50 border-none rounded-full text-sm focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-full transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white" />
              </button>
              <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-full transition-all">
                <RefreshCw size={20} />
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-4">
              <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Go Live</button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-on-surface">Budi Santoso</p>
                  <p className="text-[10px] text-slate-500 font-medium">Administrator</p>
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA60bhP337s7F1UZc8mo5h1zgjUeAP7_DVjj6NREcualg5kg4ZrpD_GFCnLGoToRFZ5mVhPA8ph3_HtpHEAIbnW2ZTKrlOEatLYc0ZCOy7tVnFu3rRbejjH9h5n8kKcut-5-ISHD1BRhJfDVCkpu9mgjGfJux9MXJL8HWDQaKqdowOFQHHmNB5cXHpcG-gn4hf1d0YrEo2v_8C-QamlddUPDMUmS4D-_r6rVFn7rMwU3O3-cty4NnDJ1XvtLKTnx7ZBjbLV5BMRa1o6" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-primary/10 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Screen Content */}
        <div className="flex-1 overflow-auto bg-surface">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
