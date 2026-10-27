import { KTS_QUESTIONS } from '../data/questions';
import { ROLE_LOOKUP, TEMPERAMENTS } from '../data/temperaments';
import {
  ColumnTally,
  DimensionPair,
  DimensionScore,
  QuestionResponse,
  TemperamentId,
  TestResult,
  UserProfile,
} from '../types';

const COLUMN_QUESTIONS: Record<number, number[]> = {
  1: [1, 8, 15, 22, 29, 36, 43, 50, 57, 64],
  2: [2, 9, 16, 23, 30, 37, 44, 51, 58, 65],
  3: [3, 10, 17, 24, 31, 38, 45, 52, 59, 66],
  4: [4, 11, 18, 25, 32, 39, 46, 53, 60, 67],
  5: [5, 12, 19, 26, 33, 40, 47, 54, 61, 68],
  6: [6, 13, 20, 27, 34, 41, 48, 55, 62, 69],
  7: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
};

function getResponseWeights(response?: QuestionResponse): { weightA: number; weightB: number } {
  if (!response) {
    return { weightA: 0, weightB: 0 };
  }

  if (response.scaleValue !== null && response.scaleValue !== undefined) {
    switch (response.scaleValue) {
      case 1:
        return { weightA: 1.0, weightB: 0.0 };
      case 2:
        return { weightA: 0.75, weightB: 0.25 };
      case 3:
        return { weightA: 0.5, weightB: 0.5 };
      case 4:
        return { weightA: 0.25, weightB: 0.75 };
      case 5:
        return { weightA: 0.0, weightB: 1.0 };
    }
  }

  if (response.choice === 'A') {
    return { weightA: 1.0, weightB: 0.0 };
  }
  if (response.choice === 'B') {
    return { weightA: 0.0, weightB: 1.0 };
  }

  return { weightA: 0, weightB: 0 };
}

function computeStrength(percent: number): 'Leve' | 'Moderada' | 'Clara' | 'Muito Forte' {
  if (percent >= 85) return 'Muito Forte';
  if (percent >= 70) return 'Clara';
  if (percent >= 58) return 'Moderada';
  return 'Leve';
}

export function calculateKtsResult(
  responses: Record<number, QuestionResponse>,
  profile: UserProfile
): TestResult {
  const columnTallies: ColumnTally[] = [];

  for (let col = 1; col <= 7; col++) {
    const qIds = COLUMN_QUESTIONS[col];
    let scoreA = 0;
    let scoreB = 0;

    for (const qId of qIds) {
      const resp = responses[qId];
      const { weightA, weightB } = getResponseWeights(resp);
      scoreA += weightA;
      scoreB += weightB;
    }

    columnTallies.push({
      column: col,
      scoreA: Math.round(scoreA * 10) / 10,
      scoreB: Math.round(scoreB * 10) / 10,
      questionIds: qIds,
    });
  }

  // 1. Extraversion (E) vs Introversion (I) -> Coluna 1 (10 itens)
  const col1 = columnTallies[0];
  const eScore = col1.scoreA;
  const iScore = col1.scoreB;
  const eiTotal = eScore + iScore || 10;
  const ePercent = Math.round((eScore / eiTotal) * 100);
  const iPercent = 100 - ePercent;
  const eiDominant = eScore >= iScore ? 'E' : 'I';
  const eiScore: DimensionScore = {
    letterA: 'E',
    letterB: 'I',
    scoreA: eScore,
    scoreB: iScore,
    totalA: 10,
    totalB: 10,
    percentA: ePercent,
    percentB: iPercent,
    dominant: eiDominant,
    dominantLabel:
      eiDominant === 'E'
        ? 'Extroversão (Expressivo / Dinâmico)'
        : 'Introversão (Atento / Reflexivo)',
    strength: computeStrength(Math.max(ePercent, iPercent)),
  };

  // 2. Sensing (S) vs Intuition (N) -> Colunas 2 & 3 (20 itens)
  const col2 = columnTallies[1];
  const col3 = columnTallies[2];
  const sScore = Math.round((col2.scoreA + col3.scoreA) * 10) / 10;
  const nScore = Math.round((col2.scoreB + col3.scoreB) * 10) / 10;
  const snTotal = sScore + nScore || 20;
  const sPercent = Math.round((sScore / snTotal) * 100);
  const nPercent = 100 - sPercent;
  const snDominant = sScore >= nScore ? 'S' : 'N';
  const snScore: DimensionScore = {
    letterA: 'S',
    letterB: 'N',
    scoreA: sScore,
    scoreB: nScore,
    totalA: 20,
    totalB: 20,
    percentA: sPercent,
    percentB: nPercent,
    dominant: snDominant,
    dominantLabel:
      snDominant === 'S'
        ? 'Sensação (Observador / Factual)'
        : 'Intuição (Introspectivo / Conceitual)',
    strength: computeStrength(Math.max(sPercent, nPercent)),
  };

  // 3. Thinking (T) vs Feeling (F) -> Colunas 4 & 5 (20 itens)
  const col4 = columnTallies[3];
  const col5 = columnTallies[4];
  const tScore = Math.round((col4.scoreA + col5.scoreA) * 10) / 10;
  const fScore = Math.round((col4.scoreB + col5.scoreB) * 10) / 10;
  const tfTotal = tScore + fScore || 20;
  const tPercent = Math.round((tScore / tfTotal) * 100);
  const fPercent = 100 - tPercent;
  const tfDominant = tScore >= fScore ? 'T' : 'F';
  const tfScore: DimensionScore = {
    letterA: 'T',
    letterB: 'F',
    scoreA: tScore,
    scoreB: fScore,
    totalA: 20,
    totalB: 20,
    percentA: tPercent,
    percentB: fPercent,
    dominant: tfDominant,
    dominantLabel:
      tfDominant === 'T'
        ? 'Pensamento (Racional / Lógico)'
        : 'Sentimento (Afetuoso / Empático)',
    strength: computeStrength(Math.max(tPercent, fPercent)),
  };

  // 4. Judging (J) vs Perceiving (P) -> Colunas 6 & 7 (20 itens)
  const col6 = columnTallies[5];
  const col7 = columnTallies[6];
  const jScore = Math.round((col6.scoreA + col7.scoreA) * 10) / 10;
  const pScore = Math.round((col6.scoreB + col7.scoreB) * 10) / 10;
  const jpTotal = jScore + pScore || 20;
  const jPercent = Math.round((jScore / jpTotal) * 100);
  const pPercent = 100 - jPercent;
  const jpDominant = jScore >= pScore ? 'J' : 'P';
  const jpScore: DimensionScore = {
    letterA: 'J',
    letterB: 'P',
    scoreA: jScore,
    scoreB: pScore,
    totalA: 20,
    totalB: 20,
    percentA: jPercent,
    percentB: pPercent,
    dominant: jpDominant,
    dominantLabel:
      jpDominant === 'J'
        ? 'Julgamento (Organizado / Estruturado)'
        : 'Percepção (Adaptável / Espontâneo)',
    strength: computeStrength(Math.max(jPercent, pPercent)),
  };

  const typeCode = `${eiDominant}${snDominant}${tfDominant}${jpDominant}`;

  // Keirsey Temperament Mapping:
  // SP -> Artesão (Artisan)
  // SJ -> Guardião (Guardian)
  // NF -> Idealista (Idealist)
  // NT -> Racional (Rational)
  let temperamentId: TemperamentId = 'SJ';
  if (snDominant === 'S' && jpDominant === 'P') {
    temperamentId = 'SP';
  } else if (snDominant === 'S' && jpDominant === 'J') {
    temperamentId = 'SJ';
  } else if (snDominant === 'N' && tfDominant === 'F') {
    temperamentId = 'NF';
  } else if (snDominant === 'N' && tfDominant === 'T') {
    temperamentId = 'NT';
  }

  const tempObj = TEMPERAMENTS[temperamentId];
  const roleObj = ROLE_LOOKUP[typeCode] || {
    rolePt: 'Perfil Personalizado',
    roleEn: 'Custom Profile',
    summary: 'Traços comportamentais singulares.',
  };

  return {
    id: `kts_${Date.now()}`,
    createdAt: new Date().toISOString(),
    profile,
    typeCode,
    temperamentId,
    temperamentName: tempObj.name,
    roleName: roleObj.rolePt,
    subtitle: tempObj.title,
    scores: {
      EI: eiScore,
      SN: snScore,
      TF: tfScore,
      JP: jpScore,
    },
    columnTallies,
    responses,
  };
}

export function getCompletedCount(responses: Record<number, QuestionResponse>): number {
  return Object.values(responses).filter(
    (r) => r.choice !== null || (r.scaleValue !== null && r.scaleValue !== undefined)
  ).length;
}

export function getFirstUnansweredId(responses: Record<number, QuestionResponse>): number | null {
  for (let i = 1; i <= 70; i++) {
    const r = responses[i];
    if (!r || (r.choice === null && (r.scaleValue === null || r.scaleValue === undefined))) {
      return i;
    }
  }
  return null;
}
