"use client";

import { useState, useEffect, memo, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { locations, statesCovered } from "@/data/content";
import indiaGeo from "@/data/india-states.json";
import indiaLines from "@/data/india-lines.json";

const coveredSet = new Set(statesCovered);

const CITY_COORDS: Record<string, [number, number]> = {
  Kanpur: [80.35, 26.45],
  Lucknow: [80.95, 26.85],
  Prayagraj: [81.85, 25.43],
  Varanasi: [83.0, 25.32],
  Jaunpur: [82.68, 25.75],
  Gorakhpur: [83.37, 26.76],
  Ghazipur: [83.58, 25.58],
  Bhadohi: [82.57, 25.39],
  Ballia: [84.15, 25.76],
  Deoria: [83.78, 26.5],
  Ramnagar: [83.03, 25.27],
  Patna: [85.14, 25.61],
};

const HQ_COORDS: [number, number] = [77.21, 28.61];

function StateShape({
  geo,
  covered,
  hovered,
  onHover,
  onLeave,
}: {
  geo: any;
  covered: boolean;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <Geography
      geography={geo}
      fill={covered ? "var(--amber)" : "var(--charcoal)"}
      fillOpacity={hovered ? (covered ? 0.35 : 0.14) : covered ? 0.18 : 0.05}
      stroke={covered ? "var(--amber-dim)" : "var(--charcoal)"}
      strokeWidth={0.5}
      strokeOpacity={hovered ? 0.6 : 0.2}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        default: { outline: "none", cursor: "pointer", transition: "fill-opacity 200ms" },
        hover: { outline: "none", cursor: "pointer" },
        pressed: { outline: "none" },
      }}
    />
  );
}

const MemoStateShape = memo(StateShape);

export default function IndiaMap({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const locCoords = useMemo(
    () => indiaLines.loc.map(([lon, lat]: number[]) => [lon, lat] as [number, number]),
    []
  );
  const lacCoords = useMemo(
    () => indiaLines.lac.map(([lon, lat]: number[]) => [lon, lat] as [number, number]),
    []
  );

  if (!mounted) {
    return <div className={`relative ${className}`} />;
  }

  return (
    <div className={`relative ${className}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [80, 24], scale: 820 }}
        width={440}
        height={520}
        style={{ width: "100%", height: "100%" }}
      >
        {/* State regions from real GeoJSON */}
        <Geographies geography={indiaGeo}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const covered = coveredSet.has(name);
              return (
                <MemoStateShape
                  key={geo.rsmKey}
                  geo={geo}
                  covered={covered}
                  hovered={hovered === name}
                  onHover={() => setHovered(name)}
                  onLeave={() => setHovered(null)}
                />
              );
            })
          }
        </Geographies>

        {/* Line of Control (LoC) - dashed */}
        <Line
          coordinates={locCoords}
          stroke="var(--charcoal)"
          strokeWidth={0.8}
          strokeDasharray="4 2"
          strokeOpacity={0.35}
          fill="none"
        />

        {/* Line of Actual Control (LAC) - dashed */}
        <Line
          coordinates={lacCoords}
          stroke="var(--charcoal)"
          strokeWidth={0.8}
          strokeDasharray="4 2"
          strokeOpacity={0.35}
          fill="none"
        />

        {/* City markers */}
        {locations.map((city, i) => {
          const coords = CITY_COORDS[city];
          if (!coords) return null;
          return (
            <Marker
              key={city}
              coordinates={coords}
              onMouseEnter={() => setHovered(city)}
              onMouseLeave={() => setHovered(null)}
            >
              <circle r={8} fill="var(--amber)" opacity={0.15} />
              <circle r={3.5} fill="var(--amber)" />
              <circle r={1.4} fill="var(--paper)" />
              <circle
                r={4}
                fill="none"
                stroke="var(--amber)"
                strokeWidth={0.8}
                opacity={0.5}
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="12"
                  dur="2.5s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2.5s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </Marker>
          );
        })}

        {/* Delhi-NCR corporate HQ */}
        <Marker coordinates={HQ_COORDS}>
          <circle r={10} fill="var(--plum)" opacity={0.12} />
          <circle r={5.5} fill="var(--plum)" opacity={0.9} />
          <circle r={2.2} fill="var(--paper)" />
          <circle
            r={5}
            fill="none"
            stroke="var(--plum)"
            strokeWidth={0.8}
            opacity={0.5}
          >
            <animate attributeName="r" from="5" to="14" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <text
            y={-12}
            textAnchor="middle"
            fontSize={8}
            fontWeight="bold"
            fill="var(--plum)"
            fontFamily="var(--font-display)"
          >
            Delhi-NCR
          </text>
          <text
            y={-22}
            textAnchor="middle"
            fontSize={6}
            fill="var(--plum)"
            opacity={0.7}
            fontFamily="var(--font-body)"
          >
            Corporate HQ
          </text>
        </Marker>
      </ComposableMap>

      {/* Hover tooltip */}
      {hovered && (
        <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded bg-ink/92 px-3 py-1.5 font-display text-[13px] font-semibold text-paper shadow-lg">
          {hovered}
          {coveredSet.has(hovered) && (
            <span className="ml-2 text-[11px] font-normal text-amber opacity-80">
              Covered
            </span>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 rounded border rule bg-paper/90 px-3 py-2.5 text-[11px] text-charcoal/65 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" />
          Active locations
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-plum" />
          Corporate office
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded bg-amber/20 ring-1 ring-amber-dim/30" />
          Covered states ({statesCovered.length})
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="inline-block h-0 w-3.5 border-t border-dashed border-charcoal/40" />
          LoC / LAC
        </div>
      </div>
    </div>
  );
}
