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
            Kontaktujte nás a my se vám co nejdříve ozveme.
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
              <p>📍 Praha 18 – Letňany</p>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Praha%2018%20Letnany&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-white text-black rounded-2xl p-8 shadow-lg"
          >
            <input
              type="hidden"
              name="access_key"
              value="abca9500-7069-4201-a0fd-a7fa846798a1"
            />

            <input
              type="hidden"
              name="subject"
              value="Nová poptávka z webu LPSTAV"
            />

            <input
              type="hidden"
              name="from_name"
              value="LPSTAV Web"
            />

            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <input
              type="text"
              name="name"
              placeholder="Jméno"
              required
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              className="w-full p-4 border rounded-xl mb-4"
            />

            <textarea
              name="message"
              placeholder="Popis zakázky"
              rows={6}
              required
              className="w-full p-4 border rounded-xl mb-6"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
            >
              Odeslat poptávku
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}