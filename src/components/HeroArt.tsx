export default function HeroArt() {
  return (
    <svg className="hero__art" viewBox="0 0 400 400" role="img" aria-label="A steaming cup of coffee">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a373" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d4a373" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cup" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fffaf3" />
          <stop offset="100%" stopColor="#ead7c0" />
        </linearGradient>
        <radialGradient id="crema" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#c68b59" />
          <stop offset="70%" stopColor="#8a5a3b" />
          <stop offset="100%" stopColor="#5c3a24" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#glow)" />
      <ellipse cx="200" cy="320" rx="150" ry="28" fill="#2a1810" opacity="0.35" />
      <ellipse cx="200" cy="300" rx="140" ry="30" fill="#f5e6d3" />
      <ellipse cx="200" cy="296" rx="110" ry="20" fill="#ead7c0" />
      <path d="M290 200h18a38 38 0 0 1 0 76h-26" fill="none" stroke="#ead7c0" strokeWidth="16" strokeLinecap="round" />
      <path d="M100 180h200l-14 96a40 40 0 0 1-40 34h-92a40 40 0 0 1-40-34z" fill="url(#cup)" />
      <ellipse cx="200" cy="180" rx="100" ry="22" fill="#fffaf3" />
      <ellipse cx="200" cy="182" rx="88" ry="16" fill="url(#crema)" />
      <path d="M180 182c8-10 28-10 40 0-12 8-28 8-40 0z" fill="#f0d2ae" opacity="0.85" />
      <g fill="none" stroke="#f5e6d3" strokeWidth="6" strokeLinecap="round" opacity="0.8">
        <path className="steam steam--1" d="M165 140c-14-20 14-32 0-56" />
        <path className="steam steam--2" d="M200 130c-14-20 14-32 0-60" />
        <path className="steam steam--3" d="M235 140c-14-20 14-32 0-56" />
      </g>
      <g fill="#8a5a3b">
        <ellipse cx="70" cy="330" rx="12" ry="8" transform="rotate(-30 70 330)" />
        <ellipse cx="335" cy="340" rx="12" ry="8" transform="rotate(25 335 340)" />
        <ellipse cx="350" cy="310" rx="10" ry="7" transform="rotate(-15 350 310)" />
      </g>
    </svg>
  );
}
