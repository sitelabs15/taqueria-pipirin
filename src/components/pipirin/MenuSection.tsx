import { useState } from "react";
import { Phone, Clock, ExternalLink, BookOpen } from "lucide-react";
import { menuCategories, preparationNotice, priceNotice, restaurantInfo } from "@/data/pipirin";
import { Eyebrow, MaskedHeading, Reveal, SectionIndex } from "./ui";

const spicyLabel = { suave: "Suave", medio: "Medio", picante: "Picante" } as const;

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0]!.id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0]!;

  return (
    <section id="menu" className="section-y scroll-mt-20 border-y border-border bg-transparent">
      <div className="shell">
        <Reveal>
          <SectionIndex number="02" label="Menú" />
        </Reveal>

        <div className="mt-10 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Cocina poblana</Eyebrow>
            <MaskedHeading
              as="h2"
              className="mt-5 text-[clamp(2.25rem,6vw,4.75rem)]"
              lines={["Nuestro menú"]}
            />
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Tacos, cemitas, antojitos, caldos y postres poblanos. La cecina hervida es la especialidad de la casa.
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maize">
              <Clock size={14} className="shrink-0" aria-hidden="true" />
              {preparationNotice}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm text-muted-foreground">{restaurantInfo.priceRangeNote}</p>
            {restaurantInfo.interactiveMenuUrl ? (
              <a
                href={restaurantInfo.interactiveMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="click_interactive_menu"
                className="btn-base btn-primary min-h-[44px] px-5 text-[12px]"
              >
                <BookOpen size={16} strokeWidth={1.8} aria-hidden="true" />
                Ver menú interactivo
                <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Selector de categorías */}
        <div className="-mx-5 mt-12 overflow-x-auto px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex min-w-max items-center gap-2 border-b border-border-strong pb-3"
          >
            {menuCategories.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  id={`tab-${c.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${c.id}`}
                  onClick={() => setActive(c.id)}
                  className={`min-h-[44px] rounded-[4px] px-4 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carta */}
        <div
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          className="mt-6"
        >
          <ul className="grid gap-6 md:grid-cols-2">
            {category.items.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 60}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-[6px] border border-border/40 bg-background p-4 sm:p-5 transition-colors duration-300 hover:border-primary/50">
                  {item.image ? (
                    <div className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-[4px] border border-border-strong bg-bone">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl sm:text-2xl leading-tight text-foreground">
                        {item.name}
                      </h3>
                      {item.price !== null ? (
                        <p className="text-base font-bold tabular-nums text-primary">${item.price}</p>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    ) : null}
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      {item.featured ? (
                        <span className="eyebrow text-primary">Especialidad</span>
                      ) : null}
                      {item.spicyLevel ? (
                        <span className="eyebrow text-primary">
                          {spicyLabel[item.spicyLevel]}
                        </span>
                      ) : null}
                      {item.available === "consultar" ? (
                        <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                          Consulta disponibilidad
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="mt-12 max-w-2xl space-y-3">
            <p className="text-sm font-semibold">
              ¿No comes muy picante? Pregunta por el nivel de nuestras salsas.
            </p>
            <p className="text-xs text-muted-foreground">
              {priceNotice} Algunos platillos pueden estar sujetos a disponibilidad.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-start gap-5 border-t border-border-strong pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl md:text-3xl">¿Quieres consultar la carta completa?</p>
            <div className="flex flex-wrap gap-3">
              {restaurantInfo.interactiveMenuUrl ? (
                <a
                  href={restaurantInfo.interactiveMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="click_interactive_menu"
                  className="btn-base btn-primary"
                >
                  <BookOpen size={16} strokeWidth={1.8} aria-hidden="true" />
                  Ver menú interactivo
                  <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
                </a>
              ) : null}
              <a
                href={restaurantInfo.phone.href}
                data-analytics="click_phone"
                className="btn-base btn-outline text-foreground"
              >
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
                Llamar al {restaurantInfo.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
