import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Handshake,
} from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <ShieldCheck size={44} className="text-yellow-500" />,
      title: "Kvalitní práce",
      text: "Používáme ověřené materiály a dbáme na každý detail.",
    },
    {
      icon: <Clock3 size={44} className="text-yellow-500" />,
      title: "Dodržujeme termíny",
      text: "Zakázky dokončujeme v dohodnutém termínu.",
    },
    {
      icon: <BadgeCheck size={44} className="text-yellow-500" />,
      title: "Zkušenosti",
      text: "Máme dlouholeté zkušenosti se stavebními pracemi.",
    },
    {
      icon: <Handshake size={44} className="text-yellow-500" />,
      title: "Individuální přístup",
      text: "Každému zákazníkovi nabízíme řešení na míru.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Proč právě my
          </p>

          <h2 className="text-5xl font-bold mt-4">
            LPSTAV S.R.O.
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Spolehlivý partner pro rekonstrukce, fasády,
            obklady i kompletní stavební práce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              data-aos="zoom-in"
              className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-yellow-500 transition"
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}