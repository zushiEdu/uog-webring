import type { Member } from "@/data/members";
import type { Connection } from "@/lib/connections";

interface ConnectionsGraphProps {
  members: Member[];
  connections: Connection[];
}

export function ConnectionsGraph({ members, connections }: ConnectionsGraphProps) {
  const width = 860;
  const height = 480;
  const radius = 180;
  const centerX = width / 2;
  const centerY = height / 2;

  const nodes = members.map((member, index) => {
    const angle = (2 * Math.PI * index) / Math.max(members.length, 1);
    return {
      id: member.id,
      name: member.name,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  const nodeMap = new Map(nodes.map((node) => [node.id, node]));

  return (
    <div className="graph-shell">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Member connection graph">
        <rect x="0" y="0" width={width} height={height} fill="transparent" />
        {connections.map((edge, index) => {
          const from = nodeMap.get(edge.fromId);
          const to = nodeMap.get(edge.toId);
          if (!from || !to) return null;
          return <line key={`${edge.fromId}-${edge.toId}-${index}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />;
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="22" />
            <text x={node.x} y={node.y + 42} textAnchor="middle">
              {node.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
