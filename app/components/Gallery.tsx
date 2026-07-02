export default function Gallery() {
  const images = [
    { src: "/images/fasada1.jpg", title: "Fasády" },
    { src: "/images/fasada2.jpg", title: "Renovace fasády" },
    { src: "/images/dlazba1.jpg", title: "Zámková dlažba" },
    { src: "/images/dlazba2.jpg", title: "Venkovní dlažba" },
    { src: "/images/koupelna1.jpg", title: "Koupelny" },
    { src: "/images/hero.jpg", title: "Stavební práce" },
  ];

  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-[4px]">
            Realizace
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Naše práce
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Ukázky vybraných stavebních a rekonstrukčních prací.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}