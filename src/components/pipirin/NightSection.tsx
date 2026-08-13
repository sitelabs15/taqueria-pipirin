import fachadaImg from "@/assets/Fotos El pipirin/taqueria-exterior.png";
import { openingHours } from "@/data/pipirin";
import { Eyebrow, MaskedHeading, Reveal, RevealImage } from "./ui";

export function NightSection() {
  return (
    <section aria-labelledby="noche-titulo" className="grain relative bg-transparent text-night-foreground">
      <div className="shell section-y">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-20">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow className="text-maize">Puebla después de la tarde</Eyebrow>
            <MaskedHeading
              as="h2"
              className="mt-5 text-[clamp(2.1rem,5vw,4.2rem)]"
              lines={["Una tradición", "que también se", "disfruta de noche."]}
            />
            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-base leading-relaxed opacity-80 md:text-lg">
                Consulta nuestros horarios y ven por tacos, cemitas y antojitos en el Centro
                Histórico.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-10 max-w-md border-t border-night-foreground/20">
                {openingHours.map((h) => (
                  <div
                    key={h.day}
                    className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-night-foreground/12 py-3"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-60">
                      {h.short}
                    </dt>
                    <dd
                      className={`text-sm ${h.open === null ? "font-bold text-maize" : "opacity-90"}`}
                    >
                      {h.open === null ? "Cerrado" : h.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <RevealImage
              src={fachadaImg}
              alt="Fachada exterior de Taquería El Pipirín en el Centro de Puebla"
              width={1600}
              height={1008}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/5] rounded-[6px] md:aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
