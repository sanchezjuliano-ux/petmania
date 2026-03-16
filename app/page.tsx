'use client';

import React from 'react';

import { 
  CalendarCheck, 
  DollarSign, 
  Dog, 
  Star, 
  PlusCircle, 
  Plus, 
  Package, 
  ShoppingCart 
} from 'lucide-react';
import { motion } from 'motion/react';

const kpis = [
  { icon: CalendarCheck, label: 'Agendamentos Hoje', value: '24', color: 'bg-blue-100 text-blue-600' },
  { icon: DollarSign, label: 'Faturamento do Dia', value: 'R$ 3.420', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Dog, label: 'Pets Ativos', value: '142', color: 'bg-purple-100 text-purple-600' },
  { icon: Star, label: 'Avaliação Média', value: '4.8', color: 'bg-amber-100 text-amber-600' },
];

const services = [
  { label: 'Banho', percentage: 45, color: 'bg-blue-500' },
  { label: 'Tosa', percentage: 30, color: 'bg-purple-500' },
  { label: 'Veterinário', percentage: 15, color: 'bg-emerald-500' },
  { label: 'Hotel', percentage: 7, color: 'bg-amber-500' },
  { label: 'Vacina', percentage: 3, color: 'bg-red-400' },
];

const appointments = [
  { initial: 'T', name: 'Thor', breed: 'Golden', service: 'Banho e Tosa', status: 'Conf.', statusColor: 'bg-green-100 text-green-700', bg: 'bg-blue-100 text-blue-600' },
  { initial: 'M', name: 'Mel', breed: 'Poodle', service: 'Consulta Veterinário', status: 'Pend.', statusColor: 'bg-amber-100 text-amber-700', bg: 'bg-amber-100 text-amber-600' },
  { initial: 'L', name: 'Luna', breed: 'SDR', service: 'Hotel - Checkin', status: 'Andam.', statusColor: 'bg-blue-600 text-white', bg: 'bg-blue-600 text-white' },
  { initial: 'B', name: 'Bento', breed: 'Bulldog', service: 'Vacina V10', status: 'Conf.', statusColor: 'bg-slate-200 text-slate-600', bg: 'bg-purple-100 text-purple-600', opacity: 'opacity-70' },
];

export default function Dashboard() {
  return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* KPI Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-12 h-12 ${kpi.color} rounded-xl flex items-center justify-center`}>
                <kpi.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{kpi.label}</p>
                <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Services Chart */}
          <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-800">Serviços mais solicitados</h3>
              <select className="text-sm border-slate-200 rounded-lg bg-slate-50 p-1">
                <option>Últimos 30 dias</option>
                <option>Últimos 7 dias</option>
              </select>
            </div>
            <div className="space-y-6">
              {services.map((service, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{service.label}</span>
                    <span className="font-semibold">{service.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${service.percentage}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`${service.color} h-3 rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Appointments List */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Próximos (Hoje)</h3>
            <div className="space-y-4">
              {appointments.map((app, i) => (
                <div key={i} className={`flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 ${app.opacity || ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${app.bg} flex items-center justify-center font-bold`}>
                      {app.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {app.name} <span className="text-xs font-normal text-slate-500">({app.breed})</span>
                      </p>
                      <p className="text-xs text-slate-500">{app.service}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 ${app.statusColor} text-[10px] font-bold rounded-lg uppercase`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-all border border-blue-200">
              Ver agenda completa
            </button>
          </section>
        </div>

        {/* Footer Actions */}
        <footer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Cadastrar Novo Pet</h4>
              <p className="text-blue-100 mb-6 max-w-xs">Adicione novos pacientes ao sistema de forma rápida e organizada.</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Novo Registro
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform">
              <Package className="w-48 h-48 text-white" />
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2">Controle de Estoque</h4>
              <p className="text-emerald-100 mb-6 max-w-xs">Verifique níveis de ração, medicamentos e acessórios em tempo real.</p>
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Ver Inventário
              </button>
            </div>
          </div>
        </footer>
      </motion.div>
  );
}
