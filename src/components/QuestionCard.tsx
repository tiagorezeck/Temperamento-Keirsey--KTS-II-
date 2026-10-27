import React from 'react';
import { LikertValue, Question, QuestionResponse } from '../types';
import { Check } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  response?: QuestionResponse;
  mode: 'binary' | 'likert';
  onAnswerChoice: (questionId: number, choice: 'A' | 'B') => void;
  onAnswerLikert: (questionId: number, value: LikertValue) => void;
  isFocused?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  response,
  mode,
  onAnswerChoice,
  onAnswerLikert,
}) => {
  const isAnswered =
    response?.choice !== null &&
    (response?.choice !== undefined ||
      (response?.scaleValue !== null && response?.scaleValue !== undefined));

  return (
    <article
      id={`question-${question.id}`}
      className={`p-5 sm:p-6 rounded-xl border transition-all ${
        isAnswered
          ? 'bg-white border-slate-300 shadow-2xs'
          : 'bg-white border-slate-200/90 hover:border-slate-300'
      }`}
    >
      {/* Header: Item Number & Status */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="font-bold text-slate-900 font-mono">#{question.id}</span>
          <span aria-hidden="true">·</span>
          <span>Questão {question.id} de 70</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-400">Coluna {question.column}</span>
        </div>

        {isAnswered ? (
          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
            <Check className="w-3.5 h-3.5" />
            <span>Respondida</span>
          </div>
        ) : (
          <span className="text-xs text-amber-700 font-medium">Pendente</span>
        )}
      </div>

      {/* Question Prompt */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 leading-snug">
        {question.prompt}
      </h3>

      {mode === 'binary' ? (
        /* Classic Binary Mode (Option A vs Option B) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Option A */}
          <button
            type="button"
            onClick={() => onAnswerChoice(question.id, 'A')}
            className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all cursor-pointer ${
              response?.choice === 'A'
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-slate-50/70 hover:bg-slate-100/80 text-slate-800 border-slate-200'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                response?.choice === 'A'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              A
            </span>
            <div className="space-y-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider block opacity-75">
                Opção A
              </span>
              <span className="text-sm font-medium leading-relaxed block">
                {question.optionA.text}
              </span>
            </div>
          </button>

          {/* Option B */}
          <button
            type="button"
            onClick={() => onAnswerChoice(question.id, 'B')}
            className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all cursor-pointer ${
              response?.choice === 'B'
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-slate-50/70 hover:bg-slate-100/80 text-slate-800 border-slate-200'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                response?.choice === 'B'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              B
            </span>
            <div className="space-y-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider block opacity-75">
                Opção B
              </span>
              <span className="text-sm font-medium leading-relaxed block">
                {question.optionB.text}
              </span>
            </div>
          </button>
        </div>
      ) : (
        /* Cahya DSN 5-Point Likert Scale Mode */
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div>
              <span className="font-bold text-slate-900">A:</span> {question.optionA.text}
            </div>
            <div>
              <span className="font-bold text-slate-900">B:</span> {question.optionB.text}
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-2">
              {[
                { val: 1 as LikertValue, label: 'Totalmente A', sub: 'Absolutamente A' },
                { val: 2 as LikertValue, label: 'Mais para A', sub: 'Tendo para A' },
                { val: 3 as LikertValue, label: 'Neutro (50/50)', sub: 'Equilibrado' },
                { val: 4 as LikertValue, label: 'Mais para B', sub: 'Tendo para B' },
                { val: 5 as LikertValue, label: 'Totalmente B', sub: 'Absolutamente B' },
              ].map(({ val, label, sub }) => {
                const isSelected = response?.scaleValue === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => onAnswerLikert(question.id, val)}
                    className={`py-3 px-1 sm:px-2 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className="text-sm font-bold block">{val}</span>
                    <span className="text-[11px] font-medium leading-tight hidden sm:block mt-1">
                      {label}
                    </span>
                    <span className="text-[10px] sm:hidden leading-tight mt-0.5">
                      {val === 1 ? 'A++' : val === 2 ? 'A+' : val === 3 ? '50/50' : val === 4 ? 'B+' : 'B++'}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>← Mais alinhado com a Opção A</span>
              <span>Mais alinhado com a Opção B →</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
