import React, { useState, useMemo } from 'react';
import { KTS_QUESTIONS } from '../data/questions';
import { LikertValue, QuestionResponse, UserProfile } from '../types';
import { QuestionCard } from './QuestionCard';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  SlidersHorizontal,
  LayoutGrid,
  RotateCcw,
  User,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';

interface QuestionnaireProps {
  responses: Record<number, QuestionResponse>;
  onAnswerChoice: (questionId: number, choice: 'A' | 'B') => void;
  onAnswerLikert: (questionId: number, value: LikertValue) => void;
  onSubmit: () => void;
  profile: UserProfile;
  onOpenProfile: () => void;
  onReset: () => void;
  onFillDemo: () => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  responses,
  onAnswerChoice,
  onAnswerLikert,
  onSubmit,
  profile,
  onOpenProfile,
  onReset,
  onFillDemo,
}) => {
  const [answeringMode, setAnsweringMode] = useState<'binary' | 'likert'>('binary');
  const [viewType, setViewType] = useState<'blocks' | 'continuous'>('blocks');
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0); // 0 to 6 (7 blocks of 10)
  const [showGridDrawer, setShowGridDrawer] = useState(false);
  const [validationWarning, setValidationWarning] = useState<string | null>(null);

  const totalQuestions = 70;
  const answeredCount = useMemo(() => {
    return Object.values(responses).filter(
      (r) => r.choice !== null || (r.scaleValue !== null && r.scaleValue !== undefined)
    ).length;
  }, [responses]);

  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Group questions into 7 blocks of 10 questions each
  const blocks = useMemo(() => {
    const list = [];
    for (let i = 0; i < 7; i++) {
      list.push(KTS_QUESTIONS.slice(i * 10, (i + 1) * 10));
    }
    return list;
  }, []);

  const currentQuestions = viewType === 'blocks' ? blocks[currentBlockIndex] : KTS_QUESTIONS;

  const handleNextBlock = () => {
    if (currentBlockIndex < 6) {
      setCurrentBlockIndex((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleJumpToQuestion = (qId: number) => {
    if (viewType === 'blocks') {
      const blockIdx = Math.floor((qId - 1) / 10);
      setCurrentBlockIndex(blockIdx);
    }
    setShowGridDrawer(false);
    setTimeout(() => {
      const el = document.getElementById(`question-${qId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleJumpToFirstUnanswered = () => {
    for (let i = 1; i <= 70; i++) {
      const r = responses[i];
      if (!r || (r.choice === null && (r.scaleValue === null || r.scaleValue === undefined))) {
        handleJumpToQuestion(i);
        return;
      }
    }
  };

  const handleAttemptSubmit = () => {
    if (answeredCount < totalQuestions) {
      const remaining = totalQuestions - answeredCount;
      setValidationWarning(
        `Ainda restam ${remaining} questão(ões) sem resposta. Para a maior precisão do perfil, recomendamos responder a todas.`
      );
    } else {
      setValidationWarning(null);
      onSubmit();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Sticky Progress & Controls Bar */}
      <section className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs sticky top-16 z-30 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>{profile.name ? `Respondente: ${profile.name}` : 'Sessão anônima'}</span>
              <button
                onClick={onOpenProfile}
                className="text-slate-700 hover:text-slate-900 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              >
                <User className="w-3 h-3" />
                <span>{profile.name ? 'Editar' : 'Identificar-se'}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                {answeredCount} de {totalQuestions}
              </span>
              <span className="text-xs text-slate-500">questões respondidas ({progressPercent}%)</span>
            </div>
          </div>

          {/* Quick controls and mode switches */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Mode: Binary vs Likert */}
            <div className="inline-flex rounded-lg p-0.5 bg-slate-100 border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => setAnsweringMode('binary')}
                className={`px-2.5 py-1 font-medium rounded-md transition-all cursor-pointer ${
                  answeringMode === 'binary'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Modo A/B
              </button>
              <button
                type="button"
                onClick={() => setAnsweringMode('likert')}
                className={`px-2.5 py-1 font-medium rounded-md transition-all cursor-pointer ${
                  answeringMode === 'likert'
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Escala Gradual (1-5)
              </button>
            </div>

            {/* Grid Map Button */}
            <button
              type="button"
              onClick={() => setShowGridDrawer(!showGridDrawer)}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
              title="Abrir mapa de todas as questões"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Mapa</span>
            </button>

            {answeredCount < totalQuestions && (
              <button
                type="button"
                onClick={handleJumpToFirstUnanswered}
                className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Próxima pendente
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-slate-900 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Grid Drawer (Expanded) */}
        {showGridDrawer && (
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Navegação Rápida (1 a 70):</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-900 inline-block" /> Respondida
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 border border-slate-300 inline-block" /> Pendente
                </span>
              </div>
            </div>
            <div className="grid grid-cols-10 sm:grid-cols-14 gap-1">
              {Array.from({ length: 70 }, (_, i) => i + 1).map((qNum) => {
                const r = responses[qNum];
                const done =
                  r &&
                  (r.choice !== null || (r.scaleValue !== null && r.scaleValue !== undefined));
                return (
                  <button
                    key={qNum}
                    type="button"
                    onClick={() => handleJumpToQuestion(qNum)}
                    className={`h-7 text-xs font-mono font-medium rounded-sm transition-colors cursor-pointer flex items-center justify-center ${
                      done
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {qNum}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Block Pagination / View Switcher */}
      <div className="flex items-center justify-between gap-4 text-xs">
        <div className="inline-flex rounded-lg p-0.5 bg-slate-100 border border-slate-200">
          <button
            type="button"
            onClick={() => setViewType('blocks')}
            className={`px-3 py-1 font-medium rounded-md transition-colors cursor-pointer ${
              viewType === 'blocks'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Paginado (10 por bloco)
          </button>
          <button
            type="button"
            onClick={() => setViewType('continuous')}
            className={`px-3 py-1 font-medium rounded-md transition-colors cursor-pointer ${
              viewType === 'continuous'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Lista Contínua (Todas)
          </button>
        </div>

        {viewType === 'blocks' && (
          <div className="text-slate-500 font-medium">
            Bloco {currentBlockIndex + 1} de 7 ({currentBlockIndex * 10 + 1} a {(currentBlockIndex + 1) * 10})
          </div>
        )}
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {currentQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            response={responses[question.id]}
            mode={answeringMode}
            onAnswerChoice={onAnswerChoice}
            onAnswerLikert={onAnswerLikert}
          />
        ))}
      </div>

      {/* Bottom Block Navigation Bar (if in blocks view) */}
      {viewType === 'blocks' && (
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={handlePrevBlock}
            disabled={currentBlockIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              currentBlockIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Bloco Anterior</span>
          </button>

          <span className="text-xs font-medium text-slate-500">
            {currentBlockIndex + 1} de 7
          </span>

          {currentBlockIndex < 6 ? (
            <button
              type="button"
              onClick={handleNextBlock}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
            >
              <span>Próximo Bloco</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAttemptSubmit}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors cursor-pointer"
            >
              <span>Concluir Questionário</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Warning Notice if uncompleted */}
      {validationWarning && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>{validationWarning}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleJumpToFirstUnanswered}
              className="px-3 py-1.5 font-semibold bg-amber-200 hover:bg-amber-300 text-amber-950 rounded-md transition-colors cursor-pointer"
            >
              Ir para pendentes
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="px-3 py-1.5 font-medium text-amber-800 hover:underline cursor-pointer"
            >
              Gerar assim mesmo
            </button>
          </div>
        </div>
      )}

      {/* Bottom Completion & Utility Row */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Finalização do Teste</h4>
            <p className="text-xs text-slate-300">
              {answeredCount === 70
                ? 'Todas as 70 perguntas foram respondidas! Pronto para ver o relatório oficial.'
                : `${totalQuestions - answeredCount} questão(ões) pendente(s).`}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAttemptSubmit}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <span>Ver Relatório e Temperamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Testing helper buttons */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onReset}
              className="hover:text-rose-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar Todas as Respostas</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onFillDemo}
            className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
            title="Preenche aleatoriamente o formulário para teste rápido do relatório"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Preenchimento Demonstrativo Rápido</span>
          </button>
        </div>
      </div>
    </div>
  );
};
