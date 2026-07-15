import type { Risk } from '../domain/risk';

export const risks: Risk[] = [
  {
    id: 'R1',
    title: 'Supplier delivery delay',
    projectId: 'P1',
    probability: 0.7,
    impact: 90,
    level: 'High',
  },
  {
    id: 'R2',
    title: 'Schedule variance',
    projectId: 'P3',
    probability: 0.8,
    impact: 95,
    level: 'Critical',
  },
];
