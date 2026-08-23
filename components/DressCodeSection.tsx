"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function DressCodeSection() {
  return (
    <section
      id="dress-code"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
        px-5
        py-16
        md:px-10
        md:py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          min-h-[760px]
          w-full
          max-w-[1400px]
          md:min-h-[720px]
        "
      >
        {/* PELÍCULA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            top-[38%]
            z-10
            w-[94%]
            -translate-x-1/2

            md:left-[22%]
            md:top-[42%]
            md:w-[61%]
            md:translate-x-0
          "
        >
          <Image
            src="/movie1.png"
            alt=""
            width={1200}
            height={400}
            className="h-auto w-full object-contain"
          />

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-9
              text-center
              md:px-20
            "
          >
            <p
              className="
                font-grenze
                text-[15px]
                font-semibold
                leading-tight
                text-white
                sm:text-[18px]
                md:text-[23px]
                lg:text-[26px]
              "
            >
              <span className="font-bold">DRESS CODE:</span> Usa algo con lo que
              te sientas lind@
            </p>
          </div>
        </motion.div>

        {/* CORAZONES */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -8, 0] }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            right-[-7%]
            top-[26%]
            z-20
            w-[54%]

            sm:w-[36%]

            md:right-[7%]
            md:top-[5%]
            md:w-[24%]

            lg:w-[31%]
          "
        >
          <Image
            src="/collar2.png"
            alt=""
            width={600}
            height={500}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* REVISTA */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          animate={{ y: [0, 7, 0] }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.15,
            },
            x: {
              duration: 0.8,
              delay: 0.15,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            bottom-[10%]
            right-[4%]
            z-20
            w-[50%]

            sm:w-[42%]

            md:bottom-[1%]
            md:right-[5%]
            md:w-[20%]

            lg:w-[18%]
          "
        >
          <Image
            src="/bride.png"
            alt=""
            width={600}
            height={900}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        {/* SELLO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ y: [0, -5, 0] }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            opacity: {
              duration: 0.7,
              delay: 0.25,
            },
            scale: {
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            },
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            bottom-[7%]
            left-[30%]
            z-30
            w-[23%]

            sm:left-[26%]
            sm:w-[18%]

            md:bottom-[1%]
            md:left-auto
            md:right-[21%]
            md:w-[10%]

            lg:w-[8%]
          "
        >
          <Image
            src="/sello2.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
