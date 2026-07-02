export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Темний градієнт */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Контент */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <p className="text-yellow-400 uppercase tracking-[6px] mb-4 font-semibold">
          STAVEBNÍ SPOLEČNOST
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          LPSTAV <span className="text-yellow-400">S.R.O.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-4">
          Kompletní stavební práce po celé České republice
        </p>

        <p className="text-lg text-gray-300 mb-12">
          Rekonstrukce • Fasády • Obklady • Dlažby • Zámková dlažba • Koupelny
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="tel:+420774898947"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition text-lg"
          >
            📞 Zavolat
          </a>

          <a
            href="#kontakt"
            className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition text-lg"
          >
            Nezávazná poptávka
          </a>

        </div>

      </div>
    </section>
  );
}