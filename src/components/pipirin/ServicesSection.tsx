import { Bike, Phone, ShoppingBag, Utensils, Clock } from "lucide-react";
import { availabilityNotice, restaurantInfo, services } from "@/data/pipirin";
import { Eyebrow, MaskedHeading, Reveal } from "./ui";

const icons = {
  "comer-aqui": Utensils,
  "para-llevar": ShoppingBag,
  recoger: ShoppingBag,
  domicilio: Bike,
} as const;

export function ServicesSection() {
  return (
    <section id="pedidos" className="section-y scroll-mt-20 border-y border-border bg-transparent">
      <div className="shell grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-20">
        <div className="col-span-12 lg:col-span-6">
          <Eyebrow>Servicios y pedidos</Eyebrow>
          <MaskedHeading
            as="h2"
            className="mt-5 text-[clamp(2.1rem,5vw,4rem)]"
            lines={["¿Aquí o para llevar?"]}
          />
          <Reveal delay={100}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Disfruta de nuestros tacos y cemitas en nuestra taquería en el Centro Histórico o pídelos para llevar.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={restaurantInfo.phone.href}
                data-analytics="click_phone"
                className="btn-base btn-primary"
              >
                <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
                Llamar ahora · {restaurantInfo.phone.display}
              </a>
              {restaurantInfo.onlineOrderUrl ? (
                <a
                  href={restaurantInfo.onlineOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="click_order"
                  className="btn-base btn-outline text-foreground"
                >
                  Pedido en línea
                </a>
              ) : null}
            </div>
            <p className="mt-4 max-w-md text-xs text-muted-foreground">{availabilityNotice}</p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <ul className="border-t border-border-strong">
            {services.map((s, i) => {
              const Icon = icons[s.id as keyof typeof icons];
              return (
                <Reveal as="li" key={s.id} delay={i * 70}>
                  <div className="flex items-start gap-4 border-b border-border py-5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] border border-border bg-bone">
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className="text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-foreground">{s.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
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

