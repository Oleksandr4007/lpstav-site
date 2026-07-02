export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              LPSTAV S.R.O.
            </h2>

            <p className="text-gray-400">
              Kompletní stavební práce po celé České republice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Kontakt
            </h3>

            <p>📞 +420 774 898 947</p>
            <p>📧 lpstav01@gmail.com</p>
            <p>📍 Praha</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Služby
            </h3>

            <p>Rekonstrukce</p>
            <p>Fasády</p>
            <p>Dlažby</p>
            <p>Zámková dlažba</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2025 LPSTAV S.R.O. Všechna práva vyhrazena.
        </div>

      </div>
    </footer>
  );
}