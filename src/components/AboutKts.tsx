import React from 'react';
import { BookOpen, Layers, GitBranch, ShieldCheck } from 'lucide-react';

export const AboutKts: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>Fundamentação Científica</span>
          <span aria-hidden="true">·</span>
          <span>História & Teoria</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
          Como Funciona o Questionário de Temperamento Keirsey
        </h1>
        <p className="text-sm text-slate-600">
          Entenda as origens, os fundamentos metodológicos e as diferenças entre a teoria de Keirsey e outros modelos de personalidade.
        </p>
      </div>

      {/* Origin Story */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <BookOpen className="w-5 h-5 text-slate-700" />
          <h2>A Origem: Dr. David Keirsey e "Please Understand Me"</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          O <strong>Keirsey Temperament Sorter® (KTS)</strong> foi concebido pelo psicólogo e professor universitário norte-americano <strong>Dr. David West Keirsey (1921–2013)</strong>. Introduzido mundialmente no livro clássico <em>Please Understand Me</em> (1978, em coautoria com Marilyn Bates) e refinado com rigor científico em <em>Please Understand Me II</em> (1998), o teste tornou-se um dos instrumentos mais populares do planeta, utilizado por dezenas de milhões de pessoas, universidades de ponta, empresas da Fortune 500 e forças armadas.
        </p>
        <p className="text-sm text-slate-700 leading-relaxed">
          Keirsey observou que os seres humanos possuem padrões consistentes de comportamento que podem ser rastreados desde os quatro humores de Hipócrates na Grécia Antiga, passando pelas tipologias de Platão e Aristóteles, até Carl Gustav Jung no início do século XX.
        </p>
      </section>

      {/* Difference between Keirsey and MBTI */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <GitBranch className="w-5 h-5 text-slate-700" />
          <h2>Qual a diferença entre Keirsey (KTS-II) e o MBTI® clássico?</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Embora ambos usem o sistema de quatro letras (como ENTJ, INFP, etc.), existe uma diferença epistemológica profunda entre os dois modelos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
              MBTI® (Myers & Briggs)
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Foca primariamente em <strong>processos mentais internos</strong> e funções cognitivas hipotéticas (pensamento introvertido, intuição extrovertida, etc.). Parte da premissa de como a mente processa informações internamente.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
              KTS-II (Keirsey Temperament Sorter)
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Foca no <strong>comportamento observável</strong>: como as pessoas usam palavras (Concreto vs. Abstrato) e como as pessoas usam ferramentas para atingir objetivos (Cooperativo vs. Utilitário). É muito mais prático e diretamente aplicável ao convívio social e corporativo.
            </p>
          </div>
        </div>
      </section>

      {/* The 70 Questions Architecture */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <Layers className="w-5 h-5 text-slate-700" />
          <h2>Como as 70 Questões são Computadas</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          O instrumento de 70 questões é organizado em um algoritmo engenhoso de 7 colunas verticais de 10 perguntas:
        </p>

        <div className="space-y-2 text-xs text-slate-700">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <strong className="text-slate-900">Coluna 1 (10 itens):</strong> Questões 1, 8, 15, 22, 29, 36, 43, 50, 57, 64
            </div>
            <span className="font-semibold text-slate-900">Extroversão (E) vs Introversão (I)</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <strong className="text-slate-900">Colunas 2 e 3 (20 itens):</strong> Questões pares 2 a 66
            </div>
            <span className="font-semibold text-slate-900">Sensação (S) vs Intuição (N)</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <strong className="text-slate-900">Colunas 4 e 5 (20 itens):</strong> Questões 4 a 68
            </div>
            <span className="font-semibold text-slate-900">Pensamento (T) vs Sentimento (F)</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <strong className="text-slate-900">Colunas 6 e 7 (20 itens):</strong> Questões 6 a 70
            </div>
            <span className="font-semibold text-slate-900">Julgamento (J) vs Percepção (P)</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 italic">
          Nesta replicação em português, mantivemos a fidelidade exata do inventário original, incorporando também a escala graduada de 5 pontos desenvolvida na versão de código aberto por <strong>Cahya DSN</strong>.
        </p>
      </section>

      {/* Ethics & Respect */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-bold text-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Nota sobre Uso Ético e Autoconhecimento</span>
        </div>
        <p className="leading-relaxed">
          Nenhum temperamento ou tipo de personalidade é superior, mais inteligente ou mais desejável do que outro. Todos os 16 tipos possuem dons indispensáveis à harmonia da sociedade. Este instrumento deve ser utilizado como um espelho de autodescoberta, desenvolvimento de empatia e aprimoramento de relações humanas e profissionais, nunca como rótulo restritivo.
        </p>
      </section>
    </div>
  );
};
