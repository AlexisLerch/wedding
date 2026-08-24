"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // =====================================================
  // SCROLL SUAVE
  // =====================================================

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  });

  // =====================================================
  // FLORES ARRIBA
  // Movimiento corto para que no se vayan al centro.
  // =====================================================

  const topSlowY = useTransform(smoothScroll, [0, 0.5, 1], [0, 8, 18]);

  const topMediumY = useTransform(smoothScroll, [0, 0.5, 1], [0, 12, 26]);

  const topFastY = useTransform(smoothScroll, [0, 0.5, 1], [0, 16, 34]);

  const topSlowX = useTransform(smoothScroll, [0, 0.5, 1], [0, -2, -5]);

  const topMediumX = useTransform(smoothScroll, [0, 0.5, 1], [0, -4, -8]);

  const topFastX = useTransform(smoothScroll, [0, 0.5, 1], [0, -5, -11]);

  // =====================================================
  // FLORES ABAJO
  // Movimiento contrario.
  // =====================================================

  const bottomSlowY = useTransform(smoothScroll, [0, 0.5, 1], [0, -8, -18]);

  const bottomMediumY = useTransform(smoothScroll, [0, 0.5, 1], [0, -12, -26]);

  const bottomFastY = useTransform(smoothScroll, [0, 0.5, 1], [0, -16, -34]);

  const bottomSlowX = useTransform(smoothScroll, [0, 0.5, 1], [0, 2, 5]);

  const bottomMediumX = useTransform(smoothScroll, [0, 0.5, 1], [0, 4, 8]);

  const bottomFastX = useTransform(smoothScroll, [0, 0.5, 1], [0, 5, 11]);

  // =====================================================
  // CONTENIDO CENTRAL
  // =====================================================

  const titleY = useTransform(smoothScroll, [0, 0.5, 1], [0, -12, -25]);

  const titleScale = useTransform(smoothScroll, [0, 0.5, 1], [1, 0.995, 0.985]);

  const titleOpacity = useTransform(smoothScroll, [0, 0.65, 1], [1, 1, 0.72]);

  // =====================================================
  // INDICADOR DE SCROLL
  // =====================================================

  const scrollIndicatorOpacity = useTransform(
    smoothScroll,
    [0, 0.3, 0.65],
    [1, 0.5, 0],
  );

  return (
    <section
      ref={sectionRef}
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
      {/* =====================================================
          FLORES ARRIBA IZQUIERDA
      ===================================================== */}

      {/* FLOR GRANDE */}

      <motion.div
        style={{
          x: topSlowX,
          y: topSlowY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
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
            pointer-events-none
            w-40

            md:w-80
          "
        />
      </motion.div>

      {/* SEGUNDA FLOR */}

      <motion.div
        style={{
          x: topMediumX,
          y: topMediumY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.08,
          ease: "easeOut",
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
          className="
            pointer-events-none
            w-36
            -rotate-12

            md:w-72
          "
        />
      </motion.div>

      {/* TERCERA FLOR */}

      <motion.div
        style={{
          x: topSlowX,
          y: topSlowY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.14,
          ease: "easeOut",
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
          className="
            pointer-events-none
            w-32
            rotate-12

            md:w-72
          "
        />
      </motion.div>

      {/* CUARTA FLOR */}

      <motion.div
        style={{
          x: topMediumX,
          y: topMediumY,
        }}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut",
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
            pointer-events-none
            w-24
            rotate-6

            md:w-48
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA */}

      <motion.div
        style={{
          x: topFastX,
          y: topFastY,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.28,
          ease: "easeOut",
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
            pointer-events-none
            w-14
            rotate-12

            md:w-24
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA ALEJADA */}

      <motion.div
        style={{
          x: topFastX,
          y: topFastY,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.36,
          ease: "easeOut",
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
            pointer-events-none
            w-11
            -rotate-6

            md:w-20
          "
        />
      </motion.div>

      {/* =====================================================
          FLORES ABAJO DERECHA
      ===================================================== */}

      {/* FLOR GRANDE */}

      <motion.div
        style={{
          x: bottomSlowX,
          y: bottomSlowY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          absolute
          -bottom-10
          -right-10

          md:-bottom-20
          md:-right-16
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={420}
          height={420}
          priority
          className="
            pointer-events-none
            w-40
            rotate-12

            md:w-80
          "
        />
      </motion.div>

      {/* SEGUNDA FLOR */}

      <motion.div
        style={{
          x: bottomMediumX,
          y: bottomMediumY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.08,
          ease: "easeOut",
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
            pointer-events-none
            w-36
            -rotate-12

            md:w-72
          "
        />
      </motion.div>

      {/* TERCERA FLOR */}

      <motion.div
        style={{
          x: bottomSlowX,
          y: bottomSlowY,
        }}
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.14,
          ease: "easeOut",
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
            pointer-events-none
            w-32
            rotate-6

            md:w-72
          "
        />
      </motion.div>

      {/* CUARTA FLOR */}

      <motion.div
        style={{
          x: bottomMediumX,
          y: bottomMediumY,
        }}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut",
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
            pointer-events-none
            w-24
            -rotate-6

            md:w-44
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA */}

      <motion.div
        style={{
          x: bottomFastX,
          y: bottomFastY,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.28,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-36
          right-20

          md:bottom-44
          md:right-40
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={140}
          height={140}
          className="
            pointer-events-none
            w-14
            rotate-12

            md:w-24
          "
        />
      </motion.div>

      {/* FLOR PEQUEÑA ALEJADA */}

      <motion.div
        style={{
          x: bottomFastX,
          y: bottomFastY,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.85,
          delay: 0.36,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-48
          right-10

          md:bottom-60
          md:right-52
        "
      >
        <Image
          src="/amankay.png"
          alt=""
          width={120}
          height={120}
          className="
            pointer-events-none
            w-11
            -rotate-6

            md:w-20
          "
        />
      </motion.div>

      {/* =====================================================
          CONTENIDO CENTRAL
      ===================================================== */}

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
            font-unifraktur
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

        {/* =====================================================
            NOMBRES
        ===================================================== */}

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
    </section>
  );
}
