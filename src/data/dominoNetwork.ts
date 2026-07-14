export const dominoNodes = [
  { id: 'S1', name: 'Supplier A', type: 'Supplier', impact: 90 },
  { id: 'P1', name: 'Project Alpha', type: 'Project', impact: 75 },
  { id: 'P2', name: 'Project Beta', type: 'Project', impact: 60 },
  { id: 'P3', name: 'Project Gamma', type: 'Project', impact: 45 }
];

export const dominoEdges = [
  { from: 'S1', to: 'P1' },
  { from: 'P1', to: 'P2' },
  { from: 'P2', to: 'P3' }
];
