import React from 'react';

interface FooterProps {
  onSelectTab: (tab: 'home' | 'test' | 'temperaments' | 'about' | 'results') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="no-print bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-base font-bold text-slate-900 tracking-tight">
              KTS-II Brasil
            </span>
            <p className="text-xs text-slate-500 max-w-md">
              Questionário de Temperamento Keirsey II (KTS-II) adaptado integralmente para a língua portuguesa (Brasil) com base na obra clássica do Dr. David Keirsey e no projeto open-source de Cahya DSN.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => onSelectTab('test')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Questionário
            </button>
            <button
              onClick={() => onSelectTab('temperaments')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Os 4 Temperamentos
            </button>
            <button
              onClick={() => onSelectTab('about')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Fundamentação Teórica
            </button>
          </nav>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Baseado na Teoria de Temperamentos de David Keirsey (<em>Please Understand Me II</em>).
          </div>
          <div>
            Projeto de código aberto adaptado de{' '}
            <a
              href="https://github.com/cahyadsn/kts-2-questionnarie"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-slate-900 underline underline-offset-2"
            >
              cahyadsn/kts-2-questionnarie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
