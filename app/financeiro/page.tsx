'use client';

import React, { useState } from 'react';

import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Calendar,
  PieChart,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

const transactions = [
  { 
    id: 1,
    description: 'Banho & Tosa - Max', 
    category: 'Serviço', 
    date: '15 Mar, 2026', 
    amount: 'R$ 120,00', 
    type: 'income',
    status: 'Concluído',
    payment: 'Cartão de Crédito'
  },
  { 
    id: 2,
    description: 'Fornecedor Ração Premium', 
    category: 'Estoque', 
    date: '14 Mar, 2026', 
    amount: 'R$ 1.250,00', 
    type: 'expense',
    status: 'Pago',
    payment: 'Boleto'
  },
  { 
    id: 3,
    description: 'Consulta Veterinária - Mel', 
    category: 'Serviço', 
    date: '14 Mar, 2026', 
    amount: 'R$ 180,00', 
    type: 'income',
    status: 'Concluído',
    payment: 'Pix'
  },
  { 
    id: 4,
    description: 'Aluguel Sala Comercial', 
    category: 'Fixo', 
    date: '10 Mar, 2026', 
    amount: 'R$ 3.500,00', 
    type: 'expense',
    status: 'Pago',
    payment: 'Transferência'
  },
  { 
    id: 5,
    description: 'Venda Acessórios - Coleira', 
    category: 'Venda', 
    date: '09 Mar, 2026', 
    amount: 'R$ 45,00', 
    type: 'income',
    status: 'Concluído',
    payment: 'Dinheiro'
  },
];

export default function Financeiro() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Gestão Financeira</h1>
            <p className="text-slate-500 mt-1">Acompanhe o fluxo de caixa, receitas e despesas da sua clínica.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => alert('Gerando relatório financeiro...')}
              className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
            >
              <Download className="w-5 h-5" />
              Relatórios
            </button>
            <button 
              onClick={() => setIsNewTransactionOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              <Plus className="w-5 h-5" />
              Nova Transação
            </button>
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                12.5%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Receita Total (Mês)</p>
            <p className="text-3xl font-black text-slate-900 mt-1">R$ 42.850,00</p>
            <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-rose-100 p-3 rounded-xl text-rose-600">
                <TrendingDown className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-lg flex items-center gap-1">
                <ArrowDownRight className="w-3 h-3" />
                4.2%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Despesas Totais (Mês)</p>
            <p className="text-3xl font-black text-slate-900 mt-1">R$ 18.420,00</p>
            <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 w-[40%] rounded-full"></div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl shadow-xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <DollarSign className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white/10 p-3 rounded-xl text-white">
                <CreditCard className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-blue-400">Saldo Atual</span>
            </div>
            <p className="text-white/60 text-sm font-medium">Saldo em Caixa</p>
            <p className="text-3xl font-black mt-1">R$ 24.430,00</p>
            <p className="text-xs text-white/40 mt-4 italic">Atualizado há 5 minutos</p>
          </div>
        </div>

        {/* Transactions Table Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900">Transações Recentes</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Buscar transação..." 
                  className="pl-9 pr-4 py-2 bg-slate-50 border-slate-200 rounded-xl text-sm focus:ring-blue-500 w-full md:w-64"
                />
              </div>
              <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50">
                <Filter className="w-5 h-5 text-slate-500" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Descrição</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Método</th>
                  <th className="px-6 py-4">Valor</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                        }`}>
                          {t.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        </div>
                        <span className="text-sm font-bold text-slate-800">{t.description}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{t.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{t.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{t.payment}</td>
                    <td className={`px-6 py-4 font-bold text-sm ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {t.type === 'income' ? '+' : '-'} {t.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                        {t.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-slate-200 flex items-center justify-center">
            <button className="text-sm font-bold text-blue-600 hover:underline">Ver todas as transações</button>
          </div>
        </div>

        {/* Charts & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Fluxo de Caixa Semanal
              </h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Receitas
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div> Despesas
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-4">
              {[40, 65, 30, 85, 45, 90, 55].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col-reverse gap-1">
                    <div className="bg-rose-400/30 rounded-t-md" style={{ height: `${val * 0.4}px` }}></div>
                    <div className="bg-emerald-500 rounded-t-md" style={{ height: `${val}px` }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-600" />
                Despesas por Categoria
              </h3>
              <select className="text-xs border-slate-200 rounded-lg bg-slate-50 p-1">
                <option>Este Mês</option>
                <option>Mês Passado</option>
              </select>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Aluguel & Fixos', value: 'R$ 5.200', perc: 45, color: 'bg-blue-500' },
                { label: 'Estoque & Insumos', value: 'R$ 3.800', perc: 30, color: 'bg-purple-500' },
                { label: 'Marketing', value: 'R$ 1.500', perc: 15, color: 'bg-emerald-500' },
                { label: 'Outros', value: 'R$ 1.000', perc: 10, color: 'bg-slate-400' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="text-slate-900">{item.value} ({item.perc}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.perc}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {isNewTransactionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-900">Nova Transação</h2>
              <button 
                onClick={() => setIsNewTransactionOpen(false)}
                className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Tipo</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm font-bold text-slate-700">
                    <option value="income">Receita (+)</option>
                    <option value="expense">Despesa (-)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Valor (R$)</label>
                  <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm font-black text-slate-800" placeholder="0,00" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Descrição</label>
                <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="Ex: Pagamento Fornecedor" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Categoria</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm">
                    <option>Serviço</option>
                    <option>Produto</option>
                    <option>Fixo</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Data</label>
                  <input type="date" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button 
                onClick={() => setIsNewTransactionOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setIsNewTransactionOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl transition-all shadow-md"
              >
                Salvar Transação
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
