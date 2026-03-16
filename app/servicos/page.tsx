'use client';

import React from 'react';
import { 
  Scissors, 
  Search, 
  Plus, 
  Edit, 
  Trash2 
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { id: 1, name: 'Banho & Tosa - Pequeno Porte', price: 'R$ 65,00', duration: '1h 30m', category: 'Estética' },
  { id: 2, name: 'Consulta Veterinária', price: 'R$ 150,00', duration: '45m', category: 'Saúde' },
  { id: 3, name: 'Vacina V10', price: 'R$ 120,00', duration: '15m', category: 'Saúde' },
  { id: 4, name: 'Adestramento', price: 'R$ 200,00', duration: '1h 00m', category: 'Treinamento' }
];

export default function Servicos() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Serviços</h1>
            <p className="text-slate-500 mt-1">Gerencie os serviços oferecidos e seus valores.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
            <Plus className="w-5 h-5" />
            Novo Serviço
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar por serviço..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border-slate-200 bg-slate-50 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Serviço</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Categoria</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Duração</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Preço</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-sm text-slate-800">{service.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-500">{service.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{service.duration}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{service.price}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Edit className="w-5 h-5" /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}
