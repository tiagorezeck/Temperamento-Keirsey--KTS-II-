import React, { useState } from 'react';
import { UserProfile } from '../types';
import { X, UserCheck, ShieldCheck } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profile: UserProfile) => void;
  initialProfile: UserProfile;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialProfile,
}) => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1 text-slate-900">
          <UserCheck className="w-5 h-5 text-slate-700" />
          <h3 className="text-lg font-bold">Identificação para o Relatório</h3>
        </div>
        <p className="text-xs text-slate-500 mb-5">
          Essas informações são opcionais e são utilizadas para personalizar o seu relatório oficial e
          a folha de apuração em PDF.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              placeholder="Ex: João da Silva"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Gênero (opcional)
              </label>
              <select
                value={profile.gender || ''}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-700"
              >
                <option value="">Selecione...</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Não-binário">Não-binário</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Faixa Etária
              </label>
              <select
                value={profile.ageRange || ''}
                onChange={(e) => setProfile({ ...profile, ageRange: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-700"
              >
                <option value="">Selecione...</option>
                <option value="Menos de 18">Menos de 18</option>
                <option value="18 a 24 anos">18 a 24 anos</option>
                <option value="25 a 34 anos">25 a 34 anos</option>
                <option value="35 a 44 anos">35 a 44 anos</option>
                <option value="45 a 54 anos">45 a 54 anos</option>
                <option value="55+ anos">55 anos ou mais</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Profissão ou Área de Atuação
            </label>
            <input
              type="text"
              value={profile.occupation || ''}
              onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
              placeholder="Ex: Engenharia de Software / Estudante"
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Privacidade garantida: seus dados ficam salvos apenas localmente no seu navegador.</span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Salvar Dados
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
