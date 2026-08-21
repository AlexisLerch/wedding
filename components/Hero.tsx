import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      {/* =========================
    FLORES ARRIBA IZQUIERDA
========================== */}

      <Image
        src="/amankay.png"
        alt=""
        width={420}
        height={420}
        className="
    absolute
    -left-10 -top-10
    w-40
    md:-left-16 md:-top-20 md:w-80
    pointer-events-none
  "
      />

      {/* Más pegada a la primera */}
      <Image
        src="/amankay.png"
        alt=""
        width={360}
        height={360}
        className="
    absolute
    -left-12 top-10
    w-36
    md:-left-20 md:top-24 md:w-72
    -rotate-12
    pointer-events-none
  "
      />

      {/* Se superpone con las anteriores */}
      <Image
        src="/amankay.png"
        alt=""
        width={340}
        height={340}
        className="
    absolute
    left-12 -top-8
    w-32
    md:left-32 md:-top-20 md:w-72
    rotate-12
    pointer-events-none
  "
      />

      {/* Pegada al ramo */}
      <Image
        src="/amankay.png"
        alt=""
        width={240}
        height={240}
        className="
    absolute
    -left-1 top-24
    w-24
    md:left-6 md:top-48 md:w-48
    rotate-6
    pointer-events-none
  "
      />

      {/* Flor pequeña suelta */}
      <Image
        src="/amankay.png"
        alt=""
        width={140}
        height={140}
        className="
    absolute
    left-20 top-36
    w-14
    md:left-40 md:top-44 md:w-24
    rotate-12
    pointer-events-none
  "
      />

      {/* Flor pequeña más alejada */}
      <Image
        src="/amankay.png"
        alt=""
        width={120}
        height={120}
        className="
    absolute
    left-10 top-48
    w-11
    md:left-52 md:top-60 md:w-20
    -rotate-6
    pointer-events-none
  "
      />

      {/* =========================
    FLORES ABAJO DERECHA
========================== */}

      <Image
        src="/amankay.png"
        alt=""
        width={420}
        height={420}
        className="
    absolute
    -right-10 -bottom-10
    w-40
    md:-right-16 md:-bottom-20 md:w-80
    rotate-12
    pointer-events-none
  "
      />

      {/* Más pegada a la primera */}
      <Image
        src="/amankay.png"
        alt=""
        width={360}
        height={360}
        className="
    absolute
    -right-12 bottom-10
    w-36
    md:-right-20 md:bottom-24 md:w-72
    -rotate-12
    pointer-events-none
  "
      />

      {/* Se superpone con las anteriores */}
      <Image
        src="/amankay.png"
        alt=""
        width={340}
        height={340}
        className="
    absolute
    right-12 -bottom-8
    w-32
    md:right-32 md:-bottom-24 md:w-72
    rotate-6
    pointer-events-none
  "
      />

      {/* Pegada al ramo */}
      <Image
        src="/amankay.png"
        alt=""
        width={220}
        height={220}
        className="
    absolute
    -right-1 bottom-24
    w-24
    md:right-4 md:bottom-44 md:w-44
    -rotate-6
    pointer-events-none
  "
      />

      {/* Flor pequeña suelta */}
      <Image
        src="/amankay.png"
        alt=""
        width={140}
        height={140}
        className="
    absolute
    right-20 bottom-36
    w-14
    md:right-40 md:bottom-44 md:w-24
    rotate-12
    pointer-events-none
  "
      />

      {/* Flor pequeña más alejada */}
      <Image
        src="/amankay.png"
        alt=""
        width={120}
        height={120}
        className="
    absolute
    right-10 bottom-48
    w-11
    md:right-52 md:bottom-60 md:w-20
    -rotate-6
    pointer-events-none
  "
      />

      <div className="relative z-10 flex flex-col items-center">
        <p
          className="
          font-engravers
          text-2xl md:text-4xl
          tracking-[0.15em]
          uppercase
          text-text
          mb-12 md:mb-16
        "
        >
          Nuestra unión
        </p>

        <h1
          className="
          font-engravers
          text-7xl
          sm:text-8xl
          md:text-[7rem]
          lg:text-[8rem]
          font-medium
          leading-[0.85]
          text-text
        "
        >
          Alexis
          <span
            className="
            block
            text-3xl
            sm:text-4xl
            md:text-6xl
            my-3
          "
          >
            &
          </span>
          Lucila
        </h1>
      </div>
    </section>
  );
}
