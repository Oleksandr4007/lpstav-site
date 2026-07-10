"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

const features = [
  {
    title: "Kvalita",
    text: "Poctivá práce",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
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
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
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
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
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
      className="relative overflow-hidden bg-[#050505] text-white lg:min-h-screen"
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-220px] top-0 h-[420px] w-[420px] rounded-full bg-yellow-500/20 blur-[120px] sm:h-[520px] sm:w-[520px] lg:right-[-160px] lg:top-10 lg:h-[560px] lg:w-[560px] lg:blur-[140px]"
      />

      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[-180px] h-[360px] w-[360px] rounded-full bg-yellow-500/10 blur-[120px] sm:h-[440px] sm:w-[440px] lg:bottom-[-220px] lg:h-[480px] lg:w-[480px] lg:blur-[140px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.13),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),transparent_35%,rgba(0,0,0,0.22))]" />

      <div className="container relative z-10 mx-auto px-4 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:flex lg:min-h-screen lg:items-center lg:pb-20 lg:pt-32">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-[2px] w-9 bg-yellow-500 sm:w-14" />

              <p className="text-[10px] font-bold uppercase tracking-[3px] text-yellow-500 sm:text-sm sm:tracking-[5px]">
                Kvalitní stavební práce
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mx-auto max-w-[620px] text-[18px] font-black uppercase leading-tight sm:text-[24px] md:text-[30px] lg:mx-0 lg:text-[36px] xl:text-[42px]"
            >
              <span className="block text-white">KOMPLEXNÍ</span>

              <motion.span
                animate={{ opacity: [0.82, 1, 0.82] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block text-yellow-500"
              >
                STAVEBNÍ PRÁCE
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-lg md:text-xl lg:mx-0"
            >
              Realizujeme fasády, zámkové dlažby, koupelny, terasy, hrubé
              stavby a kompletní stavební práce v Praze a okolí.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex w-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl sm:mx-auto sm:w-fit sm:flex-row sm:gap-4 sm:p-4 lg:mx-0"
            >
              <a
                href="tel:+420774898947"
                className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-4 text-center font-bold text-black shadow-lg shadow-yellow-500/25 transition hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-yellow-500/50 sm:min-w-[190px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
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
                className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl border border-white/30 px-6 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:border-yellow-500 hover:text-yellow-500 sm:min-w-[220px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
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
            </motion.div>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 text-left text-sm text-gray-300 backdrop-blur-xl sm:mt-8 sm:grid-cols-3 sm:gap-5 sm:p-5 lg:max-w-[760px]"
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#101010] p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-[#171717] hover:shadow-lg hover:shadow-yellow-500/10 sm:block sm:rounded-3xl sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/15 text-yellow-500 transition group-hover:bg-yellow-500 group-hover:text-black sm:mb-4 sm:h-12 sm:w-12">
                    {feature.icon}
                  </div>

                  <div>
                    <p className="font-bold text-white">{feature.title}</p>
                    <p className="mt-1 text-xs sm:text-sm">{feature.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="relative hidden justify-center lg:flex lg:justify-end"
          >
            <div className="absolute inset-0 m-auto h-[430px] w-[430px] rounded-full bg-yellow-500/25 blur-[100px]" />

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
                className="h-auto w-full max-w-[600px] object-contain drop-shadow-2xl"
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