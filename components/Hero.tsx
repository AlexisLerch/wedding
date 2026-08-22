"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();

  /* =========================================
      PARALLAX FLORES SUPERIORES
      SUAVE - SIN ROTACIÓN
  ========================================= */

  const topSlowY = useTransform(scrollY, [0, 800], [0, 25]);
  const topMediumY = useTransform(scrollY, [0, 800], [0, 40]);
  const topFastY = useTransform(scrollY, [0, 800], [0, 55]);

  const topSlowX = useTransform(scrollY, [0, 800], [0, -6]);
  const topMediumX = useTransform(scrollY, [0, 800], [0, -10]);
  const topFastX = useTransform(scrollY, [0, 800], [0, -14]);

  /* =========================================
      PARALLAX FLORES INFERIORES
      SUAVE - SIN ROTACIÓN
  ========================================= */

  const bottomSlowY = useTransform(scrollY, [0, 800], [0, -25]);
  const bottomMediumY = useTransform(scrollY, [0, 800], [0, -40]);
  const bottomFastY = useTransform(scrollY, [0, 800], [0, -55]);

  const bottomSlowX = useTransform(scrollY, [0, 800], [0, 6]);
  const bottomMediumX = useTransform(scrollY, [0, 800], [0, 10]);
  const bottomFastX = useTransform(scrollY, [0, 800], [0, 14]);

  /* =========================================
      PARALLAX TEXTO
  ========================================= */

  const titleY = useTransform(scrollY, [0, 650], [0, -80]);
  const titleScale = useTransform(scrollY, [0, 650], [1, 0.97]);
  const titleOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  /* =========================================
      INDICADOR SCROLL
  ========================================= */

  const scrollIndicatorOpacity = useTransform(scrollY, [0, 180], [1, 0]);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
        text-center
      "
    >
      {/* =========================================
          FLORES ARRIBA IZQUIERDA
      ========================================= */}

      {/* FLOR GRANDE PRINCIPAL */}

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
          y: -25,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          translateY: topSlowY,
          translateX: topSlowX,
        }}
        className="
          absolute
          -left-10
          -top-10

          md:-left-16
          md:-top-20
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={420}
          height={420}
          priority
          className="
            w-40
            pointer-events-none

            md:w-80
          "
        />
      </motion.div>

      {/* SEGUNDA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
          y: -15,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.08,
          ease: "easeOut",
        }}
        style={{
          translateY: topMediumY,
          translateX: topMediumX,
        }}
        className="
          absolute
          -left-12
          top-10

          md:-left-20
          md:top-24
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={360}
          height={360}
          priority
          className="
            w-36
            -rotate-12
            pointer-events-none

            md:w-72
          "
        />
      </motion.div>

      {/* TERCERA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.14,
          ease: "easeOut",
        }}
        style={{
          translateY: topSlowY,
          translateX: topSlowX,
        }}
        className="
          absolute
          left-12
          -top-8

          md:left-32
          md:-top-20
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={340}
          height={340}
          priority
          className="
            w-32
            rotate-12
            pointer-events-none

            md:w-72
          "
        />
      </motion.div>

      {/* CUARTA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          x: -25,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut",
        }}
        style={{
          translateY: topMediumY,
          translateX: topMediumX,
        }}
        className="
          absolute
          -left-1
          top-24

          md:left-6
          md:top-48
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={240}
          height={240}
          className="
            w-24
            rotate-6
            pointer-events-none

            md:w-48
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.28,
          ease: "easeOut",
        }}
        style={{
          translateY: topFastY,
          translateX: topFastX,
        }}
        className="
          absolute
          left-20
          top-36

          md:left-40
          md:top-44
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={140}
          height={140}
          className="
            w-14
            rotate-12
            pointer-events-none

            md:w-24
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA ALEJADA */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.36,
          ease: "easeOut",
        }}
        style={{
          translateY: topFastY,
          translateX: topFastX,
        }}
        className="
          absolute
          left-10
          top-48

          md:left-52
          md:top-60
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={120}
          height={120}
          className="
            w-11
            -rotate-6
            pointer-events-none

            md:w-20
          "
        />
      </motion.div>

      {/* =========================================
          FLORES ABAJO DERECHA
      ========================================= */}

      {/* FLOR GRANDE PRINCIPAL */}

      <motion.div
        initial={{
          opacity: 0,
          x: 35,
          y: 25,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomSlowY,
          translateX: bottomSlowX,
        }}
        className="
          absolute
          -right-10
          -bottom-10

          md:-right-16
          md:-bottom-20
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={420}
          height={420}
          priority
          className="
            w-40
            rotate-12
            pointer-events-none

            md:w-80
          "
        />
      </motion.div>

      {/* SEGUNDA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
          y: 15,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.08,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomMediumY,
          translateX: bottomMediumX,
        }}
        className="
          absolute
          -right-12
          bottom-10

          md:-right-20
          md:bottom-24
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={360}
          height={360}
          className="
            w-36
            -rotate-12
            pointer-events-none

            md:w-72
          "
        />
      </motion.div>

      {/* TERCERA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.14,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomSlowY,
          translateX: bottomSlowX,
        }}
        className="
          absolute
          right-12
          -bottom-8

          md:right-32
          md:-bottom-24
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={340}
          height={340}
          className="
            w-32
            rotate-6
            pointer-events-none

            md:w-72
          "
        />
      </motion.div>

      {/* CUARTA FLOR */}

      <motion.div
        initial={{
          opacity: 0,
          x: 25,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomMediumY,
          translateX: bottomMediumX,
        }}
        className="
          absolute
          -right-1
          bottom-24

          md:right-4
          md:bottom-44
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={220}
          height={220}
          className="
            w-24
            -rotate-6
            pointer-events-none

            md:w-44
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: -12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.28,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomFastY,
          translateX: bottomFastX,
        }}
        className="
          absolute
          right-20
          bottom-36

          md:right-40
          md:bottom-44
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={140}
          height={140}
          className="
            w-14
            rotate-12
            pointer-events-none

            md:w-24
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA ALEJADA */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: -12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: 0.36,
          ease: "easeOut",
        }}
        style={{
          translateY: bottomFastY,
          translateX: bottomFastX,
        }}
        className="
          absolute
          right-10
          bottom-48

          md:right-52
          md:bottom-60
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={120}
          height={120}
          className="
            w-11
            -rotate-6
            pointer-events-none

            md:w-20
          "
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
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >
        {/* NUESTRA UNIÓN */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
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

        {/* NOMBRES */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.45,
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
          {/* ALEXIS */}

          <motion.span
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="block"
          >
            Alexis
          </motion.span>

          {/* & */}

          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.78,
              ease: "easeOut",
            }}
            className="
              my-3
              block
              text-3xl

              sm:text-4xl
              md:text-6xl
            "
          >
            &amp;
          </motion.span>

          {/* LUCILA */}

          <motion.span
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
              ease: "easeOut",
            }}
            className="block"
          >
            Lucila
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* =========================================
          INDICADOR SCROLL
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.3,
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
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-2
          "
        />
      </motion.div>
    </section>
  );
}
