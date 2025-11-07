import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-1/3 -right-10 w-96 h-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="flex items-center gap-2 text-indigo-100/90 text-sm mb-6">
          <MapPin className="w-4 h-4" />
          <span>Phaphund • Auraiya • Uttar Pradesh</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Explore Phaphund
        </h1>
        <p className="mt-4 max-w-2xl text-indigo-50/90 text-base sm:text-lg">
          A charming town known for its welcoming people, rich culture, and easy
          connectivity. Discover local landmarks, food spots, and hidden gems —
          all in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 px-5 py-2.5 text-sm font-semibold shadow/50 shadow-indigo-900/20 hover:-translate-y-0.5 transition-transform"
          >
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

      <div className="relative h-12 sm:h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
