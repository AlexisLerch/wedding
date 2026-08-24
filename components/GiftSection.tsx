"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function GiftSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  // =====================================================
  // COPIAR ALIAS
  // =====================================================

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText("alexislerch");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar el alias:", error);
    }
  };

  // =====================================================
  // SCROLL
  // =====================================================

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
  // MOVIMIENTO SUAVE AL SUBIR Y BAJAR
  // =====================================================

  const flowerY = useTransform(smoothScroll, [0, 0.5, 1], [-8, 0, 8]);

  const butterflyY = useTransform(smoothScroll, [0, 0.5, 1], [8, 0, -8]);

  const ladybugY = useTransform(smoothScroll, [0, 0.5, 1], [-6, 0, 6]);

  const textY = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  const plateY = useTransform(smoothScroll, [0, 0.5, 1], [-10, 0, 10]);

  const jarY = useTransform(smoothScroll, [0, 0.5, 1], [10, 0, -10]);

  const starY = useTransform(smoothScroll, [0, 0.5, 1], [-8, 0, 8]);

  const star2Y = useTransform(smoothScroll, [0, 0.5, 1], [6, 0, -6]);

  const bankY = useTransform(smoothScroll, [0, 0.5, 1], [6, 0, -6]);

  return (
    <section
      ref={sectionRef}
      id="regalo"
      className="
        relative
        min-h-[1080px]
        overflow-hidden
        bg-background
        text-text

        md:min-h-screen
        md:px-12
        md:py-20
      "
    >
      {/* =====================================================
          FLOR ARRIBA DERECHA
      ===================================================== */}

      <motion.div
        style={{ y: flowerY }}
        initial={{
          opacity: 0,
          x: 25,
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
          right-[-22px]
          top-[-18px]
          z-[1]

          w-[180px]

          sm:w-[210px]

          md:right-[-20px]
          md:top-[-25px]
          md:w-[220px]

          lg:w-[290px]
        "
      >
        <Image
          src="/flor1.png"
          alt=""
          width={500}
          height={400}
          className="
            h-auto
            w-full
            object-contain
          "
        />
      </motion.div>

      {/* =====================================================
          MARIPOSA
      ===================================================== */}

      <motion.div
        style={{ y: butterflyY }}
        initial={{
          opacity: 0,
          scale: 0.9,
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
          right-[20%]
          top-[4%]
          z-[3]

          w-[82px]

          sm:right-[22%]
          sm:w-[95px]

          md:right-[9%]
          md:top-[9%]
          md:w-[95px]

          lg:right-[10%]
          lg:w-[120px]
        "
      >
        <Image
          src="/mariposa.png"
          alt=""
          width={250}
          height={250}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          VAQUITA DE SAN ANTONIO
      ===================================================== */}

      <motion.div
        style={{ y: ladybugY }}
        initial={{
          opacity: 0,
          scale: 0.9,
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
          right-[4%]
          top-[12%]
          z-[4]

          w-[40px]

          sm:w-[48px]

          md:right-[2%]
          md:top-[16%]
          md:w-[44px]

          lg:right-[2%]
          lg:w-[55px]
        "
      >
        <Image
          src="/bug1.png"
          alt=""
          width={150}
          height={150}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          JARRÓN
      ===================================================== */}

      <motion.div
        style={{ y: jarY }}
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
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-10px]
          left-[-20px]
          z-[2]

          w-[135px]

          sm:w-[155px]

          md:bottom-[3%]
          md:left-[2%]
          md:w-[145px]

          lg:w-[190px]
        "
      >
        <Image
          src="/jarron.png"
          alt=""
          width={350}
          height={450}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          ESTRELLA GRANDE
      ===================================================== */}

      <motion.div
        style={{ y: starY }}
        initial={{
          opacity: 0,
          scale: 0.9,
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
          z-[0]

          bottom-[11%]
          left-[14%]
          w-[95px]

          sm:bottom-[9%]
          sm:left-[11%]
          sm:w-[110px]

          md:bottom-[8%]
          md:left-[7%]
          md:w-[155px]

          lg:w-[250px]
        "
      >
        <Image
          src="/star2.png"
          alt=""
          width={350}
          height={350}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          ESTRELLA CHICA
      ===================================================== */}

      <motion.div
        style={{ y: star2Y }}
        initial={{
          opacity: 0,
          scale: 0.9,
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
          z-[1]

          bottom-[12%]
          left-[18%]
          w-[68px]

          sm:bottom-[13%]
          sm:left-[20%]
          sm:w-[78px]

          md:bottom-[13%]
          md:left-[10%]
          md:w-[110px]

          lg:w-[150px]
        "
      >
        <Image
          src="/star3.png"
          alt=""
          width={350}
          height={350}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          PLATO 1
      ===================================================== */}

      <motion.div
        style={{ y: plateY }}
        initial={{
          opacity: 0,
          x: 25,
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
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          z-[3]

          right-[4%]
          top-[59%]
          w-[145px]

          sm:right-[6%]
          sm:w-[165px]

          md:right-[7%]
          md:top-auto
          md:bottom-[19%]
          md:w-[150px]

          lg:right-[8%]
          lg:bottom-[19%]
          lg:w-[190px]
        "
      >
        <Image
          src="/plato1.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* =====================================================
          PLATO 2
      ===================================================== */}

      <motion.div
        style={{ y: plateY }}
        initial={{
          opacity: 0,
          x: 20,
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
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          z-[1]

          right-[0%]
          top-[58%]
          w-[190px]

          sm:w-[215px]

          md:right-[7%]
          md:top-auto
          md:bottom-[18%]
          md:w-[180px]

          lg:right-[6%]
          lg:w-[250px]
        "
      >
        <Image
          src="/plato2.png"
          alt=""
          width={400}
          height={400}
          className="h-auto w-full object-contain"
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
    min-h-[1080px]
    w-full
    flex-col

    px-5
    pt-[400px]

    text-center

    md:mx-auto
    md:min-h-[calc(100vh-10rem)]
    md:max-w-[1100px]
    md:items-center
    md:justify-center
    md:px-0
    md:pt-0
  "
      >
        {/* =====================================================
      TEXTO PRINCIPAL
  ===================================================== */}

        <motion.div
          style={{ y: textY }}
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
            duration: 0.85,
            ease: "easeOut",
          }}
          className="
      mx-auto
      w-full
      max-w-[470px]

      md:max-w-[650px]

      lg:max-w-[720px]
    "
        >
          <p
            className="
        font-grenze
        font-semibold

        text-[19px]
        leading-[1.14]

        min-[400px]:text-[21px]

        sm:text-[22px]

        md:text-[27px]
        md:leading-[1.15]

        lg:text-[31px]
      "
          >
            Si bien no es obligatorio para reservar tu lugar,{" "}
            <br className="hidden md:block" />
            (porque ese lugar ya lo tenes en nuestros corazones y{" "}
            <br className="hidden md:block" />
            porque sabemos que las cosas no están fáciles),{" "}
            <br className="hidden md:block" />
            nos ayudaría mucho si podes colaborar para el{" "}
            <br className="hidden md:block" />
            cubierto con $20.000
          </p>
        </motion.div>

        {/* =====================================================
      DATOS BANCARIOS
  ===================================================== */}

        <motion.div
          style={{ y: bankY }}
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
      relative
      z-20

      mx-auto
      mt-7

      w-full
      max-w-[340px]

      text-center

      md:absolute
      md:bottom-[0%]
      md:right-[3%]
      md:mt-0
      md:w-auto
      md:max-w-none

      lg:right-[7%]
    "
        >
          <div
            className="
        font-grenze
        font-semibold

        text-[17px]
        leading-[1.2]

        sm:text-[20px]

        md:text-[18px]

        lg:text-[22px]
      "
          >
            {/* ==============================
          ALIAS + BOTÓN COPIAR
      ============================== */}

            <div className="flex items-center justify-center gap-2">
              <span>Alias:</span>

              <button
                type="button"
                onClick={copyAlias}
                aria-label="Copiar alias alexislerch"
                title="Copiar alias"
                className="
            group
            flex
            cursor-pointer
            items-center
            gap-2
            rounded-md
            bg-transparent
            px-1
            py-1
            transition-all
            duration-200

            hover:opacity-70
            active:scale-95
          "
              >
                <span>alexislerch</span>

                {copied ? (
                  <FiCheck
                    className="
                text-[17px]
                md:text-[19px]
                lg:text-[21px]
              "
                  />
                ) : (
                  <FiCopy
                    className="
                text-[17px]
                transition-transform
                duration-200

                group-hover:scale-110

                md:text-[19px]
                lg:text-[21px]
              "
                  />
                )}
              </button>
            </div>

            <p className="mt-1">
              CVU: 0000003100005661566182
              <br />
              Nombre: Alexis Damian Lerch
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
