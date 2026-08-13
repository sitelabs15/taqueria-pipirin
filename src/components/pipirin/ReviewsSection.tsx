import { Star, MessageSquare, ExternalLink } from "lucide-react";
import { reviews } from "@/data/pipirin";
import { Eyebrow, MaskedHeading, Reveal } from "./ui";

export function ReviewsSection() {
  return (
    <section id="reseñas" className="section-y border-y border-border bg-transparent">
      <div className="shell">
        {/* Encabezado y Puntuación General */}
        <div className="grid grid-cols-12 items-end gap-y-8 md:gap-x-12 lg:gap-x-16">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Reputación y Opiniones</Eyebrow>
            <MaskedHeading
              as="h2"
              className="mt-5 text-[clamp(2.1rem,5vw,4.2rem)]"
              lines={["Lo que dicen", "de El Pipirín."]}
            />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Más de 50 años sirviendo a los poblanos y a quienes visitan el Centro Histórico. Nuestra reputación se construye platillo a platillo cada día.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={150}>
              <div className="flex items-center gap-5 rounded-[6px] border border-border-strong bg-background p-6">
                <span className="font-display text-5xl leading-none text-foreground">
                  {reviews.rating}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-maize">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        strokeWidth={1.5}
                        className="fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {reviews.source} · +{reviews.reviewCount.toLocaleString("es-MX")} opiniones
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Etiquetas destacadas */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-2">
            {reviews.mentioned.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/90"
              >
                <MessageSquare size={12} className="text-primary opacity-80" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Tarjetas con las 5 mejores reseñas */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-[6px] border border-border/40 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-maize">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={14}
                          strokeWidth={1.5}
                          className="fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/40 pt-4">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {t.author.charAt(0)}
                  </div>
                  <p className="text-xs font-bold text-foreground">{t.author}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón Ver Reseñas en Google */}
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <a
              href={reviews.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline inline-flex text-foreground"
            >
              Ver todas las reseñas en Google
              <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
