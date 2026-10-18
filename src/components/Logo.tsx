export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <path d="M16 26h28v10a14 14 0 0 1-28 0z" fill="var(--cream)" />
      <path d="M44 29h3a5 5 0 0 1 0 10h-3" fill="none" stroke="var(--cream)" strokeWidth="3" />
      <path
        d="M24 12c-2 3 2 5 0 8M32 12c-2 3 2 5 0 8M40 12c-2 3 2 5 0 8"
        fill="none"
        stroke="var(--caramel)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
