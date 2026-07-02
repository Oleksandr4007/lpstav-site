export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold uppercase tracking-[4px]">
            Kontakt
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Nezávazná poptávka
          </h2>

          <p className="text-gray-300 mt-5">
            Působíme v Praze a okolí. Po domluvě realizujeme zakázky po celé České republice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              LPSTAV S.R.O.
            </h3>

            <div className="space-y-5 text-xl">
              <p>📞 +420 774 898 947</p>
              <p>📧 lpstav01@gmail.com</p>
              <p>📍 Praha 18 — Letňany</p>
            </div>

            <a
              href="tel:+420774898947"
              className="inline-block mt-8 bg-yellow-500 text-black px-7 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              Zavolat nyní
            </a><a
  href="mailto:lpstav01@gmail.com?subject=Nezávazná%20poptávka&body=Dobrý%20den,%0A%0AMám%20zájem%20o%20stavební%20práce.%0A%0AJméno:%20%0ATelefon:%20%0AAdresa:%20%0APopis%20zakázky:%20"
  className="inline-block mt-4 ml-0 md:ml-4 bg-white text-black px-7 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
>
  ✉️ Odeslat poptávku
</a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[350px]">
            <iframe
              src="https://www.google.com/maps?q=Praha%2018%20Letnany&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}