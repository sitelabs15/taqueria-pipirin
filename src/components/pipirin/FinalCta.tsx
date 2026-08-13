import { Navigation } from "lucide-react";
import { restaurantInfo } from "@/data/pipirin";
import { MaskedHeading, Reveal } from "./ui";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="grain bg-primary text-primary-foreground">
      <div className="shell section-y">
        <div className="max-w-3xl">
          <MaskedHeading
            as="h2"
            className="text-[clamp(2.1rem,5.6vw,4.6rem)]"
            lines={["Más de 50 años después,", "seguimos sirviendo", "Puebla en la mesa."]}
          />
          <Reveal delay={120}>
            <p className="mt-7 text-base font-medium opacity-90 md:text-lg">
              Consulta el menú y ven a visitarnos en el Centro Histórico.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                data-analytics="click_menu"
                className="btn-base bg-night text-night-foreground hover:bg-bone transition-colors"
              >
                Ver menú
              </a>
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="click_directions"
                className="btn-base border border-current/30 text-primary-foreground hover:bg-night/10 transition-colors"
              >
                Cómo llegar
                <Navigation size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
            <a
              href={restaurantInfo.phone.href}
              data-analytics="click_phone"
              className="nav-link mt-8 inline-block font-semibold text-primary-foreground hover:opacity-80"
            >
              {restaurantInfo.phone.display}
            </a>
          </Reveal>
        </div>
      </div>
      <div aria-hidden="true" className="tile-band h-2 opacity-40" />
    </section>
  );
}
