"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function RSVPSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* =========================================
      MOVIMIENTOS SCROLL
  ========================================= */

  // MARCO
  const frameX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [-22, 0, 0, 6],
  );

  const frameY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [25, 0, 0, -8],
  );

  const frameRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [-2, 0, 0, 1],
  );

  // LLAVES
  const keysX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [25, 0, 0, -6],
  );

  const keysY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [-18, 0, 0, 6],
  );

  // ESTRELLAS
  const starsX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [18, 0, 0, -5],
  );

  const starsY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [25, 0, 0, -6],
  );

  // CONTENIDO
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [28, 0, 0, -8],
  );

  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [0.98, 1, 1, 0.995],
  );

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        px-4
        py-10

        sm:px-6
        sm:py-14

        md:px-10
        md:py-24
      "
    >
      {/* =========================================
          LLAVE SUPERIOR
      ========================================= */}

      <motion.div
        style={{
          x: keysX,
          y: keysY,
        }}
        initial={{
          opacity: 0,
          scale: 0.88,
          rotate: -3,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          absolute
          right-[12%]
          top-[4%]
          z-10

          sm:right-[14%]
          sm:top-[5%]

          md:right-[19%]
          md:top-[5%]
        "
      >
        <Image
          src="/llave1.png"
          alt=""
          width={500}
          height={220}
          className="
            h-auto
            w-28
            pointer-events-none

            sm:w-36
            md:w-72
          "
        />
      </motion.div>

      {/* =========================================
          LLAVE INFERIOR
      ========================================= */}

      <motion.div
        style={{
          x: keysX,
          y: keysY,
        }}
        initial={{
          opacity: 0,
          scale: 0.88,
          rotate: 4,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="
          absolute
          right-[4%]
          top-[12%]
          z-10

          sm:right-[5%]
          sm:top-[13%]

          md:right-[8%]
          md:top-[16%]
        "
      >
        <Image
          src="/llave2.png"
          alt=""
          width={500}
          height={220}
          className="
            h-auto
            w-32
            pointer-events-none

            sm:w-40
            md:w-72
          "
        />
      </motion.div>

      {/* =========================================
          MARCO IZQUIERDO
      ========================================= */}

      <motion.div
        style={{
          x: frameX,
          y: frameY,
          rotate: frameRotate,
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
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.9,
          type: "spring",
          stiffness: 70,
          damping: 18,
        }}
        className="
          absolute
          left-4
          bottom-[4%]
          z-20

          sm:left-[4%]
          sm:bottom-[3%]

          md:left-[1%]
          md:bottom-[3%]
        "
      >
        <div className="relative">
          <Image
            src="/cuadro.png"
            alt=""
            width={500}
            height={700}
            className="
              h-auto
              w-32
              pointer-events-none

              sm:w-40
              md:w-72
            "
          />

          {/* A & L */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              type: "spring",
              stiffness: 100,
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

      {/* =========================================
          ESTRELLAS DERECHA
      ========================================= */}

      <motion.div
        style={{
          x: starsX,
          y: starsY,
        }}
        initial={{
          opacity: 0,
          scale: 0.82,
          rotate: -6,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.18,
          type: "spring",
          stiffness: 65,
          damping: 15,
        }}
        className="
          absolute
          right-5
          bottom-[7%]
          z-10

          sm:right-[4%]
          sm:bottom-[6%]

          md:right-[4%]
          md:bottom-[7%]
        "
      >
        <Image
          src="/stars1.png"
          alt=""
          width={500}
          height={500}
          className="
            h-auto
            w-24
            pointer-events-none

            sm:w-32
            md:w-64
          "
        />
      </motion.div>

      {/* =========================================
          CONTENIDO CENTRAL
      ========================================= */}

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
          min-h-[92vh]
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-3
          pb-24
          pt-28
          text-center

          sm:px-5
          sm:pb-20
          sm:pt-32

          md:min-h-[85vh]
          md:px-0
          md:pb-0
          md:pt-0
        "
      >
        {/* =========================================
            RSVP
        ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            font-engravers
            text-3xl
            leading-none
            text-text

            sm:text-4xl

            md:text-7xl
          "
        >
          RSVP
        </motion.p>

        {/* =========================================
            TEXTO FRANCÉS
        ========================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-2
            max-w-[300px]
            font-engravers
            text-[25px]
            leading-[0.95]
            text-text

            sm:max-w-md
            sm:text-3xl

            md:mt-4
            md:max-w-5xl
            md:text-6xl
            md:leading-[0.95]
          "
        >
          &quot;Répondez s&apos;il vous plaît&quot;
        </motion.h2>

        {/* =========================================
            ACLARACIÓN
        ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="
            mt-3
            max-w-[285px]
            font-grenze
            text-lg
            font-bold
            leading-tight
            text-text

            sm:max-w-md
            sm:text-xl

            md:mt-5
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
