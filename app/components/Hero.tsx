import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-black pt-24">
      <Image
        src="/images/hero-new.png"
        alt="LPSTAV S.R.O. - stavební práce"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}