"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

const features = [
  {
    title: "Kvalita",
    text: "Poctivá práce",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3L19 6V11C19 15.5 16.1 19.7 12 21C7.9 19.7 5 15.5 5 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Termíny",
    text: "Dodržujeme dohody",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 7V12L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Praha",
    text: "A okolí",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 21C12 21 18 15.7 18 10A6 6 0 0 0 6 10C6 15.7 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 12.5A2.5 2.5 0 1 0 12 7.5A2.5 2.5 0 0 0 12 12.5Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-160px] top-10 h-[560px] w-[560px] rounded-full bg-yellow-500/20 blur-[140px]"
      />

      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-[-180px] h-[480px] w-[480px] rounded-full bg-yellow-500/10 blur-[140px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.13),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),transparent_35%,rgba(0,0,0,0.22))]" />

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6 pb-16 pt-24 lg:pb-20 lg:pt-24">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-3">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="h-[2px] w-12 bg-yellow-500 sm:w-14" />

              <p className="text-xs font-bold uppercase tracking-[4px] text-yellow-500 sm:text-sm sm:tracking-[5px]">
                Kvalitní stavební práce
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-[820px] text-[36px] font-black uppercase leading-[0.95] sm:text-[44px] md:text-[52px] xl:text-[62px]"
            >
              <span className="block whitespace-nowrap text-white">
                S DŮRAZEM
              </span>

              <motion.span
                animate={{ opacity: [0.82, 1, 0.82] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block whitespace-nowrap text-yellow-500"
              >
                NA DETAIL
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:mx-0"
            >
              Fasády, zámkové dlažby, koupelny, terasy, hrubá stavba a kompletní
              stavební práce v Praze a okolí.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 inline-flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:flex-row"
            >
              <a
                href="tel:+420774898947"
                className="flex min-h-[56px] min-w-[190px] items-center justify-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 text-center font-bold text-black shadow-lg shadow-yellow-500/25 transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-yellow-500/50"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M22 16.92V20A2 2 0 0 1 19.82 22C9.39 20.9 3.1 14.61 2 4.18A2 2 0 0 1 4 2H7.09A2 2 0 0 1 9.05 3.57L9.75 6.67A2 2 0 0 1 9.18 8.56L7.91 9.83A15.5 15.5 0 0 0 14.17 16.09L15.44 14.82A2 2 0 0 1 17.33 14.25L20.43 14.95A2 2 0 0 1 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Zavolejte nám
              </a>

              <a
                href="#kontakt"
                className="flex min-h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-xl border border-white/30 px-8 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:border-yellow-500 hover:text-yellow-500"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M4 6H20A2 2 0 0 1 22 8V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V8A2 2 0 0 1 4 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 8L12 14L2 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Nezávazná poptávka
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-sm text-gray-300 backdrop-blur-xl sm:grid-cols-3 lg:max-w-[760px]"
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/5 bg-[#101010] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-[#171717] hover:shadow-lg hover:shadow-yellow-500/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/15 text-yellow-500 transition group-hover:bg-yellow-500 group-hover:text-black">
                    {feature.icon}
                  </div>

                  <p className="font-bold text-white">{feature.title}</p>
                  <p className="mt-1">{feature.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="relative flex justify-center lg:-ml-8 lg:justify-end"
          >
            <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-yellow-500/25 blur-[100px] sm:h-[430px] sm:w-[430px]" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/logo.png"
                alt="LPSTAV S.R.O."
                width={900}
                height={900}
                priority
                className="h-auto w-full max-w-[360px] object-contain drop-shadow-2xl sm:max-w-[520px] lg:max-w-[620px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sluzby"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1.1 },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-xs font-bold uppercase tracking-[4px] text-white/50 transition hover:text-yellow-500 lg:block"
      >
        Scroll
      </motion.a>
    </section>
  );
}