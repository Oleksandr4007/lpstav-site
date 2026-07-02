export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Rekonstrukce",
      text: "Kompletní rekonstrukce bytů, domů a komerčních prostor.",
    },
    {
      icon: "🎨",
      title: "Fasády",
      text: "Moderní fasádní systémy, zateplení a renovace budov.",
    },
    {
      icon: "🧱",
      title: "Obklady a dlažby",
      text: "Profesionální pokládka obkladů, dlažeb a koupelen.",
    },
    {
      icon: "🚜",
      title: "Zámková dlažba",
      text: "Příjezdové cesty, chodníky, terasy a venkovní úpravy.",
    },
  ];

  return (
    <section id="sluzby" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-[4px]">
            Naše služby
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Co pro vás zajistíme
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Nabízíme kompletní stavební práce pro rodinné domy,
            byty i komerční objekty po celé České republice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}