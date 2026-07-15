export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';

export interface Risk {
  id: string;
  title: string;
  projectId: string;
  probability: number;
  impact: number;
  level: RiskLevel;
}
