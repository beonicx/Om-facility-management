export default function Logomark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="14" cy="16" r="11" stroke="currentColor" strokeWidth="3" />
      <path
        d="M14 27c8-2 6-9 11-9s3 7 11 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
