import tacosImg from "@/assets/Fotos El pipirin/TACOCECINA.webp";
import cemitaImg from "@/assets/Fotos El pipirin/CEMACECINA.webp";
import medulaImg from "@/assets/Fotos El pipirin/MEDULA.png";
import chanclasImg from "@/assets/Fotos El pipirin/CHANCLAS.png";
import { Eyebrow, MaskedHeading, Reveal } from "./ui";

const dishes = [
  {
    name: "Tacos de cecina hervida",
    note: "La especialidad de la casa.",
    img: tacosImg,
    alt: "Tacos de cecina hervida servidos en Taquería El Pipirín",
    w: 800,
    h: 800,
  },
  {
    name: "Cemita de cecina hervida",
    note: "Cemita poblana preparada con nuestra cecina.",
    img: cemitaImg,
    alt: "Cemita de cecina hervida de Taquería El Pipirín",
    w: 800,
    h: 800,
  },
  {
    name: "Sopa de médula",
    note: "Caldo tradicional servido caliente.",
    img: medulaImg,
    alt: "Sopa de médula servida en Taquería El Pipirín",
    w: 800,
    h: 800,
  },
  {
    name: "Chanclas poblanas",
    note: "Pan suave ahogado en salsa de chile guajillo.",
    img: chanclasImg,
    alt: "Chanclas poblanas tradicionales en Taquería El Pipirín",
    w: 800,
    h: 800,
  },
];

export function FeaturedDishes() {
  return (
    <section id="destacados" className="section-y border-t border-border bg-transparent">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-border-strong pb-6">
            <div>
              <Eyebrow>Lo más pedido</Eyebrow>
              <MaskedHeading
                as="h2"
                className="mt-3 text-[clamp(2.1rem,4.8vw,3.8rem)]"
                lines={["Platillos destacados"]}
              />
            </div>
            <a href="#menu" data-analytics="click_menu" className="nav-link text-primary self-start md:self-auto">
              Ver menú completo
            </a>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((d, i) => (
            <Reveal as="li" key={d.name} delay={i * 80}>
              <a href="#menu" data-analytics="click_menu" className="group block">
                <div className="overflow-hidden rounded-[4px] border border-border/40 bg-background">
                  <img
                    src={d.img}
                    alt={d.alt}
                    width={d.w}
                    height={d.h}
                    loading="lazy"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <h3 className="font-display mt-5 text-xl transition-colors duration-300 group-hover:text-primary">
                  {d.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-2 block h-px w-0 bg-primary transition-[width] duration-[450ms] ease-out group-hover:w-10"
                />
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
