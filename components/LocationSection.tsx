"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* =========================================
      ANIMACIONES SCROLL
      Suaves para que en mobile no se vayan
      demasiado hacia el centro
  ========================================= */

  const leftX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [-30, 0, 0, 8],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [30, 0, 0, -8],
  );

  const topY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [-25, 0, 0, 10],
  );

  const decoRotateLeft = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [-4, 0, 0, 2],
  );

  const decoRotateRight = useTransform(
    scrollYProgress,
    [0, 0.28, 0.72, 1],
    [4, 0, 0, -2],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [35, 0, 0, -10],
  );

  const mapY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [45, 0, 0, -12],
  );

  const mapScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.75, 1],
    [0.96, 1, 1, 0.99],
  );

  return (
    <section
      ref={sectionRef}
      id="ubicacion"
      className="relative min-h-screen overflow-hidden bg-background px-4 py-14 md:px-10 md:py-24"
    >
      {/* =========================================
          DECORACIONES
      ========================================= */}

      <motion.div
        style={{
          x: leftX,
          y: topY,
          rotate: decoRotateLeft,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          absolute
          left-[7%]
          top-[2%]

          md:left-40
          md:top-20
        "
      >
        <Image
          src="/map1.png"
          alt=""
          width={300}
          height={300}
          className="
            h-auto
            w-24
            pointer-events-none

            md:w-56
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: leftX,
          y: topY,
          rotate: decoRotateRight,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          delay: 0.08,
          ease: "easeOut",
        }}
        className="
          absolute
          left-[34%]
          top-[2%]

          md:left-104
          md:top-20
        "
      >
        <Image
          src="/map2.png"
          alt=""
          width={300}
          height={300}
          className="
            h-auto
            w-20
            pointer-events-none

            md:w-30
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: leftX,
          y: topY,
          rotate: decoRotateLeft,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="
          absolute
          left-[7%]
          top-[14%]

          md:left-142
          md:top-20
        "
      >
        <Image
          src="/map3.png"
          alt=""
          width={300}
          height={300}
          className="
            h-auto
            w-20
            pointer-events-none

            md:w-28
          "
        />
      </motion.div>

      <motion.div
        style={{
          x: rightX,
          y: topY,
          rotate: decoRotateRight,
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
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="
          absolute
          right-[-4%]
          top-[-4%]

          md:right-[-4%]
          md:top-[-4%]
        "
      >
        <Image
          src="/map4.png"
          alt=""
          width={300}
          height={300}
          className="
            w-36
            pointer-events-none

            md:w-64
          "
        />
      </motion.div>

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          px-4
          pb-12
          pt-[145px]

          sm:px-6
          sm:pt-[160px]

          md:grid
          md:grid-cols-[0.85fr_1.15fr]
          md:items-center
          md:gap-16
          md:px-8
          md:pb-0
          md:pt-0
        "
      >
        {/* =========================================
            TEXTO
        ========================================= */}

        <motion.div
          style={{
            y: contentY,
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full text-left"
        >
          {/* ¿DÓNDE? */}

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
              duration: 0.65,
              ease: "easeOut",
            }}
            className="
              ml-[30%]
              font-grenze
              text-2xl
              font-extrabold
              uppercase
              leading-none
              text-black

              sm:ml-[28%]
              sm:text-3xl

              md:ml-0
              md:text-5xl
            "
          >
            ¿Dónde?
          </motion.p>

          {/* RESTAURANTE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
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
              duration: 0.75,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              ml-[29%]
              mt-4
              font-engravers
              text-[40px]
              leading-[0.88]
              text-text

              sm:ml-[22%]
              sm:text-5xl

              md:ml-0
              md:mt-8
              md:text-7xl
              md:leading-[0.95]

              lg:text-8xl
            "
          >
            Restaurante
            <span className="block">“Quinto”</span>
          </motion.h2>

          {/* DIRECCIÓN */}

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              ml-[28%]
              mt-4
              font-grenze
              text-[19px]
              font-extrabold
              uppercase
              leading-[1.05]
              text-black

              sm:ml-[22%]
              sm:text-xl

              md:ml-0
              md:mt-14
              md:max-w-md
              md:text-3xl
            "
          >
            RN40 KM 2231,
            <br />
            San Martín de los Andes,
            <br />
            Neuquén
          </motion.p>
        </motion.div>

        {/* =========================================
            MAPA
        ========================================= */}

        <motion.div
          style={{
            y: mapY,
            scale: mapScale,
          }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            mt-8
            w-full
            max-w-[420px]

            md:mt-0
            md:max-w-[850px]

            lg:max-w-[950px]
          "
        >
          <div
            className="
              relative
              aspect-square
              w-full
              p-[14%]

              md:p-[17%]
            "
          >
            {/* MARCO */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                rotate: -2,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
              className="absolute inset-0 z-20"
            >
              <Image
                src="/marco.png"
                alt=""
                fill
                className="
                  pointer-events-none
                  object-fill
                "
              />
            </motion.div>

            {/* GOOGLE MAPS */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="relative z-10 h-full w-full overflow-hidden bg-white"
            >
              <iframe
                src="https://www.google.com/maps?q=Quinto+Cocina+Familiar,+San+Martin+de+los+Andes,+Neuquen&z=13&output=embed"
                className="h-full w-full touch-auto border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
