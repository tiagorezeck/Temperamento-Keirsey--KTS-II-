import React, { useState } from 'react';
import { TEMPERAMENTS } from '../data/temperaments';
import { TemperamentId } from '../types';
import { Compass, Lightbulb, Users, Briefcase } from 'lucide-react';

export const TemperamentsGuide: React.FC = () => {
  const [selectedTempId, setSelectedTempId] = useState<TemperamentId>('SP');
  const [selectedRoleCode, setSelectedRoleCode] = useState<string>('ESTP');

  const currentTemp = TEMPERAMENTS[selectedTempId];
  const currentRole =
    currentTemp.roles.find((r) => r.code === selectedRoleCode) || currentTemp.roles[0];

  const handleSelectTemp = (id: TemperamentId) => {
    setSelectedTempId(id);
    setSelectedRoleCode(TEMPERAMENTS[id].roles[0].code);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>Enciclopédia Comportamental</span>
          <span aria-hidden="true">·</span>
          <span>Keirsey Temperament Theory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
          Os Quatro Temperamentos e os 16 Papéis
        </h1>
        <p className="text-sm text-slate-600">
          Aprenda como cada temperamento percebe a realidade, toma decisões, comunica-se em sociedade e expressa suas vocações naturais.
        </p>
      </div>

      {/* 4 Temperaments Selector Tabs (Zero-Pill: segmented buttons) */}
      <div className="flex items-center justify-center">
        <div className="inline-flex flex-wrap p-1.5 bg-slate-100 rounded-xl border border-slate-200 gap-1">
          {(
            [
              { id: 'SP', label: 'Artesãos (SP)', ring: 'text-amber-800' },
              { id: 'SJ', label: 'Guardiões (SJ)', ring: 'text-blue-800' },
              { id: 'NF', label: 'Idealistas (NF)', ring: 'text-emerald-800' },
              { id: 'NT', label: 'Racionais (NT)', ring: 'text-purple-800' },
            ] as const
          ).map(({ id, label, ring }) => (
            <button
              key={id}
              onClick={() => handleSelectTemp(id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedTempId === id
                  ? `bg-white text-slate-950 shadow-xs ${ring}`
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Temperament Overview Card */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Temperamento {currentTemp.name} · {currentTemp.coreNature}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              {currentTemp.title}
            </h2>
          </div>
          <span className="text-xs text-slate-500 italic max-w-xs text-right">
            "{currentTemp.motto}"
          </span>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {currentTemp.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-slate-700" />
              <span>Forças Centrais</span>
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {currentTemp.keyStrengths.map((s, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-slate-700" />
              <span>Motivação Existencial & Crescimento</span>
            </span>
            <p className="text-xs text-slate-700 font-medium">{currentTemp.coreDrive}</p>
            <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
              {currentTemp.growthAreas.map((g, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 Roles of the Selected Temperament */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Os 4 Papéis de Caráter dos {currentTemp.name}
        </h3>

        {/* Roles Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currentTemp.roles.map((role) => (
            <button
              key={role.code}
              onClick={() => setSelectedRoleCode(role.code)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedRoleCode === role.code
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              <span className="text-xs font-mono font-bold block opacity-75">{role.code}</span>
              <span className="text-sm font-bold block mt-0.5">{role.titlePt}</span>
              <span className="text-[11px] opacity-60 block mt-0.5">{role.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Detailed Role View */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                {currentRole.code} · {currentRole.titleEn}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mt-0.5">
                {currentRole.titlePt}
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Temperamento: {currentTemp.name}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">{currentRole.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-slate-500" />
                <span>Estilo de Trabalho</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{currentRole.workStyle}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-500" />
                <span>Comunicação</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{currentRole.communication}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-slate-500" />
                <span>Tomada de Decisão</span>
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{currentRole.decisionMaking}</p>
            </div>
          </div>

          {/* Recommended Careers */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Carreiras Recomendadas:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentRole.recommendedCareers.map((car, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                >
                  {car}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
