import React, { useState } from 'react';
import { DimensionScore, TestResult } from '../types';
import { TEMPERAMENTS } from '../data/temperaments';
import {
  Printer,
  Download,
  Share2,
  RotateCcw,
  CheckCircle2,
  Briefcase,
  Users,
  Compass,
  AlertTriangle,
  Lightbulb,
  FileSpreadsheet,
} from 'lucide-react';

interface ResultsViewProps {
  result: TestResult;
  onRetake: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ result, onRetake }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'work' | 'careers' | 'grid'>('overview');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const temperament = TEMPERAMENTS[result.temperamentId];
  const roleInfo = temperament.roles.find((r) => r.code === result.typeCode) || temperament.roles[0];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(result, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `kts2_relatorio_${result.typeCode}_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleShareSummary = () => {
    const text = `Meu resultado no Questionário de Temperamento Keirsey (KTS-II):
Tipo: ${result.typeCode} - ${result.roleName}
Temperamento: ${result.temperamentName} (${result.subtitle})
Extroversão/Introversão: ${result.scores.EI.percentA}% E vs ${result.scores.EI.percentB}% I
Sensação/Intuição: ${result.scores.SN.percentA}% S vs ${result.scores.SN.percentB}% N
Pensamento/Sentimento: ${result.scores.TF.percentA}% T vs ${result.scores.TF.percentB}% F
Julgamento/Percepção: ${result.scores.JP.percentA}% J vs ${result.scores.JP.percentB}% P`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const renderDimensionBar = (score: DimensionScore, title: string) => {
    const isADominant = score.dominant === score.letterA;
    return (
      <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-800">{title}</span>
          <span className="text-slate-500 font-medium">
            Prevalência: <strong className="text-slate-900">{score.dominant}</strong> ({score.strength})
          </span>
        </div>

        {/* Dual Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
            <span className={isADominant ? 'font-bold text-slate-950' : 'text-slate-500'}>
              {score.letterA}: {score.scoreA} pts ({score.percentA}%)
            </span>
            <span className={!isADominant ? 'font-bold text-slate-950' : 'text-slate-500'}>
              {score.letterB}: {score.scoreB} pts ({score.percentB}%)
            </span>
          </div>

          <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
            <div
              className={`h-full transition-all duration-500 ${
                isADominant ? 'bg-slate-900' : 'bg-slate-300'
              }`}
              style={{ width: `${score.percentA}%` }}
            />
            <div
              className={`h-full transition-all duration-500 ${
                !isADominant ? 'bg-slate-900' : 'bg-slate-300'
              }`}
              style={{ width: `${score.percentB}%` }}
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-500">{score.dominantLabel}</p>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Action Bar (No-print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Relatório Oficial Gerado</span>
          <span aria-hidden="true">·</span>
          <span>{new Date(result.createdAt).toLocaleDateString('pt-BR')}</span>
          {result.profile.name && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-700">{result.profile.name}</span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / PDF</span>
          </button>

          <button
            onClick={handleDownloadJSON}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar JSON</span>
          </button>

          <button
            onClick={handleShareSummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedNotification ? 'Copiado!' : 'Copiar Resumo'}</span>
          </button>

          <button
            onClick={onRetake}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Refazer</span>
          </button>
        </div>
      </div>

      {/* Hero Header of Results */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
            <span>Keirsey Temperament Sorter II</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Temperamento {result.temperamentName} ({result.temperamentId})</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                {result.typeCode}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mt-1">
                {result.roleName}
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block">Classificação de Keirsey</span>
              <span className="text-sm font-semibold text-white block">{result.subtitle}</span>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
          {roleInfo.summary}
        </p>

        {/* Core Motto */}
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Lema Existencial do Temperamento:
            </span>
            <p className="text-sm font-medium text-white italic">"{temperament.motto}"</p>
          </div>
        </div>
      </section>

      {/* The 4 Dichotomies / Dimension Breakdown */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">
            Composição das 4 Dimensões de Personalidade
          </h3>
          <span className="text-xs text-slate-500">Apuração das 70 Questões</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderDimensionBar(result.scores.EI, '1. Energia Social (Extroversão vs Introversão)')}
          {renderDimensionBar(result.scores.SN, '2. Coleta de Informação (Sensação vs Intuição)')}
          {renderDimensionBar(result.scores.TF, '3. Julgamento & Decisão (Pensamento vs Sentimento)')}
          {renderDimensionBar(result.scores.JP, '4. Orientação de Vida (Julgamento vs Percepção)')}
        </div>
      </section>

      {/* Section Navigation Tabs (No-print) */}
      <div className="no-print flex items-center gap-1 border-b border-slate-200 text-xs sm:text-sm font-medium overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'overview'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Visão Geral & Forças
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={`px-4 py-2.5 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'work'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Trabalho & Comunicação
        </button>
        <button
          onClick={() => setActiveTab('careers')}
          className={`px-4 py-2.5 transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
            activeTab === 'careers'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Carreiras Compatíveis
        </button>
        <button
          onClick={() => setActiveTab('grid')}
          className={`px-4 py-2.5 transition-colors whitespace-nowrap cursor-pointer border-b-2 flex items-center gap-1.5 ${
            activeTab === 'grid'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Grade Oficial de 7 Colunas (Apuração)</span>
        </button>
      </div>

      {/* Tab 1: Overview */}
      {(activeTab === 'overview' || typeof window === 'undefined') && (
        <section className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-slate-700" />
              <span>A Essência do Temperamento {temperament.name} ({temperament.coreNature})</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">{temperament.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Key Strengths */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pontos Fortes Naturais</span>
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {temperament.keyStrengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Areas */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Pontos de Atenção e Desenvolvimento</span>
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {temperament.growthAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Work & Communication */}
      {activeTab === 'work' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-slate-700" />
              <span>Estilo de Trabalho e Produtividade</span>
            </span>
            <h4 className="text-base font-bold text-slate-900">{roleInfo.titlePt}</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {roleInfo.workStyle}
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Tomada de Decisão:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {roleInfo.decisionMaking}
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-700" />
              <span>Comunicação e Relações Interpessoais</span>
            </span>
            <h4 className="text-base font-bold text-slate-900">Em Equipe e Relacionamentos</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {roleInfo.communication}
            </p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-900 block mb-1">
                Motivação Central:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {temperament.coreDrive}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Careers */}
      {activeTab === 'careers' && (
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-slate-700" />
              <span>Campos Profissionais e Carreiras Altamente Compatíveis</span>
            </h4>
            <p className="text-xs text-slate-500">
              Setores onde as forças cognitivas e o estilo comportamental do {result.roleName} ({result.typeCode}) tendem a gerar maior realização e sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {roleInfo.recommendedCareers.map((career, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  0{i + 1}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{career}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab 4: Official 7-Column Keirsey Answer Sheet */}
      {(activeTab === 'grid' || typeof window === 'undefined') && (
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-slate-700" />
              <span>Grade Oficial de Apuração das 7 Colunas (KTS-II Worksheet)</span>
            </h4>
            <p className="text-xs text-slate-500">
              Esta é a representação fiel da folha de contagem oficial desenhada pelo Dr. David Keirsey em <em>Please Understand Me</em>. Cada uma das 70 questões está alocada em sua respectiva coluna para cálculo das 4 dimensões.
            </p>
          </div>

          {/* Worksheet Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-center border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px]">
                  <th className="p-2.5 border-r border-slate-700">Coluna 1</th>
                  <th className="p-2.5 border-r border-slate-700">Coluna 2</th>
                  <th className="p-2.5 border-r border-slate-700">Coluna 3</th>
                  <th className="p-2.5 border-r border-slate-700">Coluna 4</th>
                  <th className="p-2.5 border-r border-slate-700">Coluna 5</th>
                  <th className="p-2.5 border-r border-slate-700">Coluna 6</th>
                  <th className="p-2.5">Coluna 7</th>
                </tr>
                <tr className="bg-slate-100 text-slate-700 font-semibold text-[10px] uppercase tracking-wider">
                  <th className="p-1.5 border-r border-slate-200">E / I</th>
                  <th className="p-1.5 border-r border-slate-200">S / N</th>
                  <th className="p-1.5 border-r border-slate-200">S / N</th>
                  <th className="p-1.5 border-r border-slate-200">T / F</th>
                  <th className="p-1.5 border-r border-slate-200">T / F</th>
                  <th className="p-1.5 border-r border-slate-200">J / P</th>
                  <th className="p-1.5">J / P</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {Array.from({ length: 10 }, (_, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    {result.columnTallies.map((colTally) => {
                      const qId = colTally.questionIds[rowIdx];
                      const resp = result.responses[qId];
                      let choiceLetter = '-';
                      if (resp) {
                        if (resp.choice) {
                          choiceLetter = resp.choice.toLowerCase();
                        } else if (resp.scaleValue) {
                          choiceLetter = resp.scaleValue <= 2 ? 'a' : resp.scaleValue >= 4 ? 'b' : '50/50';
                        }
                      }
                      return (
                        <td key={colTally.column} className="p-2 border-r border-slate-200 text-slate-700">
                          <span className="text-[10px] text-slate-400 mr-1">#{qId}:</span>
                          <strong className={choiceLetter === 'a' ? 'text-slate-900 font-bold' : 'text-slate-700'}>
                            {choiceLetter}
                          </strong>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {/* Total Column Scores */}
                <tr className="bg-slate-100 font-mono font-bold text-xs border-t-2 border-slate-300">
                  {result.columnTallies.map((col) => (
                    <td key={col.column} className="p-2.5 border-r border-slate-200">
                      <div className="text-[11px]">a: {col.scoreA}</div>
                      <div className="text-[11px] text-slate-600">b: {col.scoreB}</div>
                    </td>
                  ))}
                </tr>

                {/* Final Combined Pairs */}
                <tr className="bg-slate-200 font-bold text-xs text-slate-900 border-t border-slate-300">
                  <td className="p-3 border-r border-slate-300">
                    <div className="text-sm">{result.scores.EI.dominant}</div>
                    <div className="text-[10px] text-slate-600">
                      E:{result.scores.EI.scoreA} | I:{result.scores.EI.scoreB}
                    </div>
                  </td>
                  <td colSpan={2} className="p-3 border-r border-slate-300">
                    <div className="text-sm">{result.scores.SN.dominant}</div>
                    <div className="text-[10px] text-slate-600">
                      S:{result.scores.SN.scoreA} | N:{result.scores.SN.scoreB}
                    </div>
                  </td>
                  <td colSpan={2} className="p-3 border-r border-slate-300">
                    <div className="text-sm">{result.scores.TF.dominant}</div>
                    <div className="text-[10px] text-slate-600">
                      T:{result.scores.TF.scoreA} | F:{result.scores.TF.scoreB}
                    </div>
                  </td>
                  <td colSpan={2} className="p-3">
                    <div className="text-sm">{result.scores.JP.dominant}</div>
                    <div className="text-[10px] text-slate-600">
                      J:{result.scores.JP.scoreA} | P:{result.scores.JP.scoreB}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Nota explicativa: a Opção A soma pontos para as primeiras letras de cada dimensão (E, S, T, J) e a Opção B para as segundas letras (I, N, F, P). O tipo final corresponde à letra vencedora em cada um dos 4 pares.
          </p>
        </section>
      )}
    </div>
  );
};
