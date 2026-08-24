"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function RSVPSecond() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    mass: 0.4,
  });

  // =====================================================
  // MOVIMIENTOS SUAVES
  // =====================================================

  const borderY = useTransform(smoothScroll, [0, 0.5, 1], [-5, 0, 5]);

  const chandelierY = useTransform(smoothScroll, [0, 0.5, 1], [-12, 0, 12]);

  const chairY = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  const sealY = useTransform(smoothScroll, [0, 0.5, 1], [-8, 0, 8]);

  const bannerY = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  const titleY = useTransform(smoothScroll, [0, 0.5, 1], [8, 0, -8]);

  const textY = useTransform(smoothScroll, [0, 0.5, 1], [6, 0, -6]);

  const buttonY = useTransform(smoothScroll, [0, 0.5, 1], [5, 0, -5]);

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="
        relative
        min-h-[1050px]
        overflow-hidden
        bg-background
        text-text

        md:min-h-screen
        md:px-14
        md:py-24
      "
    >
      {/* =====================================================
          CENEFA IZQUIERDA
      ===================================================== */}

      <motion.div
        style={{ y: borderY }}
        initial={{
          opacity: 0,
          x: -25,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-[2%]
          left-0
          z-[2]

          h-[104%]
          w-[72px]

          sm:w-[80px]

          md:top-0
          md:h-full
          md:w-[80px]

          lg:w-[200px]
        "
      >
        <Image
          src="/decoracion.png"
          alt=""
          fill
          sizes="(max-width: 768px) 80px, 200px"
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =====================================================
          CANDELABRO
      ===================================================== */}

      <motion.div
        style={{ y: chandelierY }}
        initial={{
          opacity: 0,
          y: -20,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
    pointer-events-none
    absolute
    z-[1]

    left-[24%]
    top-[3%]
    w-[155px]

    sm:left-[25%]
    sm:w-[175px]

    md:left-[120px]
    md:top-[14%]
    md:w-[220px]

    lg:left-[230px]
    lg:w-[270px]
  "
      >
        <Image
          src="/luz.png"
          alt=""
          width={400}
          height={500}
          className="h-auto w-full object-contain"
        />
      </motion.div>
      {/* =====================================================
    SILLA
===================================================== */}

      <motion.div
        style={{ y: chairY }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
    pointer-events-none
    absolute
    z-[1]

    bottom-[2%]
    right-[7%]
    w-[155px]

    sm:right-[9%]
    sm:w-[175px]

    md:bottom-[4%]
    md:left-[120px]
    md:right-auto
    md:w-[190px]

    lg:left-[230px]
    lg:w-[230px]
  "
      >
        <Image
          src="/sillon3.png"
          alt=""
          width={350}
          height={500}
          className="
      h-auto
      w-full
      object-contain
    "
        />
      </motion.div>

      {/* =====================================================
          SELLO
      ===================================================== */}

      <motion.div
        style={{ y: sealY }}
        initial={{
          opacity: 0,
          scale: 0.88,
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
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          z-[3]

          bottom-[4%]
          right-[2%]
          w-[78px]

          sm:right-[4%]
          sm:w-[90px]

          md:bottom-[7%]
          md:right-[6%]
          md:w-[145px]

          lg:w-[170px]
        "
      >
        <Image
          src="/sello.png"
          alt=""
          width={300}
          height={300}
          className="
            h-auto
            w-full
            object-contain
          "
        />
      </motion.div>

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div
        className="
          relative
          z-10

          flex
          min-h-[1050px]
          w-full
          flex-col
          items-center

          pl-[82px]
          pr-4
          pt-[265px]

          text-center

          md:mx-auto
          md:min-h-[calc(100vh-12rem)]
          md:max-w-5xl
          md:justify-center
          md:pl-[65px]
          md:pr-0
          md:pt-0
        "
      >
        {/* =====================================================
            RSVP
        ===================================================== */}

        <motion.div
          style={{ y: bannerY }}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            mb-6
            w-[96%]
            max-w-[310px]

            sm:max-w-[340px]

            md:mb-10
            md:w-[430px]
            md:max-w-none

            lg:w-[500px]
          "
        >
          <Image
            src="/rsvp.png"
            alt="RSVP"
            width={700}
            height={300}
            priority
            className="
              h-auto
              w-full
              object-contain
              mt-20
            "
          />
        </motion.div>

        {/* =====================================================
            PRIMER BLOQUE
        ===================================================== */}

        <motion.div
          style={{ y: titleY }}
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            max-w-[340px]

            md:max-w-[760px]
          "
        >
          <h2
            className="
              font-engravers

              text-[25px]
              leading-[0.95]
              tracking-[-0.04em]

              min-[400px]:text-[28px]

              sm:text-[32px]

              md:text-[47px]
              md:leading-[1]

              lg:text-[54px]
            "
          >
            Nosotros ya dimos el “Sí”
          </h2>

          <p
            className="
              mt-3
              font-grenze
              font-semibold

              text-[18px]
              leading-[1.04]

              min-[400px]:text-[20px]

              sm:text-[22px]

              md:text-[31px]
              md:leading-[1.05]

              lg:text-[35px]
            "
          >
            Ahora falta que vos nos confirmes tu asistencia.
            <br />
            Por favor hacelo antes del 01.11.26
          </p>
        </motion.div>

        {/* =====================================================
            SEGUNDO BLOQUE
        ===================================================== */}

        <motion.div
          style={{ y: textY }}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mt-11
            w-full
            max-w-[350px]

            md:mt-14
            md:max-w-[800px]
          "
        >
          <p
            className="
              font-grenze
              font-semibold

              text-[18px]
              leading-[1.04]

              min-[400px]:text-[20px]

              sm:text-[22px]

              md:text-[30px]
              md:leading-[1.08]

              lg:text-[34px]
            "
          >
            Si para ese entonces no avisaste,
            <br />
            porfavor traete vianda y una silla.
            <br />
            No, mentira, solo avisanos asi podemos tener todo{" "}
            <br className="hidden md:block" />
            preparado con tiempo.
          </p>
        </motion.div>

        {/* =====================================================
            BOTÓN
        ===================================================== */}

        {/* <motion.a
          style={{ y: buttonY }}
          href="#confirmar"
          initial={{
            opacity: 0,
            scale: 0.96,
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
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mt-9

            border
            border-[#e8d48b]

            px-6
            py-2.5

            font-grenze
            text-[17px]
            tracking-wide
            text-[#e8d48b]

            transition-colors

            hover:bg-[#e8d48b]
            hover:text-[#661414]

            md:mt-12
            md:px-10
            md:py-3
            md:text-xl
          "
        >
          Confirmar asistencia
        </motion.a> */}
      </div>
    </section>
  );
}
