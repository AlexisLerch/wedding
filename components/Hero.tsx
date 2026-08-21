"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();

  /* =========================================
      PARALLAX FLORES SUPERIORES
  ========================================= */

  const topSlowY = useTransform(scrollY, [0, 800], [0, 70]);
  const topMediumY = useTransform(scrollY, [0, 800], [0, 120]);
  const topFastY = useTransform(scrollY, [0, 800], [0, 170]);

  const topSlowX = useTransform(scrollY, [0, 800], [0, -20]);
  const topMediumX = useTransform(scrollY, [0, 800], [0, -35]);
  const topFastX = useTransform(scrollY, [0, 800], [0, -50]);

  const topRotateLeft = useTransform(scrollY, [0, 800], [0, -10]);
  const topRotateRight = useTransform(scrollY, [0, 800], [0, 14]);

  /* =========================================
      PARALLAX FLORES INFERIORES
  ========================================= */

  const bottomSlowY = useTransform(scrollY, [0, 800], [0, -70]);
  const bottomMediumY = useTransform(scrollY, [0, 800], [0, -120]);
  const bottomFastY = useTransform(scrollY, [0, 800], [0, -170]);

  const bottomSlowX = useTransform(scrollY, [0, 800], [0, 20]);
  const bottomMediumX = useTransform(scrollY, [0, 800], [0, 35]);
  const bottomFastX = useTransform(scrollY, [0, 800], [0, 50]);

  const bottomRotateLeft = useTransform(scrollY, [0, 800], [0, -14]);
  const bottomRotateRight = useTransform(scrollY, [0, 800], [0, 10]);

  /* =========================================
      PARALLAX TEXTO
  ========================================= */

  const titleY = useTransform(scrollY, [0, 650], [0, -110]);
  const titleScale = useTransform(scrollY, [0, 650], [1, 0.94]);
  const titleOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  /* =========================================
      INDICADOR SCROLL
  ========================================= */

  const scrollIndicatorOpacity = useTransform(scrollY, [0, 180], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* =========================================
          FLORES ARRIBA IZQUIERDA
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
          y: -60,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          translateY: topSlowY,
          translateX: topSlowX,
          rotate: topRotateLeft,
        }}
        className="absolute -left-10 -top-10 md:-left-16 md:-top-20"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={420}
          height={420}
          className="w-40 pointer-events-none md:w-80"
        />
      </motion.div>

      {/* Más pegada a la primera */}

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          y: -20,
          rotate: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: -12,
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "easeOut",
        }}
        style={{
          translateY: topMediumY,
          translateX: topMediumX,
        }}
        className="absolute -left-12 top-10 md:-left-20 md:top-24"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={360}
          height={360}
          className="w-36 -rotate-12 pointer-events-none md:w-72"
        />
      </motion.div>

      {/* Se superpone con las anteriores */}

      <motion.div
        initial={{
          opacity: 0,
          y: -90,
          rotate: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 12,
        }}
        transition={{
          duration: 1,
          delay: 0.18,
          ease: "easeOut",
        }}
        style={{
          translateY: topSlowY,
          translateX: topSlowX,
          rotate: topRotateRight,
        }}
        className="absolute left-12 -top-8 md:left-32 md:-top-20"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={340}
          height={340}
          className="w-32 pointer-events-none md:w-72"
        />
      </motion.div>

      {/* Pegada al ramo */}

      <motion.div
        initial={{
          opacity: 0,
          x: -70,
          scale: 0.8,
          rotate: -8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 6,
        }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: "easeOut",
        }}
        style={{
          translateY: topMediumY,
          translateX: topMediumX,
        }}
        className="absolute -left-1 top-24 md:left-6 md:top-48"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={240}
          height={240}
          className="w-24 rotate-6 pointer-events-none md:w-48"
        />
      </motion.div>

      {/* Flor pequeña suelta */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 12,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          type: "spring",
          stiffness: 120,
        }}
        style={{
          translateY: topFastY,
          translateX: topFastX,
          rotate: topRotateRight,
        }}
        className="absolute left-20 top-36 md:left-40 md:top-44"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={140}
          height={140}
          className="w-14 pointer-events-none md:w-24"
        />
      </motion.div>

      {/* Flor pequeña más alejada */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -6,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
          type: "spring",
          stiffness: 120,
        }}
        style={{
          translateY: topFastY,
          translateX: topFastX,
          rotate: topRotateLeft,
        }}
        className="absolute left-10 top-48 md:left-52 md:top-60"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={120}
          height={120}
          className="w-11 pointer-events-none md:w-20"
        />
      </motion.div>

      {/* =========================================
          FLORES ABAJO DERECHA
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
          y: 60,
          rotate: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 12,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomSlowY,
          translateX: bottomSlowX,
          rotate: bottomRotateRight,
        }}
        className="absolute -right-10 -bottom-10 md:-right-16 md:-bottom-20"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={420}
          height={420}
          className="w-40 pointer-events-none md:w-80"
        />
      </motion.div>

      {/* Más pegada a la primera */}

      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          y: 20,
          rotate: 10,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: -12,
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomMediumY,
          translateX: bottomMediumX,
        }}
        className="absolute -right-12 bottom-10 md:-right-20 md:bottom-24"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={360}
          height={360}
          className="w-36 -rotate-12 pointer-events-none md:w-72"
        />
      </motion.div>

      {/* Se superpone con las anteriores */}

      <motion.div
        initial={{
          opacity: 0,
          y: 90,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 6,
        }}
        transition={{
          duration: 1,
          delay: 0.18,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomSlowY,
          translateX: bottomSlowX,
          rotate: bottomRotateRight,
        }}
        className="absolute right-12 -bottom-8 md:right-32 md:-bottom-24"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={340}
          height={340}
          className="w-32 pointer-events-none md:w-72"
        />
      </motion.div>

      {/* Pegada al ramo */}

      <motion.div
        initial={{
          opacity: 0,
          x: 70,
          scale: 0.8,
          rotate: 10,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: -6,
        }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomMediumY,
          translateX: bottomMediumX,
        }}
        className="absolute -right-1 bottom-24 md:right-4 md:bottom-44"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={220}
          height={220}
          className="w-24 -rotate-6 pointer-events-none md:w-44"
        />
      </motion.div>

      {/* Flor pequeña suelta */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: -20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 12,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          type: "spring",
          stiffness: 120,
        }}
        style={{
          translateY: bottomFastY,
          translateX: bottomFastX,
          rotate: bottomRotateRight,
        }}
        className="absolute right-20 bottom-36 md:right-40 md:bottom-44"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={140}
          height={140}
          className="w-14 pointer-events-none md:w-24"
        />
      </motion.div>

      {/* Flor pequeña más alejada */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -6,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
          type: "spring",
          stiffness: 120,
        }}
        style={{
          translateY: bottomFastY,
          translateX: bottomFastX,
          rotate: bottomRotateLeft,
        }}
        className="absolute right-10 bottom-48 md:right-52 md:bottom-60"
      >
        <Image
          src="/amankay.png"
          alt=""
          width={120}
          height={120}
          className="w-11 pointer-events-none md:w-20"
        />
      </motion.div>

      {/* =========================================
          CONTENIDO CENTRAL
      ========================================= */}

      <motion.div
        style={{
          y: titleY,
          opacity: titleOpacity,
          scale: titleScale,
        }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p
          initial={{
            opacity: 0,
            y: -25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="
            mb-12
            font-engravers
            text-2xl
            uppercase
            tracking-[0.15em]
            text-text

            md:mb-16
            md:text-4xl
          "
        >
          Nuestra unión
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="
            font-engravers
            text-7xl
            font-medium
            leading-[0.85]
            text-text

            sm:text-8xl
            md:text-[7rem]
            lg:text-[8rem]
          "
        >
          <motion.span
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: "easeOut",
            }}
            className="block"
          >
            Alexis
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.4,
              rotate: -15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
              type: "spring",
              stiffness: 120,
            }}
            className="
              my-3
              block
              text-3xl

              sm:text-4xl
              md:text-6xl
            "
          >
            &
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
              ease: "easeOut",
            }}
            className="block"
          >
            Lucila
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* =========================================
          INDICADOR DE SCROLL
      ========================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        style={{
          opacity: scrollIndicatorOpacity,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          -translate-x-1/2

          md:bottom-8
        "
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        ></motion.div>
      </motion.div>
    </section>
  );
}
