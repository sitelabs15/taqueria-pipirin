import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { faqItems } from "@/data/pipirin";
import { Eyebrow, Reveal } from "./ui";

export function FaqSection() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.q ?? null);

  return (
    <section aria-labelledby="faq-titulo" className="section-y border-t border-border bg-transparent">
      <div className="shell grid grid-cols-12 gap-y-10 md:gap-x-12">
        <div className="col-span-12 lg:col-span-4">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 id="faq-titulo" className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">
            Antes de venir.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-border-strong">
            {faqItems.map((item, i) => {
              const isOpen = open === item.q;
              return (
                <Reveal as="li" key={item.q} delay={i * 50}>
                  <div className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.q)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="font-display text-lg md:text-xl">{item.q}</span>
                      <ChevronRight
                        size={18}
                        strokeWidth={1.6}
                        aria-hidden="true"
                        className={`shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <div
                      hidden={!isOpen}
                      className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground"
                    >
                      {item.a}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
