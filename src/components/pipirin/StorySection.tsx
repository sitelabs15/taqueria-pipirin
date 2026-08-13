import historia1Img from "@/assets/Fotos El pipirin/personas.jpg";
import historia2Img from "@/assets/Fotos El pipirin/elizabeth.png";
import { Eyebrow, MaskedHeading, Reveal, RevealImage, SectionIndex } from "./ui";

export function StorySection() {
  return (
    <section id="historia" className="section-y grain scroll-mt-20 bg-transparent">
      <div className="shell">
        <Reveal>
          <SectionIndex number="03" label="Historia" />
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-3">
            <RevealImage
              src={historia1Img}
              alt="Tradición familiar en Taquería El Pipirín, Centro de Puebla"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 24vw, 100vw"
              className="aspect-[3/4] rounded-[6px]"
            />
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Tradición · Puebla
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>Nuestra historia</Eyebrow>
            <MaskedHeading
              as="h2"
              className="mt-5 text-[clamp(2.1rem,4.6vw,3.9rem)]"
              lines={["Una mesa poblana", "con más de cinco", "décadas de historia."]}
            />
            <Reveal delay={120}>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground md:text-lg">
                Desde hace más de 50 años, Taquería El Pipirín forma parte de la tradición
                gastronómica de Puebla. En el Centro Histórico, nuestra familia prepara tacos,
                cemitas y antojitos con sabores que han acompañado a generaciones.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 flex items-end gap-6 border-t border-border-strong pt-8">
                <p className="font-display text-[clamp(4rem,12vw,8rem)] leading-none text-primary">
                  +50
                </p>
                <p className="eyebrow pb-3 text-muted-foreground">Años de tradición</p>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <RevealImage
              src={historia2Img}
              alt="Familia e historia en Taquería El Pipirín"
              width={1200}
              height={1504}
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="aspect-[4/5] rounded-[6px]"
            />
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Elizabeth · Historia familiar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
