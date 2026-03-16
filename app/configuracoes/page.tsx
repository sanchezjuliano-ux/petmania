'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Smartphone, 
  HelpCircle,
  ChevronRight,
  Camera,
  Save,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const settingsGroups = [
  {
    title: 'Conta',
    items: [
      { icon: User, label: 'Perfil do Usuário', desc: 'Gerencie suas informações pessoais e avatar', active: true },
      { icon: Bell, label: 'Notificações', desc: 'Configure como e quando você quer ser avisado' },
      { icon: Shield, label: 'Segurança & Senha', desc: 'Proteja sua conta com autenticação em duas etapas' },
    ]
  },
  {
    title: 'Clínica',
    items: [
      { icon: Globe, label: 'Informações da Clínica', desc: 'Endereço, CNPJ, telefone e horários de funcionamento' },
      { icon: CreditCard, label: 'Assinatura & Faturamento', desc: 'Gerencie seu plano PetManager e métodos de pagamento' },
      { icon: Smartphone, label: 'Integrações', desc: 'Conecte com WhatsApp, Google Agenda e outros' },
    ]
  },
  {
    title: 'Suporte',
    items: [
      { icon: HelpCircle, label: 'Central de Ajuda', desc: 'Tutoriais, FAQs e contato com o suporte técnico' },
    ]
  }
];

export default function Configuracoes() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    nome: 'Juliano Sanchez',
    email: 'sanchez.juliano@gmail.com',
    cargo: 'Administrador',
    telefone: '(11) 98765-4321',
    darkMode: false,
    notificacoes: true
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  };

  const handleRemovePhoto = () => {
    setAvatarPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Navigation */}
        <aside className="w-full lg:w-80 space-y-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Configurações</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Personalize sua experiência no PetManager.</p>
          </div>

          <nav className="space-y-6">
            {settingsGroups.map((group, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4">{group.title}</h3>
                <div className="space-y-1">
                  {group.items.map((item, j) => (
                    <button 
                      key={j} 
                      className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all text-left group ${
                        item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} />
                      <div className="flex-1">
                        <p className="text-sm font-bold">{item.label}</p>
                        <p className={`text-[10px] leading-tight ${item.active ? 'text-blue-100' : 'text-slate-400'}`}>{item.desc}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${item.active ? 'text-white/50' : 'text-slate-300'}`} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Settings Content */}
        <main className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Perfil do Usuário</h2>
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-300" />
                    Salvo!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Salvar Alterações
                  </>
                )}
              </button>
            </div>

            <div className="p-8 space-y-10">
              {/* Avatar Section */}
              <section className="flex flex-col md:flex-row items-center gap-8">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                />
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-slate-100">
                    {avatarPreview ? (
                      <Image 
                        src={avatarPreview}
                        alt="Avatar"
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-16 h-16 text-slate-300" />
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 text-sm rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sua Foto de Perfil</h3>
                  <p className="text-sm text-slate-500 mb-4">Recomendado: 400x400px. Formatos: JPG, PNG.</p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 active:scale-95 transition-all"
                    >
                      Alterar Foto
                    </button>
                    <button 
                      onClick={handleRemovePhoto}
                      className="text-xs font-bold text-rose-600 bg-rose-50 px-4 py-2 rounded-lg hover:bg-rose-100 active:scale-95 transition-all"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </section>

              <hr className="border-slate-100 dark:border-slate-800" />

              {/* Form Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nome Completo</label>
                  <input 
                    type="text" 
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full p-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-colors text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">E-mail</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-colors text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cargo / Função</label>
                  <input 
                    type="text" 
                    value={formData.cargo}
                    onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                    className="w-full p-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-colors text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telefone</label>
                  <input 
                    type="text" 
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    className="w-full p-3 rounded-xl border-slate-200 bg-slate-50 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium transition-colors"
                  />
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Preferences Section */}
              <section className="space-y-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Preferências de Interface</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">Modo Escuro</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Alternar entre tema claro e escuro</p>
                    </div>
                    <div 
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${mounted && theme === 'dark' ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${mounted && theme === 'dark' ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">Notificações Desktop</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Receber avisos de novos agendamentos</p>
                    </div>
                    <div 
                      onClick={() => setFormData({...formData, notificacoes: !formData.notificacoes})}
                      className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${formData.notificacoes ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${formData.notificacoes ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </main>
      </div>
  );
}
