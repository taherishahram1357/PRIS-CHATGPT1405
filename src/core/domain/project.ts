export type ProjectStatus = 'Green' | 'Amber' | 'Red';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  spi: number;
  budget: number;
  riskScore: number;
}
