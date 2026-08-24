"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function RSVPSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // =====================================================
  // SCROLL SUAVIZADO
  // =====================================================

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.45,
  });

  // =====================================================
  // MARCO
  // =====================================================

  const frameX = useTransform(smoothScroll, [0, 0.5, 1], [-12, 0, 12]);

  const frameY = useTransform(smoothScroll, [0, 0.5, 1], [12, 0, -12]);

  // =====================================================
  // LLAVES
  // =====================================================

  const keysX = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  const keysY = useTransform(smoothScroll, [0, 0.5, 1], [-10, 0, 10]);

  // =====================================================
  // ESTRELLAS
  // =====================================================

  const starsX = useTransform(smoothScroll, [0, 0.5, 1], [8, 0, -8]);

  const starsY = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  // =====================================================
  // CONTENIDO CENTRAL
  // =====================================================

  const contentY = useTransform(smoothScroll, [0, 0.5, 1], [12, 0, -12]);

  const contentScale = useTransform(smoothScroll, [0, 0.5, 1], [0.99, 1, 0.99]);

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="
    relative
    min-h-[82vh]
    overflow-hidden
    bg-background
    -mt-40

    px-4
    pb-8
    pt-2

    sm:min-h-[86vh]
    sm:px-6
    sm:py-10

    md:min-h-screen
    md:px-10
    md:py-16
  "
    >
      {/* =====================================================
          LLAVE SUPERIOR
      ===================================================== */}

      <motion.div
        style={{
          x: keysX,
          y: keysY,
        }}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          opacity: {
            duration: 0.8,
            ease: "easeOut",
          },
          scale: {
            duration: 0.8,
            ease: "easeOut",
          },
        }}
        className="
  absolute
  right-[12%]
  top-[1.5%]
  z-10

  sm:right-[14%]
  sm:top-[4%]

  md:right-[19%]
  md:top-[6%]
"
      >
        <Image
          src="/llave1.png"
          alt=""
          width={500}
          height={220}
          className="
            pointer-events-none
            h-auto
            w-28

            sm:w-36

            md:w-72
          "
        />
      </motion.div>

      {/* =====================================================
          LLAVE INFERIOR
      ===================================================== */}

      <motion.div
        style={{
          x: keysX,
          y: keysY,
        }}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.08,
            ease: "easeOut",
          },
          scale: {
            duration: 0.8,
            delay: 0.08,
            ease: "easeOut",
          },
        }}
        className="
  absolute
  right-[4%]
  top-[9%]
  z-10

  sm:right-[5%]
  sm:top-[13%]

  md:right-[8%]
  md:top-[17%]
"
      >
        <Image
          src="/llave2.png"
          alt=""
          width={500}
          height={220}
          className="
            pointer-events-none
            h-auto
            w-32

            sm:w-40

            md:w-72
          "
        />
      </motion.div>

      {/* =====================================================
          MARCO IZQUIERDO
      ===================================================== */}

      <motion.div
        style={{
          x: frameX,
          y: frameY,
        }}
        initial={{
          opacity: 0,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.12,
        }}
        transition={{
          opacity: {
            duration: 0.9,
            ease: "easeOut",
          },
          scale: {
            duration: 0.9,
            ease: "easeOut",
          },
        }}
        className="
          absolute
          bottom-[5%]
          left-4
          z-20
          mb-20

          sm:bottom-[4%]
          sm:left-[4%]

          md:bottom-[4%]
          md:left-[1%]
        "
      >
        <div className="relative">
          <Image
            src="/cuadro.png"
            alt=""
            width={500}
            height={700}
            className="
              pointer-events-none
              h-auto
              w-32

              sm:w-40

              md:w-72
            "
          />

          {/* =====================================================
              A & L
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                translate-y-[35%]
                font-engravers
                text-xl
                text-text

                sm:translate-y-[30%]
                sm:text-2xl

                md:translate-y-[25%]
                md:text-5xl
              "
            >
              A &amp; L
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          ESTRELLAS DERECHA
      ===================================================== */}

      <motion.div
        style={{
          x: starsX,
          y: starsY,
        }}
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          opacity: {
            duration: 0.9,
            ease: "easeOut",
          },
          scale: {
            duration: 0.9,
            ease: "easeOut",
          },
        }}
        className="
          absolute
          bottom-[8%]
          right-5
          z-10
          mb-20

          sm:bottom-[7%]
          sm:right-[4%]

          md:bottom-[8%]
          md:right-[4%]
        "
      >
        <Image
          src="/stars1.png"
          alt=""
          width={500}
          height={500}
          className="
            pointer-events-none
            h-auto
            w-24

            sm:w-32

            md:w-64
          "
        />
      </motion.div>

      {/* =====================================================
          CONTENIDO CENTRAL
      ===================================================== */}

      <motion.div
        style={{
          y: contentY,
          scale: contentScale,
        }}
        className="
          relative
          z-30

          mx-auto
          flex
          min-h-[72vh]
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          -mt-20

          px-3
          pb-20
          pt-20

          text-center

          sm:min-h-[76vh]
          sm:px-5
          sm:pb-24
          sm:pt-24

          md:min-h-[80vh]
          md:px-0
          md:pb-12
          md:pt-12
        "
      >
        {/* =====================================================
            RSVP
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            font-girassol
            text-3xl
            leading-none
            text-text

            sm:text-4xl

            md:text-7xl
          "
        >
          RSVP
        </motion.p>

        {/* =====================================================
            TEXTO FRANCÉS
        ===================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 22,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="
            mt-3
            max-w-[300px]

            font-girassol
            text-[25px]
            leading-[0.95]
            text-text

            sm:mt-4
            sm:max-w-md
            sm:text-3xl

            md:mt-5
            md:max-w-5xl
            md:text-6xl
            md:leading-[0.95]
          "
        >
          &quot;Répondez s&apos;il vous plaît&quot;
        </motion.h2>

        {/* =====================================================
            ACLARACIÓN
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-4
            max-w-[285px]

            font-grenze
            text-lg
            font-bold
            leading-tight
            text-text

            sm:mt-5
            sm:max-w-md
            sm:text-xl

            md:mt-7
            md:max-w-3xl
            md:text-4xl
          "
        >
          (En criollo, “avisanos si vas a venir”)
        </motion.p>
      </motion.div>
    </section>
  );
}
