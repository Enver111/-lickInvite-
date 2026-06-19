const sparkles = [
  { top: "18%", left: "12%", size: 6, delay: "0s" },
  { top: "32%", left: "78%", size: 4, delay: "1.2s" },
  { top: "65%", left: "8%", size: 5, delay: "0.6s" },
  { top: "72%", left: "88%", size: 7, delay: "1.8s" },
  { top: "45%", left: "55%", size: 3, delay: "2.4s" },
  { top: "12%", left: "62%", size: 4, delay: "0.9s" },
];

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-linear-to-br from-[#FFF7F0] via-background to-[#FFF0E3]" />

      <div className="hero-blob hero-blob-1 absolute -top-32 -left-32 size-[520px] rounded-full bg-[#E3853C]/25 blur-3xl" />
      <div className="hero-blob hero-blob-2 absolute -right-24 top-1/4 size-[420px] rounded-full bg-[#F59D56]/20 blur-3xl" />
      <div className="hero-blob hero-blob-3 absolute -bottom-40 left-1/3 size-[480px] rounded-full bg-[#E3853C]/15 blur-3xl" />
      <div className="hero-blob hero-blob-4 absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD4A8]/30 blur-3xl" />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(227,133,60,0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,var(--background)_75%)]" />

      <svg
        className="absolute right-[8%] top-[20%] size-64 text-[#E3853C]/10"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="8 12" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      <svg
        className="absolute bottom-[15%] left-[5%] size-48 text-[#F59D56]/15"
        viewBox="0 0 120 120"
        fill="currentColor"
      >
        <path d="M60 8 L72 44 L108 44 L78 66 L90 102 L60 80 L30 102 L42 66 L12 44 L48 44 Z" />
      </svg>

      {sparkles.map((sparkle, i) => (
        <span
          key={i}
          className="hero-sparkle absolute rounded-full bg-[#E3853C]"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default HeroBackground;
