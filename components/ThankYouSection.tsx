"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ThankYouSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Movimiento MUY leve y solamente cuando hacés scroll
  const starsY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const pinY = useTransform(scrollYProgress, [0, 1], [7, -7]);
  const heartY = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const salchiY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  const pillarY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const flowersY = useTransform(scrollYProgress, [0, 1], [-7, 7]);

  const collar1Y = useTransform(scrollYProgress, [0, 1], [6, -6]);
  const collar2Y = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section
      ref={sectionRef}
      id="gracias"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        px-4
        py-10

        md:px-10
        md:py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          min-h-[860px]
          w-full
          max-w-[1500px]

          md:min-h-[720px]
        "
      >
        {/* ========================================
            ESTRELLAS
        ========================================= */}

        <motion.div
          style={{ y: starsY }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -left-[10%]
            top-[1%]
            z-10
            w-[62%]

            sm:-left-[10%]
            sm:w-[48%]

            md:left-[-5%]
            md:-top-[4%]
            md:w-[22%]
          "
        >
          <Image
            src="/starss.png"
            alt=""
            width={700}
            height={700}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            ALFILER
        ========================================= */}

        <motion.div
          style={{ y: pinY }}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            absolute
            right-[20%]
            top-[15%]
            z-30
            w-[37%]

            sm:right-[19%]
            sm:w-[13%]

            md:right-[11%]
            md:top-[12%]
            md:w-[15%]
          "
        >
          <Image
            src="/pinche.png"
            alt=""
            width={200}
            height={400}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            CORAZÓN ROJO
        ========================================= */}

        <motion.div
          style={{ y: heartY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -right-[22%]
            top-[2%]
            z-[25]
            w-[65%]

            sm:-right-[7%]
            sm:w-[42%]

            md:right-[-10%]
            md:top-[-10%]
            md:w-[25%]
          "
        >
          <Image
            src="/corazon.png"
            alt=""
            width={600}
            height={600}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            TARJETA SALCHI
        ========================================= */}

        <motion.div
          style={{ y: salchiY }}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.85,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            right-[-6%]
            top-[19%]
            z-20
            w-[51%]

            sm:right-[1%]
            sm:w-[40%]

            md:right-[2%]
            md:top-[20%]
            md:w-[18%]
          "
        >
          <Image
            src="/salchi.png"
            alt=""
            width={600}
            height={450}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            TEXTO
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            top-[48%]
            z-40
            w-[88%]
            -translate-x-1/2
            -translate-y-1/2
            text-center

            sm:w-[76%]

            md:top-[49%]
            md:w-[50%]
          "
        >
          <p
            className="
              font-grenze
              text-[25px]
              font-semibold
              leading-[1.08]
              text-white

              sm:text-[28px]

              md:text-[31px]
              md:leading-[1.12]

              lg:text-[35px]
            "
          >
            Gracias por ser parte de nuestra vida
          </p>

          <p
            className="
              mt-4
              font-grenze
              text-[23px]
              font-semibold
              leading-[1.08]
              text-white

              sm:text-[26px]

              md:mt-5
              md:text-[30px]

              lg:text-[34px]
            "
          >
            ¡Te esperamos para compartir este día tan especial!
          </p>
        </motion.div>

        {/* ========================================
            PILAR
        ========================================= */}

        <motion.div
          style={{ y: pillarY }}
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -bottom-[11%]
            -left-[12%]
            z-20
            w-[52%]

            sm:-left-[8%]
            sm:w-[42%]

            md:bottom-[-43%]
            md:left-[0%]
            md:w-[25%]
          "
        >
          <Image
            src="/pilar.png"
            alt=""
            width={500}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            FLORES ARRIBA DEL PILAR
        ========================================= */}

        <motion.div
          style={{ y: flowersY }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.22,
          }}
          className="
            absolute
            bottom-[23%]
            left-[13%]
            z-30
            w-[29%]

            sm:left-[0%]
            sm:w-[21%]

            md:bottom-[32%]
            md:left-[12%]
            md:w-[12%]
          "
        >
          <Image
            src="/amankay.png"
            alt=""
            width={500}
            height={500}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            COLLAR - PARTE 1 / FLORES
        ========================================= */}

        <motion.div
          style={{ y: collar1Y }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="
            absolute
            bottom-[26%]
            left-[5%]
            z-30
            w-[25%]

            sm:left-[16%]
            sm:w-[20%]

            md:bottom-[42%]
            md:left-[11%]
            md:w-[8%]
          "
        >
          <Image
            src="/amankay.png"
            alt=""
            width={300}
            height={400}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* ========================================
            COLLAR - PARTE 2
        ========================================= */}

        <motion.div
          style={{ y: collar2Y }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            absolute
            bottom-[12%]
            left-[19%]
            z-30
            w-[25%]

            sm:left-[29%]
            sm:w-[23%]

            md:bottom-[15%]
            md:left-[17%]
            md:w-[10%]
          "
        >
          <Image
            src="/collar.png"
            alt=""
            width={300}
            height={400}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
