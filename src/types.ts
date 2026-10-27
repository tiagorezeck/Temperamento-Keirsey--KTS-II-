export type DimensionPair = 'EI' | 'SN' | 'TF' | 'JP';

export interface QuestionOption {
  code: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  text: string;
  label: string;
}

export interface Question {
  id: number;
  column: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  dimension: DimensionPair;
  prompt: string;
  statementA: string;
  statementB: string;
  optionA: QuestionOption;
  optionB: QuestionOption;
}

export type LikertValue = 1 | 2 | 3 | 4 | 5;

export interface QuestionResponse {
  questionId: number;
  choice: 'A' | 'B' | null;
  scaleValue: LikertValue | null;
}

export interface UserProfile {
  name: string;
  email?: string;
  gender?: string;
  ageRange?: string;
  occupation?: string;
}

export interface DimensionScore {
  letterA: 'E' | 'S' | 'T' | 'J';
  letterB: 'I' | 'N' | 'F' | 'P';
  scoreA: number;
  scoreB: number;
  totalA: number;
  totalB: number;
  percentA: number;
  percentB: number;
  dominant: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' | 'X';
  dominantLabel: string;
  strength: 'Leve' | 'Moderada' | 'Clara' | 'Muito Forte';
}

export type TemperamentId = 'SP' | 'SJ' | 'NF' | 'NT';

export interface ColumnTally {
  column: number;
  scoreA: number;
  scoreB: number;
  questionIds: number[];
}

export interface TestResult {
  id: string;
  createdAt: string;
  profile: UserProfile;
  typeCode: string; // e.g. "INTJ"
  temperamentId: TemperamentId;
  temperamentName: string;
  roleName: string;
  subtitle: string;
  scores: {
    EI: DimensionScore;
    SN: DimensionScore;
    TF: DimensionScore;
    JP: DimensionScore;
  };
  columnTallies: ColumnTally[];
  responses: Record<number, QuestionResponse>;
}

export interface TemperamentInfo {
  id: TemperamentId;
  name: string;
  title: string;
  motto: string;
  coreNature: string;
  description: string;
  coreDrive: string;
  keyStrengths: string[];
  growthAreas: string[];
  roles: {
    code: string;
    titlePt: string;
    titleEn: string;
    summary: string;
    communication: string;
    workStyle: string;
    decisionMaking: string;
    recommendedCareers: string[];
  }[];
}
