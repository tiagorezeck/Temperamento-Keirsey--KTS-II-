import React from 'react';

interface NavbarProps {
  currentTab: 'home' | 'test' | 'temperaments' | 'about' | 'results';
  onSelectTab: (tab: 'home' | 'test' | 'temperaments' | 'about' | 'results') => void;
  hasResult: boolean;
  answeredCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  hasResult,
  answeredCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Display face, single text element, no pill) */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:text-indigo-950 transition-colors whitespace-nowrap shrink-0 text-left"
        >
          KTS-II <span className="text-slate-500 font-normal">Brasil</span>
        </button>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectTab('home')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 hover:text-slate-950 ${
              currentTab === 'home'
                ? 'text-slate-950 font-semibold border-b-2 border-slate-900 -mb-0.5'
                : 'text-slate-600'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onSelectTab('test')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 hover:text-slate-950 flex items-center gap-1.5 ${
              currentTab === 'test'
                ? 'text-slate-950 font-semibold border-b-2 border-slate-900 -mb-0.5'
                : 'text-slate-600'
            }`}
          >
            <span>Questionário</span>
            {answeredCount > 0 && answeredCount < 70 && (
              <span className="text-xs text-slate-500 tabular-nums">({answeredCount}/70)</span>
            )}
          </button>
          <button
            onClick={() => onSelectTab('temperaments')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 hover:text-slate-950 ${
              currentTab === 'temperaments'
                ? 'text-slate-950 font-semibold border-b-2 border-slate-900 -mb-0.5'
                : 'text-slate-600'
            }`}
          >
            Os 4 Temperamentos
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 hover:text-slate-950 ${
              currentTab === 'about'
                ? 'text-slate-950 font-semibold border-b-2 border-slate-900 -mb-0.5'
                : 'text-slate-600'
            }`}
          >
            Como Funciona
          </button>
          {hasResult && (
            <button
              onClick={() => onSelectTab('results')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 hover:text-slate-950 ${
                currentTab === 'results'
                  ? 'text-slate-950 font-semibold border-b-2 border-slate-900 -mb-0.5'
                  : 'text-slate-600'
              }`}
            >
              Meus Resultados
            </button>
          )}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {hasResult ? (
            <button
              onClick={() => onSelectTab('results')}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              Ver Relatório
            </button>
          ) : (
            <button
              onClick={() => onSelectTab('test')}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              {answeredCount > 0 ? 'Continuar Teste' : 'Iniciar Teste'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-around px-2 py-2 border-t border-slate-100 text-xs font-medium text-slate-600 bg-slate-50/90">
        <button
          onClick={() => onSelectTab('home')}
          className={`py-1 px-2 ${currentTab === 'home' ? 'text-slate-950 font-semibold' : ''}`}
        >
          Início
        </button>
        <button
          onClick={() => onSelectTab('test')}
          className={`py-1 px-2 ${currentTab === 'test' ? 'text-slate-950 font-semibold' : ''}`}
        >
          Questionário {answeredCount > 0 && `(${answeredCount}/70)`}
        </button>
        <button
          onClick={() => onSelectTab('temperaments')}
          className={`py-1 px-2 ${currentTab === 'temperaments' ? 'text-slate-950 font-semibold' : ''}`}
        >
          Temperamentos
        </button>
        <button
          onClick={() => onSelectTab('about')}
          className={`py-1 px-2 ${currentTab === 'about' ? 'text-slate-950 font-semibold' : ''}`}
        >
          Teoria
        </button>
        {hasResult && (
          <button
            onClick={() => onSelectTab('results')}
            className={`py-1 px-2 ${currentTab === 'results' ? 'text-slate-950 font-semibold' : ''}`}
          >
            Resultado
          </button>
        )}
      </div>
    </header>
  );
};
