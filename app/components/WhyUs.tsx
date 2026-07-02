export default function WhyUs() {
  const items = [
    {
      icon: "⭐",
      title: "15+ let zkušeností",
      text: "Dlouholeté zkušenosti ve stavebnictví.",
    },
    {
      icon: "🏆",
      title: "Kvalitní práce",
      text: "Používáme kvalitní materiály a ověřené postupy.",
    },
    {
      icon: "⏱️",
      title: "Dodržujeme termíny",
      text: "Zakázky dokončujeme v domluveném termínu.",
    },
    {
      icon: "💰",
      title: "Kalkulace zdarma",
      text: "Nezávazná cenová nabídka bez poplatků.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Proč právě my
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Proč právě LPSTAV?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}