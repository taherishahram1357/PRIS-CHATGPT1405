import type { Project } from '../domain/project';

export const projects: Project[] = [
  {
    id: 'P1',
    name: 'Combined Cycle Power Plant Alpha',
    status: 'Green',
    spi: 1.02,
    budget: 350000000,
    riskScore: 35,
  },
  {
    id: 'P2',
    name: 'Transmission Project Beta',
    status: 'Amber',
    spi: 0.91,
    budget: 120000000,
    riskScore: 62,
  },
  {
    id: 'P3',
    name: 'Water Infrastructure Gamma',
    status: 'Red',
    spi: 0.72,
    budget: 80000000,
    riskScore: 85,
  },
];
