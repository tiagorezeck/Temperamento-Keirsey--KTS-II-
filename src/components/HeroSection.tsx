import React from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onStartTest: () => void;
  onExploreTemperaments: () => void;
  answeredCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartTest,
  onExploreTemperaments,
  answeredCount,
}) => {
  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span>Psicologia Comportamental</span>
              <span aria-hidden="true">·</span>
              <span>Dr. David Keirsey</span>
              <span aria-hidden="true">·</span>
              <span>70 Questões</span>
              <span aria-hidden="true">·</span>
              <span>Versão Português (Brasil)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 text-balance leading-tight">
              Descubra seu Temperamento e Papel de Personalidade com o KTS-II
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              O <strong>Keirsey Temperament Sorter® II</strong> é um dos instrumentos de
              avaliação de temperamento mais respeitados no mundo. Desenvolvido pelo psicólogo
              norte-americano Dr. David Keirsey, este inventário mapeia os padrões naturais do seu
              comportamento em quatro temperamentos fundamentais e dezesseis papéis de caráter.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onStartTest}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>
                  {answeredCount > 0
                    ? `Continuar Questionário (${answeredCount}/70)`
                    : 'Iniciar Questionário Completo'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTemperaments}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Conhecer os 4 Temperamentos</span>
              </button>
            </div>

            {/* Quick Proof Metrics adjacent to action (Unboxed) */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Grade Oficial de 7 Colunas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Escala Gradual (5 Níveis) ou Direta (A/B)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Relatório Completo com Exportação PDF</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 aspect-16/9 lg:aspect-4/3 group">
              <img
                src="/src/assets/images/hero_temperaments_kts_1793056423653.jpg"
                alt="Ilustração conceitual dos quatro temperamentos humanos de Keirsey"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Os Quatro Temperamentos Humanos
                </p>
                <p className="text-sm font-medium text-slate-200">
                  Artesãos (SP) · Guardiões (SJ) · Idealistas (NF) · Racionais (NT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Temperaments Grid Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Arquitetura Teórica
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
            As Quatro Grandes Matrizes de Comportamento
          </h2>
          <p className="text-sm text-slate-600">
            Diferente de testes que apenas rotulam traços isolados, a teoria de Keirsey foca em como
            as pessoas se comunicam e agem no mundo real.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* SP - Artesãos */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-amber-700 tracking-wide">SP · ARTESÃOS</span>
              <span>Sensorial & Perceptivo</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Mestres da Tática</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Práticos, destemidos e atentos ao momento presente. Têm maestria para solucionar crises
              e manusear ferramentas, pessoas ou instrumentos com agilidade.
            </p>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
              <span className="font-medium text-slate-700">Papéis:</span> ESTP, ISTP, ESFP, ISFP
            </div>
          </div>

          {/* SJ - Guardiões */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-blue-700 tracking-wide">SJ · GUARDIÕES</span>
              <span>Sensorial & Julgador</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Pilares da Ordem</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leais, prudentes e focados no dever. Preservam tradições, honram compromissos com
              disciplina e garantem a segurança e estabilidade das instituições.
            </p>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
              <span className="font-medium text-slate-700">Papéis:</span> ESTJ, ISTJ, ESFJ, ISFJ
            </div>
          </div>

          {/* NF - Idealistas */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-emerald-700 tracking-wide">NF · IDEALISTAS</span>
              <span>Intuitivo & Sentimental</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Catalisadores Humanos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Empáticos, autênticos e inspiradores. Buscam significado existencial profundo e
              trabalham para despertar o potencial e a harmonia entre as pessoas.
            </p>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
              <span className="font-medium text-slate-700">Papéis:</span> ENFJ, INFJ, ENFP, INFP
            </div>
          </div>

          {/* NT - Racionais */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 transition-colors shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-purple-700 tracking-wide">NT · RACIONAIS</span>
              <span>Intuitivo & Pensador</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Estrategistas Lógicos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Curiosos, independentes e guiados pela competência técnica. Projetam sistemas
              conceituais elegantes e resolvem quebra-cabeças complexos com precisão.
            </p>
            <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
              <span className="font-medium text-slate-700">Papéis:</span> ENTJ, INTJ, ENTP, INTP
            </div>
          </div>
        </div>
      </section>

      {/* Methodology and Step-by-Step Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Etapa 1
              </span>
              <h4 className="text-lg font-bold text-white">Responda com Sinceridade</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                São 70 questões objetivas. Responda pensando em como você realmente age na maior parte
                das situações cotidianas, e não em como gostaria de agir ou em como os outros esperam
                que aja.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Etapa 2
              </span>
              <h4 className="text-lg font-bold text-white">Modo Direto ou Escala Gradual</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você pode optar pela escolha direta clássica entre a Opção A e a Opção B, ou pela
                escala em 5 níveis (desenvolvida na adaptação web de Cahya DSN), indicando o quanto
                tende a cada lado.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Etapa 3
              </span>
              <h4 className="text-lg font-bold text-white">Apuração e Relatório Detalhado</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ao concluir, o sistema computa as 7 colunas oficiais do Keirsey Sorter, calcula os
                pares E/I, S/N, T/F e J/P, apresenta a matriz de apuração e revela seu perfil
                aprofundado para carreira e autoconhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
