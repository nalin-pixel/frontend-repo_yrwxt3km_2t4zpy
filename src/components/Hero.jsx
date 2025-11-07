import Spline from "@splinetool/react-spline";
import { MapPin, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Top gradient header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-rose-600 via-rose-500 to-rose-400 text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/3 -right-10 w-96 h-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 text-rose-50/90 text-sm mb-5">
                <MapPin className="w-4 h-4" />
                <span>Phaphund • Auraiya • PIN 206247</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Explore Phaphund
              </h1>
              <p className="mt-4 max-w-xl text-rose-50/95 text-base sm:text-lg">
                Interactive 3D experience to discover a welcoming town with rich
                culture, great food, and easy connectivity. Spin the globe and start
                your journey.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#highlights"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-rose-700 px-5 py-2.5 text-sm font-semibold shadow/50 shadow-rose-900/20 hover:-translate-y-0.5 transition-transform"
                >
                  <Globe2 className="w-4 h-4" />
                  See Highlights
                </a>
                <a
                  href="#map"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  View Map
                </a>
              </div>
            </div>

            {/* 3D Spline Scene */}
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/20 bg-gradient-to-b from-rose-900/10 to-rose-900/0">
                <Spline
                  scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
                  style={{ width: "100%", height: "100%" }}
                />
                {/* Soft highlight overlay that does not block interactions */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-12 sm:h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
