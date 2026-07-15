export interface Dependency {
  from: string;
  to: string;
  type: 'Supplier' | 'Project' | 'Contract' | 'Resource';
  impactScore: number;
}
