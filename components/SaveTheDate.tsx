"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function SaveTheDate() {
  const sectionRef = useRef<HTMLElement>(null);

  /* =========================================
      SCROLL DE ESTA SECCIÓN

      0   = la sección entra desde abajo
      0.5 = la sección está en el centro
      1   = la sección sale por arriba

      Al volver a subir, todos estos valores
      recorren el camino inverso automáticamente.
  ========================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* =========================================
    MOVIMIENTOS GENERALES
========================================= */

  // IZQUIERDA
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-55, 0, 0, 45],
  );

  const leftY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [45, 0, 0, -45],
  );

  const leftRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-8, 0, 0, 8],
  );

  // IZQUIERDA MÁS FUERTE
  const leftFastX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-90, 0, 0, 70],
  );

  const leftFastY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [70, 0, 0, -70],
  );

  /* =========================================
    DERECHA
========================================= */

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [55, 0, 0, -45],
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [45, 0, 0, -45],
  );

  const rightRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [8, 0, 0, -8],
  );

  const rightFastX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [90, 0, 0, -70],
  );

  const rightFastY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [70, 0, 0, -70],
  );

  /* =========================================
    DECORACIONES SUPERIORES
========================================= */

  const topY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-30, 0, 0, 80]);

  const topFastY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-60, 0, 0, 120],
  );

  /* =========================================
    DECORACIONES INFERIORES
========================================= */

  const bottomY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [90, 0, 0, -80],
  );

  const bottomFastY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [130, 0, 0, -110],
  );

  /* =========================================
    CONTENIDO CENTRAL
========================================= */

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [65, 0, 0, -65],
  );

  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.97, 1, 1, 0.97],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.7, 0.8, 1],
    [0.35, 0.85, 1, 1, 0.85, 0.35],
  );

  /* =========================================
    TICKET
========================================= */

  const ticketY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [90, 0, 0, -90],
  );

  const ticketRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [-2, 0, 0, 2],
  );

  const ticketScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.95],
  );

  return (
    <section
      ref={sectionRef}
      id="fecha"
      className="relative min-h-screen overflow-hidden bg-background px-3 py-12 md:px-8 md:py-24"
    >
      {/* =========================================
          DECORACIÓN SUPERIOR
      ========================================= */}

      <motion.div
        style={{
          y: topY,
          x: leftX,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          left-20
          -top-24
          z-20

          md:right-250
          md:left-auto
          md:-top-50
        "
      >
        <Image
          src="/deco10.png"
          alt=""
          width={120}
          height={320}
          className="
            w-36
            pointer-events-none

            md:w-92
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: topFastY,
          x: leftFastX,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="
          absolute
          left-[12%]
          -top-6
          z-20

          md:left-[12%]
          md:-top-2
        "
      >
        <Image
          src="/deco2.png"
          alt=""
          width={380}
          height={380}
          className="
            w-28
            rotate-6
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: topY,
          x: leftX,
          rotate: rightRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="
          absolute
          left-[38%]
          -top-20
          z-20

          md:left-[31%]
          md:-top-30
        "
      >
        <Image
          src="/deco9.png"
          alt=""
          width={300}
          height={300}
          className="
            w-32
            -rotate-3
            pointer-events-none

            md:w-100
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: topFastY,
          x: rightX,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="
          absolute
          -right-8
          -top-24
          z-20

          md:right-[10%]
          md:-top-90
        "
      >
        <Image
          src="/deco6.png"
          alt=""
          width={280}
          height={280}
          className="
            w-32
            rotate-270
            pointer-events-none

            md:w-92
          "
        />
      </motion.div>

      {/* =========================================
          CORAZÓN SUPERIOR DERECHO
      ========================================= */}

      <motion.div
        style={{
          y: topY,
          x: rightFastX,
          rotate: rightRotate,
        }}
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 100,
        }}
        className="
          absolute
          right-1
          top-2
          z-30

          md:right-10
          md:top-6
        "
      >
        <Image
          src="/deco5.png"
          alt=""
          width={220}
          height={220}
          className="
            w-24
            rotate-12
            pointer-events-none

            md:w-40
          "
        />
      </motion.div>

      {/* =========================================
          DECORACIÓN IZQUIERDA
      ========================================= */}

      <motion.div
        style={{
          x: leftFastX,
          y: leftY,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -left-8
          top-[0%]
          z-20

          md:left-0
          md:top-0
        "
      >
        <Image
          src="/deco8.png"
          alt=""
          width={260}
          height={260}
          className="
            w-32
            -rotate-180
            pointer-events-none

            md:w-72
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: leftX,
          y: leftY,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -left-19
          top-[16%]
          z-20

          md:-left-22
          md:top-[34%]
        "
      >
        <Image
          src="/deco1.png"
          alt=""
          width={280}
          height={280}
          className="
            w-28
            rotate-140
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: leftFastX,
          y: leftFastY,
          rotate: rightRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="
          absolute
          -left-19
          top-[26%]
          z-10

          md:-left-22
          md:top-[34%]
        "
      >
        <Image
          src="/deco6.png"
          alt=""
          width={280}
          height={280}
          className="
            w-32
            rotate-170
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: leftFastX,
          y: bottomY,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          left-0
          top-[83%]
          z-30

          md:left-2
          md:top-[60%]
        "
      >
        <Image
          src="/deco3.png"
          alt=""
          width={220}
          height={220}
          className="
            w-24
            -rotate-12
            pointer-events-none

            md:w-70
          "
        />
      </motion.div>

      {/* =========================================
          DECORACIÓN DERECHA
      ========================================= */}

      <motion.div
        style={{
          x: rightFastX,
          y: rightY,
          rotate: rightRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -right-14
          top-[10%]
          z-10

          md:-right-40
          md:top-[12%]
        "
      >
        <Image
          src="/deco9.png"
          alt=""
          width={280}
          height={280}
          className="
            w-28
            -rotate-1
            pointer-events-none

            md:w-96
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: rightX,
          y: rightFastY,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="
          absolute
          -right-14
          top-[19%]
          z-0

          md:-right-40
          md:top-[12%]
        "
      >
        <Image
          src="/deco2.png"
          alt=""
          width={280}
          height={280}
          className="
            w-28
            -rotate-1
            pointer-events-none

            md:w-96
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: rightFastX,
          y: rightY,
          rotate: rightRotate,
        }}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -right-16
          top-[28%]
          z-20

          md:-right-40
          md:top-[22%]
        "
      >
        <Image
          src="/deco11.png"
          alt=""
          width={280}
          height={280}
          className="
            w-32
            pointer-events-none

            md:w-96
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: rightX,
          y: rightY,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -right-10
          top-[52%]
          z-20

          md:right-[-6%]
          md:top-[55%]
        "
      >
        <Image
          src="/deco10.png"
          alt=""
          width={280}
          height={280}
          className="
            w-28
            -rotate-6
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: rightFastX,
          y: bottomY,
          rotate: rightRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -right-19
          top-[70%]
          z-20

          md:-right-10
          md:bottom-8
          md:top-auto
        "
      >
        <Image
          src="/deco1.png"
          alt=""
          width={280}
          height={280}
          className="
            w-28
            -rotate-6
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      {/* =========================================
          DECORACIÓN INFERIOR
      ========================================= */}

      <motion.div
        style={{
          y: bottomY,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.9 }}
        className="
          absolute
          left-[-45%]
          bottom-26
          z-20
          h-[135px]
          w-full
          rotate-90

          md:left-0
          md:bottom-0
          md:h-[230px]
          md:rotate-0

          lg:h-[280px]
        "
      >
        <Image
          src="/deco7.png"
          alt=""
          width={1600}
          height={500}
          className="
            h-full
            w-full
            object-cover
            object-top
            pointer-events-none
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: bottomFastY,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.9 }}
        className="
          absolute
          left-0
          -bottom-11
          z-0
          h-[145px]
          w-full

          md:-bottom-18
          md:h-[230px]

          lg:h-[280px]
        "
      >
        <Image
          src="/deco7.png"
          alt=""
          width={1600}
          height={500}
          className="
            h-full
            w-full
            object-cover
            object-top
            pointer-events-none
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: bottomFastY,
          x: rightFastX,
          rotate: rightRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          -right-3
          -bottom-4
          z-20

          md:-right-10
          md:-bottom-8
        "
      >
        <Image
          src="/deco8.png"
          alt=""
          width={280}
          height={280}
          className="
            w-24
            -rotate-6
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          y: bottomY,
          x: rightX,
          rotate: leftRotate,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          right-[-10%]
          top-[58%]
          z-20

          md:right-[-6%]
          md:top-[55%]
        "
      >
        <Image
          src="/deco10.png"
          alt=""
          width={280}
          height={280}
          className="
            w-24
            -rotate-6
            pointer-events-none

            md:w-56
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
          opacity: contentOpacity,
        }}
        className="
          relative
          z-100
          mx-auto
          flex
          min-h-[82vh]
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* ESTAS INVITAD@ */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            text-2xl
            text-text

            md:text-5xl
          "
        >
          Estas invitad@
        </motion.p>

        {/* =========================================
            TICKET COMPLETO
        ========================================= */}

        <motion.div
          style={{
            y: ticketY,
            rotate: ticketRotate,
            scale: ticketScale,
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-8
            w-full
            max-w-4xl

            md:mt-14
          "
        >
          {/* BORDE EXTERIOR */}

          <div className="border-[6px] border-text bg-background p-1.5 md:border-[12px] md:p-3">
            <div className="flex min-h-[150px] md:min-h-[260px]">
              {/* =========================================
                  TICKET PRINCIPAL
              ========================================= */}

              <div className="relative min-w-0 flex-1 overflow-hidden">
                <Image
                  src="/ticket.png"
                  alt=""
                  width={1200}
                  height={500}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-fill
                    pointer-events-none
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[150px]
                    flex-col
                    items-center
                    justify-center
                    px-2
                    py-5

                    md:min-h-[260px]
                    md:px-14
                    md:py-12
                  "
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="
                      font-engravers
                      text-lg
                      text-background

                      sm:text-xl
                      md:text-5xl
                    "
                  >
                    Save the date
                  </motion.p>

                  {/* LÍNEA */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                    }}
                    className="
                      my-2
                      flex
                      w-[82%]
                      items-center

                      md:my-6
                    "
                  >
                    <div className="h-px flex-1 bg-background/70 md:h-[2px]" />

                    <span className="mx-2 font-engravers text-xs text-background md:mx-3 md:text-2xl">
                      ✦
                    </span>

                    <div className="h-px flex-1 bg-background/70 md:h-[2px]" />
                  </motion.div>

                  {/* FECHA */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="
                      font-engravers
                      text-[13px]
                      tracking-[0.07em]
                      text-background

                      sm:text-base

                      md:text-4xl
                      md:tracking-[0.12em]
                    "
                  >
                    22 . 01 . 2027
                  </motion.p>
                </div>
              </div>

              {/* =========================================
                  SEPARADOR BORDÓ
              ========================================= */}

              <div className="relative z-20 flex w-8 shrink-0 items-center justify-center bg-background md:w-20">
                {/* CÍRCULO SUPERIOR */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-5
                    w-5
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-text

                    md:h-12
                    md:w-12
                  "
                />

                {/* PUNTOS */}

                <div className="flex h-[68%] flex-col items-center justify-between md:h-[72%]">
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                  <span className="h-[2px] w-[2px] rounded-full bg-text md:h-1 md:w-1" />
                </div>

                {/* CÍRCULO INFERIOR */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-5
                    w-5
                    -translate-x-1/2
                    translate-y-1/2
                    rounded-full
                    bg-text

                    md:h-12
                    md:w-12
                  "
                />
              </div>

              {/* =========================================
                  ESPACIO BORDÓ
              ========================================= */}

              <div className="w-2 shrink-0 bg-background md:w-5" />

              {/* =========================================
                  WEDDING TICKET
              ========================================= */}

              <div
                className="
                  flex
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  bg-text

                  sm:w-[70px]
                  md:w-[145px]
                "
              >
                <p
                  className="
                    rotate-180
                    font-engravers
                    text-[9px]
                    leading-tight
                    text-background
                    [writing-mode:vertical-rl]

                    sm:text-[11px]
                    md:text-2xl
                  "
                >
                  wedding ticket
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            TEXTO FINAL
        ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            mt-7
            max-w-[300px]
            font-grenze
            text-xl
            leading-tight
            text-text

            sm:max-w-sm

            md:mt-12
            md:max-w-2xl
            md:text-4xl
          "
        >
          Celebramos nuestro amor y
          <br />
          nos encantaría que nos acompañes
        </motion.p>
      </motion.div>
    </section>
  );
}
