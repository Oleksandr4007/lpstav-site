import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <a href="/">
          <Image
            src="/images/logo.png"
            alt="LPSTAV"
            width={220}
            height={70}
            priority
          />
        </a>

        <nav className="hidden md:flex gap-8 font-semibold text-slate-800">
          <a href="#sluzby" className="hover:text-yellow-500 transition">
            Služby
          </a>

          <a href="#galerie" className="hover:text-yellow-500 transition">
            Galerie
          </a>

          <a href="#kontakt" className="hover:text-yellow-500 transition">
            Kontakt
          </a>
        </nav>

        <a
          href="tel:+420774898947"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold transition"
        >
          Zavolat
        </a>

      </div>
    </header>
  );
}