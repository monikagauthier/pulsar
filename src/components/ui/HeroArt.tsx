/** Original cinematic sprayer illustration — see /site/assets/svg/hero.svg. */
export function HeroArt() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1c15" />
          <stop offset="0.55" stopColor="#10271d" />
          <stop offset="1" stopColor="#163527" />
        </linearGradient>
        <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#163527" />
          <stop offset="1" stopColor="#0b1c15" />
        </linearGradient>
        <radialGradient id="sun" cx="0.82" cy="0.28" r="0.5">
          <stop offset="0" stopColor="#e5a943" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#e5a943" stopOpacity="0.12" />
          <stop offset="1" stopColor="#e5a943" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b9dc59" stopOpacity="0.22" />
          <stop offset="1" stopColor="#b9dc59" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#sky)" />
      <rect width="1440" height="900" fill="url(#sun)" />
      <g stroke="#eff4ec" strokeOpacity="0.045" strokeWidth="1">
        <path d="M0 160H1440M0 320H1440M0 480H1440M0 640H1440M0 800H1440" />
        <path d="M160 0V900M360 0V900M560 0V900M760 0V900M960 0V900M1160 0V900M1360 0V900" />
      </g>
      <circle
        cx="1200"
        cy="120"
        r="46"
        fill="none"
        stroke="#b9dc59"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <circle
        cx="1200"
        cy="120"
        r="70"
        fill="none"
        stroke="#b9dc59"
        strokeOpacity="0.09"
        strokeWidth="1.5"
      />
      <path
        d="M0 640 Q 360 600 720 628 T 1440 612 V900 H0 Z"
        fill="url(#field)"
      />
      <g stroke="#b9dc59" strokeOpacity="0.12" strokeWidth="2" fill="none">
        <path d="M-40 900 L 560 648" />
        <path d="M220 900 L 640 648" />
        <path d="M520 900 L 720 650" />
        <path d="M900 900 L 820 652" />
        <path d="M1240 900 L 920 652" />
        <path d="M1540 900 L 1040 650" />
      </g>
      <g>
        <path d="M520 560 L 470 660 L 572 660 Z" fill="url(#mist)" />
        <path d="M610 560 L 560 668 L 662 668 Z" fill="url(#mist)" />
        <path d="M700 560 L 650 672 L 752 672 Z" fill="url(#mist)" />
        <path d="M790 560 L 740 668 L 842 668 Z" fill="url(#mist)" />
        <path d="M880 560 L 830 660 L 932 660 Z" fill="url(#mist)" />
      </g>
      <g fill="#0b1c15" stroke="#2a4335" strokeWidth="2">
        <rect x="610" y="430" width="210" height="110" rx="16" />
        <path d="M560 440 h60 v60 h-78 l-6 -30 q0 -30 24 -30 Z" />
        <path d="M540 560 h320 l-20 40 h-280 Z" />
      </g>
      <rect
        x="560"
        y="448"
        width="52"
        height="42"
        rx="6"
        fill="#163527"
        stroke="#b9dc59"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <g stroke="#2a4335" strokeWidth="3" fill="#0b1c15">
        <circle cx="595" cy="610" r="64" />
        <circle cx="820" cy="610" r="64" />
      </g>
      <g stroke="#3a5847" strokeWidth="2" fill="none">
        <circle cx="595" cy="610" r="30" />
        <circle cx="820" cy="610" r="30" />
      </g>
      <g stroke="#3a5847" strokeWidth="4" strokeLinecap="round">
        <path d="M470 548 H950" />
      </g>
      <g fill="#b9dc59">
        <circle cx="500" cy="556" r="4" />
        <circle cx="590" cy="556" r="4" />
        <circle cx="680" cy="556" r="4" />
        <circle cx="770" cy="556" r="4" />
        <circle cx="860" cy="556" r="4" />
        <circle cx="940" cy="556" r="4" />
      </g>
      <path
        d="M548 470 L 300 520 L 300 560 L 548 500 Z"
        fill="#e5a943"
        fillOpacity="0.08"
      />
      <rect
        x="542"
        y="474"
        width="8"
        height="10"
        rx="2"
        fill="#e5a943"
        fillOpacity="0.8"
      />
    </svg>
  );
}
