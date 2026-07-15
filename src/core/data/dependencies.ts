import type { Dependency } from '../domain/dependency';

export const dependencies: Dependency[] = [
  {
    from: 'S1',
    to: 'P1',
    type: 'Supplier',
    impactScore: 90,
  },
  {
    from: 'P1',
    to: 'P2',
    type: 'Project',
    impactScore: 75,
  },
  {
    from: 'P2',
    to: 'P3',
    type: 'Project',
    impactScore: 60,
  },
];
