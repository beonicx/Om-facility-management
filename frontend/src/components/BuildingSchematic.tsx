export default function BuildingSchematic() {
  const floors = 7;
  const cols = 5;

  return (
    <svg
      viewBox="0 0 420 460"
      className="h-full w-full"
      role="img"
      aria-label="Schematic diagram of a serviced building with floor-by-floor service tags"
    >
      <rect x="0" y="0" width="420" height="460" fill="none" />

      {/* building outline */}
      <rect x="60" y="40" width="230" height="380" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9" />

      {/* floor grid */}
      {Array.from({ length: floors }).map((_, i) => {
        const y = 40 + ((i + 1) * 380) / (floors + 1);
        return (
          <line
            key={`f-${i}`}
            x1="60"
            y1={y}
            x2="290"
            y2={y}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.35"
          />
        );
      })}
      {Array.from({ length: cols }).map((_, i) => {
        const x = 60 + ((i + 1) * 230) / (cols + 1);
        return (
          <line
            key={`c-${i}`}
            x1={x}
            y1="40"
            x2={x}
            y2="420"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />
        );
      })}

      {/* rooftop plant / STP marker */}
      <rect x="150" y="16" width="50" height="24" fill="currentColor" opacity="0.85" />
      <text x="175" y="32" textAnchor="middle" fontSize="9" fill="var(--ink)" opacity="0.9" fontFamily="monospace">
        M/E
      </text>

      {/* ground line */}
      <line x1="20" y1="420" x2="400" y2="420" stroke="currentColor" strokeWidth="2" />

      {/* service tag callouts */}
      {[
        { y: 96, label: "Security — patrol logged 04:00" },
        { y: 156, label: "Housekeeping — zone B cleared" },
        { y: 216, label: "HVAC — panel checked" },
        { y: 276, label: "Facade — cleaning cycle" },
        { y: 336, label: "Parking — flow checked" },
      ].map((row, i) => (
        <g key={i}>
          <line x1="290" y1={row.y} x2="330" y2={row.y} stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="330" cy={row.y} r="2.5" fill="currentColor" />
          <text
            x="336"
            y={row.y + 4}
            fontSize="10.5"
            fill="currentColor"
            opacity="0.75"
            fontFamily="var(--font-body)"
          >
            {row.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
