'use client';

import React, { useState } from 'react';

import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const clients = [
  { 
    id: 1,
    name: 'Ana Silva', 
    since: '2022', 
    pet: 'Thor', 
    breed: 'Golden Retriever', 
    phone: '(11) 98765-4321', 
    email: 'ana.silva@email.com', 
    lastVisit: '12 Out, 2023', 
    status: 'Ativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4BTS-XbWHpsKSMs308Buo2JSw1Bou1M5ax5GABGI61HipzPYiZYnz1OZJASz-vP_TP7yWVXZTbvYeuZ_RiVytGNRSouCxAcnWKwKc0p5S26tsF9ek9MC_eJ9E8UfPhUrJWZzv81Q8OlR9YM1M48WtV9LkE1eSCkM3aGnmAjpLL-p1F8ALVASAtVqAOhNzY06rSbrb166wt0isdgqRmxs3FAeSpONF0SAefh2uOY4W2pBi51MEaw6m97MAZ6RmdtmHEojXB2sv_nG'
  },
  { 
    id: 2,
    name: 'Marcos Oliveira', 
    since: '2023', 
    pet: 'Mel', 
    breed: 'Shih Tzu', 
    phone: '(11) 97654-3210', 
    email: 'marcos.oli@gmail.com', 
    lastVisit: '05 Nov, 2023', 
    status: 'Ativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8wnIIQFRPUhsQ7Xsi2AG7yCz3b1HPqv72EXokDDTKB-YI4cpMxaK2c5eBPEnzypDg1I9QmP1c8qOfreqvYy4UF-6WR3oDEhxC7LpgIPQHPB7CL2n4JklIUG8A0_1BCny4pxVtEit1tmniUW5On5hjN-5NIRM8HEQTBLP-QtT8VojreL5Ggzs-miXEXsIkPPHHRV8SrkO-xkxwP6eyiSUnvBsMNQ0Lf1i3dmgTa6crqzAdYqffTKyKX5TJLMUsXEaKV0JKQEM8492c'
  },
  { 
    id: 3,
    name: 'Carla Mendes', 
    since: '2021', 
    pet: 'Luna', 
    breed: 'Persian Cat', 
    phone: '(11) 91234-5678', 
    email: 'carla.m@uol.com.br', 
    lastVisit: '28 Set, 2023', 
    status: 'Inativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gOF-tWSwtEnD7ef6FpcFkKqOTVb1jhCVP_wczElAddezWed0DXFi9wzoGrnckbQfBCUfqYOHWJBHr3lhcBMvywDLPrrBrCkFpCQbBbxRjoFW3JjFDGpJJGcNOekx-Z9yhw5FZl3kSmH7QyTp-RQOJAp3C6CTFtNNwdUo_OE2XkrPEz76JaQM4nfEOHva2BoPbGC-MSLn7eTWUzrZKB7QPDE55rEjuJhAZUWPuvdiGZzKNpWAo3cx3Pi_900xQ6MqptXNgOgCWn86'
  },
  { 
    id: 4,
    name: 'Fernando Costa', 
    since: '2023', 
    pet: 'Bethoven', 
    breed: 'Beagle', 
    phone: '(11) 99887-7665', 
    email: 'f.costa@outlook.com', 
    lastVisit: '22 Nov, 2023', 
    status: 'Ativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9rDyKwiIkaYd08Fg2vSTCGrh5s0qIUnw0-jiNsvqZgghROH9_Ec7s5pKSn17K__4AzA5oEfQFboWtxYsttoFa3yjQ0WfNg8URGFf2ofWxDkNF2td81d9X4i9784RqzCYgs18EgPMbX5t_9rH-ics6ebwql3v_cVOuFnUt-SunznKIbXZJvgBY90uxkdOBOSM2ViOfYi_woZD8vqPAsy7ucEbf8ixNtTPaesFsj5wBY1EYE4Snu_ZbeaoNLS0jBbhvDTFcwP3BprU1'
  },
];

export default function Clientes() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Gerenciamento de Clientes</h1>
            <p className="text-slate-500 mt-1">Visualize e gerencie todos os clientes e seus animais registrados.</p>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 active:scale-95 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-600/20"
          >
            <Plus className="w-5 h-5" />
            Novo Cliente
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar por nome, pet ou telefone" 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border-slate-200 bg-slate-50 focus:ring-orange-500 focus:border-orange-500 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors font-medium text-sm">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors font-medium text-sm">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Cliente</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Pet & Raça</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Contato</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Última Visita</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                          <Image 
                            src={client.image}
                            alt={client.name}
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{client.name}</p>
                          <p className="text-xs text-slate-500">Cliente desde {client.since}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{client.pet}</span>
                        <span className="text-xs text-slate-500">{client.breed}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm">{client.phone}</span>
                        <span className="text-xs text-slate-500">{client.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm">{client.lastVisit}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        client.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-orange-600 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500">Mostrando 4 de 248 clientes</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-orange-600 transition-colors disabled:opacity-50" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="px-3 py-1 rounded-lg bg-orange-600 text-white font-bold text-sm">1</button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 transition-colors">2</button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 transition-colors">3</button>
              <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-orange-600 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Add Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
              <h2 className="text-xl font-bold text-slate-900">Novo Cliente</h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="space-y-6">
                <section>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Dados do Titular</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Nome Completo</label>
                      <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="Ex: João da Silva" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Telefone</label>
                      <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="(11) 90000-0000" />
                    </div>
                  </div>
                  <div className="space-y-1 mt-4">
                    <label className="text-xs font-semibold text-slate-500">E-mail</label>
                    <input type="email" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="joao@email.com" />
                  </div>
                </section>
                
                <hr className="border-slate-100" />

                <section>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Dados do Pet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Nome do Pet</label>
                      <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="Ex: Bob" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Espécie</label>
                      <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm">
                        <option>Cachorro</option>
                        <option>Gato</option>
                        <option>Ave</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Raça</label>
                      <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="Ex: Golden Retriever" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Peso (kg)</label>
                      <input type="number" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-orange-500 text-sm" placeholder="Ex: 15" />
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3 shrink-0">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:scale-95 rounded-xl transition-all shadow-md"
              >
                Salvar Cadastro
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
