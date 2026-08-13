import prepImg from "@/assets/hero-tacos-cecina.jpg";
import { Eyebrow, MaskedHeading, Reveal, RevealImage, SectionIndex } from "./ui";

export function SpecialtySection() {
  return (
    <section id="especialidad" className="section-y grain bg-transparent">
      <div className="shell">
        <Reveal>
          <SectionIndex number="01" label="La Especialidad" />
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-20">
          <div className="col-span-12 lg:col-span-6">
            <RevealImage
              src={prepImg}
              alt="Corte y preparación de la cecina hervida en la cocina de Taquería El Pipirín, Puebla"
              width={1200}
              height={1504}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] rounded-[6px]"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 lg:pt-6">
            <Eyebrow>LA ESPECIALIDAD</Eyebrow>
            <MaskedHeading
              as="h2"
              className="mt-5 text-[clamp(2.25rem,5.2vw,4.6rem)]"
              lines={["El sabor clásico", "de la cecina hervida."]}
            />
            <Reveal delay={120}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                En tacos o en cemita, la cecina hervida es uno de los sabores que han convertido a El
                Pipirín en parte de la tradición gastronómica poblana.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {["TACOS DE CECINA", "CEMITAS DE CECINA"].map((t, i) => (
                <Reveal key={t} delay={i * 90}>
                  <div className="border-t border-border-strong pt-5">
                    <p className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none text-foreground">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

