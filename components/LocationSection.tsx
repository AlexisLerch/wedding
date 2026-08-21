import Image from "next/image";

export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="relative min-h-screen overflow-hidden bg-background px-4 py-14 md:px-10 md:py-24"
    >
      {/* =========================================
          DECORACIONES
      ========================================= */}

      <Image
        src="/map1.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          left-[7%]
          top-[2%]
          h-auto
          w-24
          pointer-events-none

          md:left-40
          md:top-20
          md:w-56
        "
      />

      <Image
        src="/map2.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          left-[34%]
          top-[2%]
          h-auto
          w-20
          pointer-events-none

          md:left-104
          md:top-20
          md:w-30
        "
      />

      <Image
        src="/map3.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          left-[7%]
          top-[14%]
          h-auto
          w-20
          pointer-events-none

          md:left-142
          md:top-20
          md:w-28
        "
      />

      <Image
        src="/map4.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          right-[-4%]
          top-[-4%]
          w-36
          pointer-events-none

          md:right-[-4%]
          md:top-[-4%]
          md:w-64
        "
      />

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

        <div className="w-full text-left">
          {/* ¿DÓNDE? */}
          <p
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
          </p>

          {/* RESTAURANTE */}
          <h2
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
          </h2>

          {/* DIRECCIÓN */}
          <p
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
          </p>
        </div>

        {/* =========================================
            MAPA
        ========================================= */}

        <div
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

            <Image
              src="/marco.png"
              alt=""
              fill
              className="
                pointer-events-none
                z-20
                object-fill
              "
            />

            {/* GOOGLE MAPS */}

            <div className="relative z-10 h-full w-full overflow-hidden bg-white">
              <iframe
                src="https://www.google.com/maps?q=Quinto+Cocina+Familiar,+San+Martin+de+los+Andes,+Neuquen&z=13&output=embed"
                className="h-full w-full touch-auto border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
