import { Camera, Building2, Soup } from "lucide-react";

const places = [
  {
    name: "Old Temples Circuit",
    tag: "Heritage",
    desc:
      "A calm walk through historic temples and shrines cherished by locals.",
    img:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bazaar Street",
    tag: "Market",
    desc:
      "Bustling lanes for fresh produce, daily needs, and evening snacks.",
    img:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Local Dhaba Row",
    tag: "Food",
    desc:
      "Fuel up with parathas, chai, and seasonal specialties on highway-side spots.",
    img:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Places() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Places to Explore
            </h2>
            <p className="mt-3 text-gray-600">
              Handpicked spots around town for a perfect day out.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-500">
            <Camera className="w-5 h-5" />
            <span className="text-sm">Bring your camera!</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-gray-500">
                  <Building2 className="w-4 h-4" />
                  <Soup className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
