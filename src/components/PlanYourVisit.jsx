import { Calendar, Clock, Map as MapIcon, Phone } from "lucide-react";

export default function PlanYourVisit() {
  return (
    <section id="map" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Plan Your Visit
          </h2>
          <p className="mt-3 text-gray-600">Make the most of your time in Phaphund.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="Phaphund Map"
              src="https://www.google.com/maps?q=Phaphund%2C%20Auraiya&output=embed"
              className="w-full h-[320px] sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Best Time</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                October to March offers pleasant weather for walks and food trails.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Local Pace</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Markets peak in the evenings. Morning chai and parathas are a must.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <MapIcon className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Getting Around</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Auto-rickshaws are easy to find. Short walks connect most spots.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Emergency</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                PIN Code: 206247 • District: Auraiya • Dial 112 for quick help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
