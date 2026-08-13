import { Navigation, Phone } from "lucide-react";
import { hoursNotice, openingHours, restaurantInfo } from "@/data/pipirin";
import { Eyebrow, MaskedHeading, Reveal, SectionIndex } from "./ui";

export function LocationSection() {
  const a = restaurantInfo.address;

  return (
    <section id="ubicacion" className="section-y scroll-mt-20 bg-transparent">
      <div className="shell">
        <Reveal>
          <SectionIndex number="04" label="Ubicación" />
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Eyebrow>En el corazón de Puebla</Eyebrow>
          <MaskedHeading
            as="h2"
            className="mt-5 text-[clamp(2.1rem,5.5vw,4.4rem)]"
            lines={["El Pipirín está en", "el Centro de Puebla."]}
          />
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Taquería en el Centro Histórico de Puebla: tacos de cecina, cemitas poblanas y antojitos
            a unos pasos de 3 Norte y 22 Poniente.
          </p>
        </div>
      </div>

      <div className="shell mt-14 grid grid-cols-12 gap-y-10 md:gap-x-10">
        {/* Mapa Interactivo Directo */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-border-strong md:aspect-[16/11]">
            <iframe
              title="Mapa de la ubicación de Taquería El Pipirín"
              src={restaurantInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>

        {/* Información */}
        <div className="col-span-12 lg:col-span-5">
          <address className="not-italic">
            <p className="eyebrow text-muted-foreground">Dirección</p>
            <p className="font-display mt-3 text-2xl leading-snug">
              {a.street}
              <br />
              {a.neighborhood}, C.P. {a.zip}
              <br />
              {a.city}, {a.state}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Referencia: {a.crossStreets} · {a.plusCode}
            </p>
          </address>

          <div className="mt-8">
            <p className="eyebrow text-muted-foreground">Horario</p>
            <dl className="mt-3 border-t border-border-strong">
              {openingHours.map((h) => {
                const closed = h.open === null;
                return (
                  <div
                    key={h.day}
                    className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-border py-2.5"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {h.short}
                    </dt>
                    <dd
                      className={`text-sm tabular-nums ${
                        closed ? "font-bold uppercase tracking-[0.1em] text-primary-deep" : ""
                      }`}
                    >
                      {closed ? "Cerrado" : h.text}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">{hoursNotice}</p>
          </div>

          <div className="mt-8">
            <p className="eyebrow text-muted-foreground">Teléfono</p>
            <a
              href={restaurantInfo.phone.href}
              data-analytics="click_phone"
              className="nav-link mt-3 inline-block text-base normal-case tracking-normal"
            >
              {restaurantInfo.phone.display}
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={restaurantInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="click_directions"
              className="btn-base btn-primary w-full sm:w-auto"
            >
              Cómo llegar
              <Navigation size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href={restaurantInfo.phone.href}
              data-analytics="click_phone"
              className="btn-base btn-outline w-full text-foreground sm:w-auto"
            >
              <Phone size={16} strokeWidth={1.8} aria-hidden="true" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
