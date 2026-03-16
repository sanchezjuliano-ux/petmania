'use client';

import React, { useState } from 'react';

import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Edit,
  ChevronLeft,
  ChevronRight,
  Package,
  AlertTriangle,
  Banknote,
  ShoppingCart,
  RefreshCw,
  History,
  X
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const inventoryItems = [
  { 
    id: 1,
    name: 'Ração Premium Adulto 15kg', 
    ref: 'RP-0012', 
    category: 'Ração', 
    stock: '45 un.', 
    price: 'R$ 249,90', 
    status: 'Em Estoque',
    statusColor: 'bg-green-500/10 text-green-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBU6f11-1cxOdrRUCnIDeGFyfnvQPuoFQ7SFOHLeUhNYaRHVZi7HyoQPCNAARJPsuwmBjIvtIgFJP7V2YOLcAzHnTCygKhonNvj4CialHiLW_m8Df0IJ4Wr1HEJkasKu8QS_2pQzqkJ2rlS88fpxAfVNCYrETAGfyKaQOFmSJuU-PBxqI7bEy5zS6WumwkkdZu8JSHcet6b74NEgwHNgqiQJ6NoaoqicPF2D85mpWkYfwdBx9m9sxPqHTVSlIhpFqoLoCwnJA3ZJI7'
  },
  { 
    id: 2,
    name: 'Antibiótico PetCure 20mg', 
    ref: 'MD-9921', 
    category: 'Medicamento', 
    stock: '5 un.', 
    price: 'R$ 89,00', 
    status: 'Baixo Estoque',
    statusColor: 'bg-orange-500/10 text-orange-600',
    isLow: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBffGK1BrKR8gMFDHoYUPOXB06LjPcj5hYj0cU2z2gQXC5RBbQKF_foz--fsApC_wI5Df4x5oSJUlrHVOLhHZWyFZ1kl083PhLylVbkfQnFU48OqbBEM9BD8KUQjEKvNRXuT2ZPGJFgPOi16qTQERz8opCttb-qygA-wKB1cJtMYk6p9bbyp2gHvdgt54yvXhK_SaZGRGgUIu5fMSHXs7IzLfwswOIiSAPa0RwtHXyL9uHRZOO4F857-8AdT2im80lQSxLuk9E3FSkJ'
  },
  { 
    id: 3,
    name: 'Coleira Nylon Azul G', 
    ref: 'AC-0442', 
    category: 'Acessório', 
    stock: '0 un.', 
    price: 'R$ 35,00', 
    status: 'Esgotado',
    statusColor: 'bg-red-500/10 text-red-600',
    isOut: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVMmBVOA1LHBaQ8os1A4hGPCpz8-Ny0matO8mPdG4hL062TRz4NvH0yY1WGmjZpwLDcC3-tpwIoV6WYvO_eAAYaiRugiBsWjWe7zCA0pk4hizstAR-waYl0c1oy15BAJAZ9brX__u9ZK0wBJN2lObmZ2XImrnjjGWra_SOevyE5uTw_0xIrdLOGggSjCm1Xu9nsNwURSK74S6BcPivMhM1SaaHRR543F2BegIIY3uIBsAENkR67-QykUUFRI8Aaqt-k1HfcfdT4Zw-'
  },
  { 
    id: 4,
    name: 'Ração Gatos Castrados 1kg', 
    ref: 'RG-1102', 
    category: 'Ração', 
    stock: '82 un.', 
    price: 'R$ 55,00', 
    status: 'Em Estoque',
    statusColor: 'bg-green-500/10 text-green-600',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvguVcGvaJtoRJMaHk4VtG_wt2ccZLdqaUx9ViKdhuSyq4D05l6kEznxg2rqUwWzYR-P6SCE0LbA-dZpCyDp_dYhC5Ej0r7u4UQRdxFGX8h3v6aP-Y64aV5pM9fdEHQOKEZ5Rhx7F575qMHdN0dCSGZz93qc9QMk9mA80iIMm81pt9UNxQSl7yLvP3e7ZJAtYOoTU8uYLJJm3gFP30e-_yOhIVXSvgsVhfOM0JHzh5F9lZhErlIJoq33s-jY5G7Q_33q62Rtf2NhG7'
  },
];

export default function Inventario() {
  const [isNewProductOpen, setIsNewProductOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Controle de Inventário</h2>
            <p className="text-slate-500 mt-1">Gerencie o estoque de produtos e insumos da clínica</p>
          </div>
          <button 
            onClick={() => setIsNewProductOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
          >
            <Plus className="w-5 h-5" />
            Novo Produto
          </button>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Package className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+2%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total de Itens</p>
            <p className="text-2xl font-black mt-1">1.284</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-orange-500">Atenção</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Baixo Estoque</p>
            <p className="text-2xl font-black mt-1">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Banknote className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+5%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Valor do Estoque</p>
            <p className="text-2xl font-black mt-1">R$ 45.200,00</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400">Pendente</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Pedidos Pendentes</p>
            <p className="text-2xl font-black mt-1">8</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-100 text-slate-900 rounded-lg text-sm font-bold">Todos</button>
              <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm font-medium">Ração</button>
              <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm font-medium">Medicamento</button>
              <button className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm font-medium">Acessório</button>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600">
                <Filter className="w-4 h-4" />
                Filtrar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600">
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Produto</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Qtd. em Estoque</th>
                  <th className="px-6 py-4">Preço Unitário</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden relative">
                          <Image 
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{item.name}</p>
                          <p className="text-xs text-slate-500">REF: {item.ref}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">{item.category}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={item.isLow ? 'text-orange-500 font-bold' : item.isOut ? 'text-red-500 font-bold' : ''}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{item.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 ${item.statusColor} text-[10px] font-bold uppercase rounded-full`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {(item.isLow || item.isOut) && (
                          <button className="bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase px-2 py-1 rounded hover:bg-blue-600 hover:text-white transition-all">Repor</button>
                        )}
                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-500">Mostrando <span className="font-bold text-slate-900">1 - 4</span> de <span className="font-bold text-slate-900">1,284</span> itens</p>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 text-white flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Automatize suas reposições</h3>
              <p className="text-white/80 max-w-md">Configure alertas automáticos e integração com fornecedores para nunca ficar sem os produtos essenciais.</p>
              <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg text-sm hover:shadow-lg transition-all">Configurar agora</button>
            </div>
            <div className="hidden md:block opacity-20 transform scale-150 mr-8 group-hover:rotate-12 transition-transform">
              <RefreshCw className="w-48 h-48" />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <History className="w-5 h-5 text-orange-500" />
              Atividades Recentes
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Entrada de estoque</p>
                  <p className="text-xs text-slate-500">50un - Ração Premium Adulto</p>
                  <p className="text-[10px] text-slate-400 mt-1">há 2 horas por Dra. Julia</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Produto Esgotado</p>
                  <p className="text-xs text-slate-500">Coleira Nylon Azul G</p>
                  <p className="text-[10px] text-slate-400 mt-1">há 5 horas</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Preço Atualizado</p>
                  <p className="text-xs text-slate-500">Antibiótico PetCure</p>
                  <p className="text-[10px] text-slate-400 mt-1">Ontem às 16:45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {isNewProductOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-900">Novo Produto</h2>
              <button onClick={() => setIsNewProductOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Nome do Produto</label>
                <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="Ex: Ração Golden..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Categoria</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm">
                    <option>Ração</option>
                    <option>Medicamento</option>
                    <option>Acessório</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Referência (SKU)</label>
                  <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="Ex: REF-001" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Qtd. em Estoque</label>
                  <input type="number" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="0" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Preço (R$)</label>
                  <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="0,00" />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button onClick={() => setIsNewProductOpen(false)} className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl">Cancelar</button>
              <button onClick={() => setIsNewProductOpen(false)} className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl">Salvar Produto</button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
