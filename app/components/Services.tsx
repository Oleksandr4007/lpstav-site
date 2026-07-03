import {
  Hammer,
  Paintbrush,
  Blocks,
  Building2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Hammer size={46} className="text-yellow-500" />,
      title: "Rekonstrukce",
      text: "Kompletní rekonstrukce bytů a rodinných domů.",
    },
    {
      icon: <Paintbrush size={46} className="text-yellow-500" />,
      title: "Fasády",
      text: "Moderní fasády a zateplovací systémy.",
    },
    {
      icon: <Blocks size={46} className="text-yellow-500" />,
      title: "Dlažby",
      text: "Pokládka obkladů a dlažeb všech typů.",
    },
    {
      icon: <Building2 size={46} className="text-yellow-500" />,
      title: "Zámková dlažba",
      text: "Chodníky, terasy a příjezdové cesty.",
    },
  ];

  return (
    <section id="sluzby" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Naše služby
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Co nabízíme
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Poskytujeme kompletní stavební práce pro byty, domy i komerční objekty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              data-aos="zoom-in"
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}