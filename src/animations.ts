interface Animation {
  name: string;
  styles: {
    background: string;
    animation: string;
  };
}

export const animations: Animation[] = [
  {
    name: "Radial Pulse",
    styles: {
      background: "radial-gradient(circle at center, #ff0000, #00ff00, #0000ff)",
      animation: "radialPulse 8s ease infinite"
    }
  },
  {
    name: "Color Wave",
    styles: {
      background: "conic-gradient(from 0deg at center, #ff0000, #00ff00, #0000ff, #ff0000)",
      animation: "colorWave 8s linear infinite"
    }
  },
  {
    name: "Rainbow Spiral",
    styles: {
      background: "conic-gradient(from 0deg at center, red, yellow, lime, aqua, blue, magenta, red)",
      animation: "spin 10s linear infinite"
    }
  },
  {
    name: "Neon Pulse",
    styles: {
      background: "radial-gradient(circle at center, #ff00ff, #00ffff)",
      animation: "neonPulse 4s ease infinite"
    }
  },
  {
    name: "Psychedelic Swirl",
    styles: {
      background: "conic-gradient(from 0deg at center, #ff0000, #00ff00, #0000ff, #ff0000)",
      animation: "swirl 12s linear infinite"
    }
  }
];