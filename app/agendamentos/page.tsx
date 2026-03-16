'use client';

import React, { useState } from 'react';

import { 
  Plus, 
  Search, 
  Bell, 
  Clock, 
  User,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const appointments = [
  { 
    id: 1,
    name: 'Max', 
    breed: 'Golden Retriever', 
    age: '2 anos', 
    time: '10:00 - 11:30', 
    service: 'Banho & Tosa', 
    staff: 'Bruno Soares',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCvynDIM2GQK6CSEfFlJaya8bETGqP_ZDBTMWeejWLCvFeZjQPKDie-E6gyYN_fmlpFjoGlUawPuHsNHRzzPrv4PAmPgGHv1UKuuXEtKhEW9tA36DHTaLvOqJSnjmHMV8RTzd14tSyhqX2CN3apNAmnUrvM0bWGLdAceYGcjIzdoHEbomJl2hzVf0Eeiv5SmwCr_mundrAy5EknhF18Z4gvRGlhW7bctqLLfmODolWkCPVcd3dI-ulBkiFGda6uasbMIqgBRhi0wkp'
  },
  { 
    id: 2,
    name: 'Bella', 
    breed: 'Poodle', 
    age: '5 anos', 
    time: '14:00 - 15:00', 
    service: 'Vacinação', 
    staff: 'Dra. Mariana',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHnGoF8TuTHPXizU0AJvTrJD3Z76y_ABGD0G7x297rz2RugC7M0zrG4IQZUU62PCzAtFac7Y7v9l19nh-0aPzN1Dtw4dDwGKbcoNeeS3dr5pAU5CGG3qe1ezslAfzAJHeMpMP0p8ROs_4zL1IfzXgE6tLkt9dWXCW8m9hC7iBS0dPnODmg9XvndL5-liCd_KArZ7I3On12an6ezHy7fKd3erC9lEJ2c9P-DYLV4QZLnEma3b3C1-WkbxKOoGKOJwJtoA9alRNYT5np'
  },
  { 
    id: 3,
    name: 'Thor', 
    breed: 'Boxer', 
    age: '1 ano', 
    time: '16:30 - 17:30', 
    service: 'Adestramento', 
    staff: 'Dra. Mariana',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbIoz1-_b4LvSWgoiUoJhZTuPpZD5LJG1R4IqcmtR20gU4Wl3JdSvDFsZ11Ub7IOZk92zw0ccobiJCUD2QEDCTpIxm-4_MuYxdTGAzqTCrIeEECWvHO9XgHokV15YkLwOyV3pkgQ_nlIX8EOzmzgKbMPzA2oLPm0dSVusHaAdpPUw9dWhNGHh3sA8r-VrG58GB8-TfHZvm9CgHAWhNd-LP3r-Sgw-V33eODHQmgpnptPtvqRiwrepgI5ODzN67XUtrsiG9YpQqV5Jx'
  },
];

const hours = Array.from({ length: 12 }, (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`);

export default function Agendamentos() {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-8 h-full">
        {/* Calendar Section */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Agendamentos</h1>
            <button 
              onClick={() => setIsAddMode(true)}
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-sm transition-all"
            >
              <Plus className="w-5 h-5" />
              Novo Agendamento
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Funcionário:</label>
              <select className="border-slate-200 rounded-lg text-sm focus:ring-blue-500 p-1">
                <option>Todos</option>
                <option>Dra. Mariana</option>
                <option>Bruno (Banho)</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Serviço:</label>
              <select className="border-slate-200 rounded-lg text-sm focus:ring-blue-500 p-1">
                <option>Todos</option>
                <option>Banho & Tosa</option>
                <option>Consulta Médica</option>
                <option>Adestramento</option>
              </select>
            </div>
            <div className="ml-auto flex items-center bg-slate-100 p-1 rounded-lg">
              <button className="px-4 py-1.5 text-sm font-medium rounded-md bg-white shadow-sm">Semana</button>
              <button className="px-4 py-1.5 text-sm font-medium text-slate-500">Dia</button>
              <button className="px-4 py-1.5 text-sm font-medium text-slate-500">Mês</button>
            </div>
          </div>

          {/* Weekly Calendar Table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50">
              <div className="p-4 border-r border-slate-200 w-20 text-center"></div>
              {['Seg 12', 'Ter 13', 'Qua 14', 'Qui 15', 'Sex 16'].map((day, i) => (
                <div key={i} className={`p-4 border-r border-slate-200 text-center flex flex-col ${i === 1 ? 'bg-blue-50/50' : ''}`}>
                  <span className={`text-xs font-bold uppercase ${i === 1 ? 'text-blue-600' : 'text-slate-400'}`}>{day.split(' ')[0]}</span>
                  <span className={`text-lg font-bold ${i === 1 ? 'text-blue-600' : ''}`}>{day.split(' ')[1]}</span>
                </div>
              ))}
            </div>
            
            <div className="relative overflow-y-auto max-h-[600px] custom-scrollbar">
              <div className="grid grid-cols-6 divide-x divide-slate-100">
                {/* Time Column */}
                <div className="flex flex-col bg-slate-50/30">
                  {hours.map((hour) => (
                    <div key={hour} className="h-24 p-2 text-xs font-semibold text-slate-400 text-center border-b border-slate-100">
                      {hour}
                    </div>
                  ))}
                </div>

                {/* Days Content Columns */}
                {Array.from({ length: 5 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="relative h-full border-b border-slate-100">
                    {dayIndex === 0 && (
                      <div className="absolute top-[12rem] left-1 right-1 h-20 bg-blue-100 border-l-4 border-blue-600 rounded-md p-2 cursor-move shadow-sm group">
                        <p className="text-[10px] font-bold text-blue-700 uppercase">Banho</p>
                        <p className="text-xs font-semibold text-blue-900 truncate">Max (Golden)</p>
                      </div>
                    )}
                    {dayIndex === 1 && (
                      <div className="absolute top-[4rem] left-1 right-1 h-32 bg-green-100 border-l-4 border-green-600 rounded-md p-2 cursor-move shadow-sm">
                        <p className="text-[10px] font-bold text-green-700 uppercase">Consulta</p>
                        <p className="text-xs font-semibold text-green-900 truncate">Bella (Poodle)</p>
                      </div>
                    )}
                    {dayIndex === 2 && (
                      <div className="absolute top-[18rem] left-1 right-1 h-24 bg-orange-100 border-l-4 border-orange-600 rounded-md p-2 cursor-move shadow-sm">
                        <p className="text-[10px] font-bold text-orange-700 uppercase">Treinamento</p>
                        <p className="text-xs font-semibold text-orange-900 truncate">Thor (Boxer)</p>
                      </div>
                    )}
                    {dayIndex === 3 && (
                      <div className="absolute top-[8rem] left-1 right-1 h-20 bg-blue-100 border-l-4 border-blue-600 rounded-md p-2 cursor-move shadow-sm">
                        <p className="text-[10px] font-bold text-blue-700 uppercase">Banho</p>
                        <p className="text-xs font-semibold text-blue-900 truncate">Luna (Maine Coon)</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel (Upcoming) */}
        <aside className="w-80 border-l border-slate-200 bg-white overflow-y-auto hidden xl:block p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Próximos</h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">5 Total</span>
          </div>
          <div className="space-y-4">
            {appointments.map((app) => (
              <div key={app.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white ring-2 ring-blue-50">
                    <Image 
                      src={app.image}
                      alt={app.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">{app.name}</h3>
                    <p className="text-xs text-slate-500">{app.breed} • {app.age}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="w-3 h-3" />
                    <span>{app.time} ({app.service})</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <User className="w-3 h-3" />
                    <span>Func: {app.staff}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200/60 flex gap-2">
                  <button className="text-[10px] bg-white border border-slate-200 px-3 py-1 rounded-lg font-bold hover:bg-slate-100">EDITAR</button>
                  <button className="text-[10px] bg-green-600 text-white px-3 py-1 rounded-lg font-bold ml-auto">CHECK-IN</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-medium hover:border-blue-400 hover:text-blue-500 transition-all">
            Ver lista completa
          </button>
        </aside>
      </div>

      {isAddMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-900">Novo Agendamento</h2>
              <button onClick={() => setIsAddMode(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Cliente / Pet</label>
                <input type="text" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" placeholder="Buscar cliente..." />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Serviço</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm">
                  <option>Banho & Tosa</option>
                  <option>Consulta Veterinária</option>
                  <option>Vacina</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Data</label>
                  <input type="date" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500">Hora</label>
                  <input type="time" className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:ring-blue-500 text-sm" />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button onClick={() => setIsAddMode(false)} className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-xl">Cancelar</button>
              <button onClick={() => setIsAddMode(false)} className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl">Confirmar</button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
