const iconClass = "h-full w-full";

export function IFMSIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <rect x="12" y="22" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22" y="32" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="34" y="32" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M32 10L8 22h48L32 10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="32" y1="52" x2="32" y2="56" stroke="currentColor" strokeWidth="2.5" />
      <line x1="20" y1="56" x2="44" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="14" r="8" fill="currentColor" opacity="0.15" />
      <path d="M47 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HousekeepingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <path d="M20 16c0-2.2 1.8-4 4-4h4a4 4 0 014 4v4H20v-4z" stroke="currentColor" strokeWidth="2.5" />
      <rect x="18" y="20" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <line x1="26" y1="28" x2="26" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 50h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 26a10 10 0 0116 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 28l6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 28l-6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="46" cy="52" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SecurityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <path d="M32 6L10 16v16c0 14 10 22 22 26 12-4 22-12 22-26V16L32 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 6L10 16v16c0 14 10 22 22 26 12-4 22-12 22-26V16L32 6z" fill="currentColor" opacity="0.08" />
      <path d="M24 32l5 5 11-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ElectroMechIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <circle cx="28" cy="32" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="16" x2="28" y2="22" stroke="currentColor" strokeWidth="2.5" />
      <line x1="28" y1="42" x2="28" y2="48" stroke="currentColor" strokeWidth="2.5" />
      <line x1="12" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="2.5" />
      <line x1="38" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2.5" />
      <path d="M46 12l4 10h-8l4 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SoftServicesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <path d="M32 8c-8 6-16 14-16 24a16 16 0 0032 0c0-10-8-18-16-24z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 8c-8 6-16 14-16 24a16 16 0 0032 0c0-10-8-18-16-24z" fill="currentColor" opacity="0.08" />
      <path d="M32 20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 28c3-2 6 2 6-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 28c-3-2-6 2-6-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DeepCleaningIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${iconClass} ${className}`} fill="none" aria-hidden="true">
      <path d="M20 48l4-24h16l4 24" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 48h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="24" y="20" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M40 12l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 18l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 8l2 2m0-2l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="36" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="36" cy="32" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="32" cy="40" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

const icons: Record<string, React.FC<{ className?: string }>> = {
  ifms: IFMSIcon,
  housekeeping: HousekeepingIcon,
  security: SecurityIcon,
  "electro-mechanical": ElectroMechIcon,
  "soft-services": SoftServicesIcon,
  "deep-cleaning": DeepCleaningIcon,
};

export function ServiceIcon({ id, className = "" }: { id: string; className?: string }) {
  const Icon = icons[id];
  if (!Icon) return null;
  return <Icon className={className} />;
}
