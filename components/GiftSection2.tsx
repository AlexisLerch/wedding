"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function GiftsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText("l.cristal2");

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar el alias:", error);
    }
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* =========================================
     PARALLAX SUAVE
     ========================================= */

  const textYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]);

  const giftsYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -12]);

  const collageYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [16, 0, -16]);

  const textY = useSpring(textYRaw, {
    stiffness: 80,
    damping: 24,
  });

  const giftsY = useSpring(giftsYRaw, {
    stiffness: 75,
    damping: 24,
  });

  const collageY = useSpring(collageYRaw, {
    stiffness: 75,
    damping: 24,
  });

  return (
    <section
      ref={sectionRef}
      id="regalos"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#661414]
        text-white
      "
    >
      {/* =====================================================
          REGALOS - ARRIBA IZQUIERDA
      ===================================================== */}

      <motion.div
        style={{ y: giftsY }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-5
          top-6
          z-10

          md:left-[7%]
          md:top-[9%]
        "
      >
        <Image
          src="/gift2.png"
          alt=""
          width={420}
          height={340}
          priority
          className="
            h-auto
            w-[145px]

            sm:w-[170px]

            md:w-[220px]

            lg:w-[250px]
          "
        />
      </motion.div>

      <motion.div
        style={{ y: giftsY }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-14
          top-11
          z-10

          md:left-[11%]
          md:top-[14%]
        "
      >
        <Image
          src="/gift.png"
          alt=""
          width={420}
          height={340}
          priority
          className="
            h-auto
            w-[145px]

            sm:w-[150px]

            md:w-[200px]

            lg:w-[230px]
          "
        />
      </motion.div>
      {/* =====================================================
    GATO - ARRIBA DERECHA
===================================================== */}

      <motion.div
        style={{ y: giftsY }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
    absolute
    right-[-2%]
    top-[205px]
    z-10

    w-[145px]

    border-[3px]
    border-[#bcbcb5]
    bg-[#c5c5bd]

    sm:right-6
    sm:top-[135px]
    sm:w-[175px]

    md:right-[7%]
    md:top-[24%]
    md:w-[240px]

    lg:right-[8%]
    lg:top-[25%]
    lg:w-[280px]
  "
      >
        {/* BARRA DE VENTANA */}
        <div
          className="
      flex
      h-[18px]
      items-center
      gap-[3px]
      bg-[#c5c5bd]
      px-[3px]

      md:h-[22px]
      md:px-[4px]
    "
        >
          <span
            className="
        flex
        h-[12px]
        w-[12px]
        items-center
        justify-center
        border
        border-[#888]
        bg-[#deded8]
        text-[9px]
        leading-none
        text-[#777]

        md:h-[14px]
        md:w-[14px]
        md:text-[10px]
      "
          >
            ×
          </span>

          <span
            className="
        flex
        h-[12px]
        w-[12px]
        items-center
        justify-center
        border
        border-[#888]
        bg-[#deded8]
        text-[8px]
        leading-none
        text-[#777]

        md:h-[14px]
        md:w-[14px]
      "
          >
            □
          </span>

          <span
            className="
        flex
        h-[12px]
        w-[12px]
        items-center
        justify-center
        border
        border-[#888]
        bg-[#deded8]
        text-[8px]
        leading-none
        text-[#777]

        md:h-[14px]
        md:w-[14px]
      "
          >
            —
          </span>
        </div>

        {/* FOTO */}
        <div
          className="
      relative
      aspect-[1.55/1]
      w-full
      overflow-hidden
      border-t-[2px]
      border-[#9b9b95]
    "
        >
          <Image
            src="/gatito.jpg"
            alt="Gatito"
            fill
            sizes="(max-width: 640px) 145px, (max-width: 768px) 175px, 280px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* =====================================================
          TEXTO CENTRAL
      ===================================================== */}

      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[950px]
          flex-col
          items-center
          justify-center
          px-7
          pb-[240px]
          pt-[180px]
          text-center

          sm:px-10

          md:pb-24
          md:pt-24

          lg:px-8
        "
      >
        {/* TÍTULO */}

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.65,
            delay: 0.05,
          }}
          className="
            font-engravers
            text-[26px]
            leading-none
            tracking-[0.02em]

            sm:text-[30px]

            md:text-[38px]

            lg:text-[42px]
          "
        >
          REGALOS
        </motion.h2>

        {/* TEXTO PRINCIPAL */}

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-3
            max-w-[760px]
            font-grenze
            text-[24px]
            font-semibold
            leading-[1.03]

            sm:text-[27px]

            md:mt-4
            md:text-[31px]

            lg:text-[34px]
          "
        >
          Tu presencia es lo más importante,
          <br className="hidden sm:block" />
          pero si deseas hacernos un regalo podrías{" "}
          <br className="hidden md:block" />
          ayudarnos con dinerillo.
        </motion.p>

        {/* DATOS */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-7
            flex
            flex-col
            items-center
            gap-[2px]
            text-center

            md:mt-8
          "
        >
          <p
            className="
              font-grenze
              text-[19px]
              font-semibold
              leading-tight

              sm:text-[21px]

              md:text-[23px]
            "
          >
            Transferencia bancaria / Mercadopago
          </p>

          {/* ALIAS COPIABLE */}

          <div
            className="
              mt-1
              flex
              items-center
              justify-center
              gap-2
              font-grenze
              text-[19px]
              font-semibold
              leading-tight

              sm:text-[21px]

              md:text-[23px]
            "
          >
            <span>Alias:</span>

            <button
              type="button"
              onClick={copyAlias}
              aria-label="Copiar alias l.cristal2"
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
              <span>l.cristal2</span>

              {copied ? (
                <FiCheck
                  className="
                    text-[17px]
                    sm:text-[19px]
                    md:text-[21px]
                  "
                />
              ) : (
                <FiCopy
                  className="
                    text-[17px]
                    transition-transform
                    duration-200

                    group-hover:scale-110

                    sm:text-[19px]
                    md:text-[21px]
                  "
                />
              )}
            </button>
          </div>

          <p
            className="
              font-grenze
              text-[18px]
              font-medium
              leading-tight

              sm:text-[20px]

              md:text-[22px]
            "
          >
            CVU: 0000003100097478095230
          </p>

          <p
            className="
              font-grenze
              text-[18px]
              font-medium
              leading-tight

              sm:text-[20px]

              md:text-[22px]
            "
          >
            Nombre: Lucila Celeste Cristaldo
          </p>
        </motion.div>
      </motion.div>

      {/* =====================================================
          COLLAGE ABAJO DERECHA
      ===================================================== */}

      <motion.div
        style={{ y: collageY }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 0.9,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-3
          right-3
          z-10
          mr-10

          h-[215px]
          w-[205px]

          sm:h-[250px]
          sm:w-[240px]

          md:bottom-[3%]
          md:right-[4%]
          md:h-[300px]
          md:w-[300px]

          lg:h-[340px]
          lg:w-[340px]
        "
      >
        {/* TARJETA DECORATIVA */}

        <Image
          src="/decoracion2.png"
          alt=""
          width={500}
          height={600}
          className="
            absolute
            bottom-0
            right-[-40]
            h-auto
            w-[135px]
            object-contain

            sm:w-[160px]

            md:bottom-[-10]
            md:right-[-30]

            md:w-[200px]

            lg:right-[-30]
            lg:w-[225px]
          "
        />

        {/* FOTO BLANCO Y NEGRO */}

        <Image
          src="/gift3.png"
          alt=""
          width={450}
          height={350}
          className="
            absolute
            bottom-[10px]
            left-[-20]
            z-10
            h-auto
            w-[135px]
            object-contain

            sm:w-[155px]

            md:bottom-[18px]
            md:w-[185px]

            lg:w-[205px]
          "
        />

        {/* SELLO */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.55,
            delay: 0.35,
          }}
          className="
            absolute
            left-[44%]
            top-[15%]
            z-20

            md:left-[42%]
            md:top-[20%]

            lg:top-[20%]
          "
        >
          <Image
            src="/sello.png"
            alt=""
            width={150}
            height={150}
            className="
              h-auto
              w-[55px]

              sm:w-[62px]

              md:w-[75px]

              lg:w-[82px]
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
