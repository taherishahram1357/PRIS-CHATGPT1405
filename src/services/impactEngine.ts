import { dominoEdges, dominoNodes } from '../data/dominoNetwork';

export function calculateImpact(startNodeId: string, initialImpact = 100) {
  const result: {id:string; name:string; impact:number}[] = [];

  function propagate(nodeId:string, score:number){
    const node = dominoNodes.find(n=>n.id===nodeId);
    if(!node) return;

    result.push({
      id: node.id,
      name: node.name,
      impact: Math.round(score * node.impact / 100)
    });

    dominoEdges
      .filter(e=>e.from===nodeId)
      .forEach(e=>propagate(e.to, score * 0.7));
  }

  propagate(startNodeId, initialImpact);
  return result;
}
