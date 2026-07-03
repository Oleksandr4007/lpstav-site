"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Photo = {
  src: string;
  alt: string;
};

type Section = {
  title: string;
  description: string;
  photos: Photo[];
};

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<Photo[]>([]);
  const [index, setIndex] = useState(0);

  const sections: Section[] = [
    {
      title: "Fasády",
      description: "Realizace fasád, zateplení a dokončovací práce.",
      photos: [
        { src: "/images/Fasada.jpg", alt: "Fasáda" },
        { src: "/images/Fasada1.jpg", alt: "Fasáda" },
        { src: "/images/Fasada2.jpg", alt: "Fasáda" },
        { src: "/images/Fasada3.jpg", alt: "Fasáda" },
        { src: "/images/Fasada4.jpg", alt: "Fasáda" },
      ],
    },
    {
      title: "Dlažby",
      description: "Zámková dlažba, chodníky, příjezdové cesty a terasy.",
      photos: [
        { src: "/images/Dlazba.jpg", alt: "Dlažba" },
        { src: "/images/Dlazba1.jpg", alt: "Dlažba" },
        { src: "/images/Dlazba2.jpg", alt: "Dlažba" },
        { src: "/images/Dlazba3.jpg", alt: "Dlažba" },
        { src: "/images/Dlazba4.jpg", alt: "Dlažba" },
      ],
    },
    {
      title: "Koupelny",
      description: "Rekonstrukce koupelen, obklady a dlažby.",
      photos: [
        { src: "/images/Koupelna.jpg", alt: "Koupelna" },
        { src: "/images/Koupelna1.jpg", alt: "Koupelna" },
        { src: "/images/Koupelna2.jpg", alt: "Koupelna" },
        { src: "/images/Koupelna3.jpg", alt: "Koupelna" },
      ],
    },
    {
      title: "Terasy",
      description: "Venkovní realizace, terasy a pergoly.",
      photos: [
        { src: "/images/Terasy.jpg", alt: "Terasa" },
        { src: "/images/Terasy1.jpg", alt: "Terasa" },
        { src: "/images/Terasy2.jpg", alt: "Terasa" },
        { src: "/images/Terasy3.jpg", alt: "Terasa" },
      ],
    },
  ];

  function openGallery(sectionPhotos: Photo[], photoIndex: number) {
    setSlides(sectionPhotos);
    setIndex(photoIndex);
    setOpen(true);
  }

  return (
    <section id="galerie" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="text-yellow-500 font-semibold uppercase tracking-[4px]">
            Realizace
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Naše práce
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Podívejte se na výběr našich dokončených projektů.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.title} data-aos="fade-up">
              <div className="mb-8">
                <h3 className="text-4xl font-bold">
                  {section.title}
                </h3>
                <p className="text-gray-500 mt-3 max-w-2xl">
                  {section.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <button
                  type="button"
                  onClick={() => openGallery(section.photos, 0)}
                  className="group relative h-[520px] lg:col-span-2 overflow-hidden rounded-3xl shadow-xl"
                >
                  <Image
                    src={section.photos[0].src}
                    alt={section.photos[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition" />
                </button>

                <div className="grid grid-cols-2 gap-6">
                  {section.photos.slice(1, 5).map((photo, photoIndex) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => openGallery(section.photos, photoIndex + 1)}
                      className="group relative h-[248px] overflow-hidden rounded-3xl shadow-lg"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 16vw"
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides.map((photo) => ({ src: photo.src }))}
        />
      </div>
    </section>
  );
}