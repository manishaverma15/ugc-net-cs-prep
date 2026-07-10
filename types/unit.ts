export interface Question {
  id: string;
  year: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  sourceUnit?: string;
}

export interface UnitData {
  slug: string;
  title: string;
  description: string;
  sourceUrl: string;
  questions: Question[];
}
