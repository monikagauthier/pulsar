/** PULSAR wordmark + precision target mark. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 44"
      className={className}
      role="img"
      aria-label="PULSAR"
    >
      <g transform="translate(22 22)">
        <circle r="18" fill="none" stroke="#b9dc59" strokeWidth="2" />
        <circle
          r="10"
          fill="none"
          stroke="#b9dc59"
          strokeWidth="2"
          strokeOpacity="0.55"
        />
        <circle r="3.4" fill="#b9dc59" />
        <path
          d="M18 0 h8 M-26 0 h8 M0 -18 v-8 M0 18 v8"
          stroke="#b9dc59"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <text
        x="54"
        y="30"
        fontFamily="var(--font-display)"
        fontSize="26"
        fontWeight="700"
        letterSpacing="4"
        fill="#eef2ea"
      >
        PULSAR
      </text>
    </svg>
  );
}
