'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/login/actions';
import { 
  PawPrint, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Package, 
  Settings, 
  LogOut,
  BarChart3,
  Scissors
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Calendar, label: 'Agendamentos', href: '/agendamentos' },
  { icon: Users, label: 'Clientes & Pets', href: '/clientes' },
  { icon: Scissors, label: 'Serviços', href: '/servicos' },
  { icon: Package, label: 'Inventário', href: '/inventario' },
  { icon: BarChart3, label: 'Financeiro', href: '/financeiro' },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 flex flex-col transition-all duration-300 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-xl">
          <PawPrint className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-xl text-slate-800 hidden lg:block">PetManager</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={() => logout()}
          className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium hidden lg:block">Sair</span>
        </button>
      </div>
    </aside>
  );
}
