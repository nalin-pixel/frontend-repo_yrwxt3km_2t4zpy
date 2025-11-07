import { Landmark, Utensils, Train, Trees } from "lucide-react";

const items = [
  {
    icon: Landmark,
    title: "Historic Landmarks",
    desc:
      "Visit temples and age-old structures that reflect the town's heritage and spirituality.",
  },
  {
    icon: Utensils,
    title: "Local Eateries",
    desc:
      "From chai stalls to hearty meals — enjoy authentic flavors loved by locals.",
  },
  {
    icon: Train,
    title: "Great Connectivity",
    desc:
      "Easy access via nearby stations and highways makes travel simple and quick.",
  },
  {
    icon: Trees,
    title: "Parks & Nature",
    desc:
      "Quiet green corners perfect for morning walks, sunsets, and weekend relaxations.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Highlights of Phaphund
          </h2>
          <p className="mt-3 text-gray-600">
            Area: Phaphund • District: Auraiya • PIN: 206247
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
