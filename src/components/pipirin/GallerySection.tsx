import chanclasImg from "@/assets/Fotos El pipirin/CHANCLAS.png";
import milaPapasImg from "@/assets/Fotos El pipirin/MILACONPAPAS.jpg";
import panzaImg from "@/assets/Fotos El pipirin/PANZA.png";
import mixioteImg from "@/assets/Fotos El pipirin/MIXIOTE.jpg";
import pelonaImg from "@/assets/Fotos El pipirin/pelona.jpg";
import { Eyebrow, Reveal } from "./ui";

const items = [
  {
    src: chanclasImg,
    alt: "Chanclas poblanas tradicionales de Taquería El Pipirín",
    tag: "Chanclas Poblanas",
    w: 800,
    h: 800,
    className: "sm:col-span-2 sm:row-span-2 aspect-[4/5]",
  },
  {
    src: milaPapasImg,
    alt: "Cemita de milanesa con papas en Taquería El Pipirín",
    tag: "Cemita de Milanesa",
    w: 800,
    h: 600,
    className: "sm:col-span-2 aspect-[4/3]",
  },
  {
    src: panzaImg,
    alt: "Mole de panza poblano en Taquería El Pipirín",
    tag: "Mole de Panza",
    w: 800,
    h: 600,
    className: "sm:col-span-2 aspect-[4/3]",
  },
  {
    src: mixioteImg,
    alt: "Mixiote tradicional preparado en Taquería El Pipirín",
    tag: "Mixiote Tradicional",
    w: 800,
    h: 600,
    className: "sm:col-span-2 aspect-[16/10]",
  },
  {
    src: pelonaImg,
    alt: "Pelona poblana con crema y lechuga en Taquería El Pipirín",
    tag: "Pelonas Poblanas",
    w: 800,
    h: 600,
    className: "sm:col-span-2 aspect-[16/10]",
  },
];

export function GallerySection() {
  return (
    <section aria-labelledby="galeria-titulo" className="section-y bg-transparent">
      <div className="shell">
        <Reveal>
          <Eyebrow>Puebla se sirve en la mesa</Eyebrow>
          <h2 id="galeria-titulo" className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)]">
            La casa, por dentro.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-4">
          {items.map((it, i) => (
            <Reveal as="li" key={it.tag} delay={i * 70} className={it.className}>
              <figure className="group relative h-full overflow-hidden rounded-[4px]">
                <img
                  src={it.src}
                  alt={it.alt}
                  width={it.w}
                  height={it.h}
                  loading="lazy"
                  sizes="(min-width: 640px) 45vw, 92vw"
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.19_0.008_67/0.7),transparent)] p-4 text-[11px] font-bold uppercase tracking-[0.16em] text-night-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {it.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
