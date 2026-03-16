'use client';

import React from 'react';
import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export function TopNav() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar clientes, pets..." 
          className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Dra. Julia</p>
            <p className="text-xs text-slate-500">Veterinária Chefe</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-blue-100 relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz4MYQ_-RodS_2IJF6MhJOL1piR6FHWPAQeOpaKtRzZenW86TAerK29JJS18X2SvGroF3CZ6CbgLLein6iZOMem1plznZ0beLB06Mt2htG5M_r32GQXyy_tgJeAUYG27UTZ90KkR64zyofXP0l1lqQmbjz912iqeaLQRgalfVRfphHMJu-4Lvxlcw_7I9TzQwP-SA7S76LA-DhEmnLNX2CJmEWjx-E6V4gH6msTqJcyE8EY_3GsiV62lAHYrsVdr8pKlOAbMzHTvB0"
              alt="Avatar Dra. Julia"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
