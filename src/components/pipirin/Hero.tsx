import { Navigation, Utensils } from "lucide-react";
import { restaurantInfo, reviews } from "@/data/pipirin";

const trust = [
  { big: `${reviews.rating} ★`, small: reviews.source },
  { big: "+50 años", small: "de tradición" },
  { big: "Centro Histórico", small: "Puebla" },
  { big: "Hasta 1:00 a.m.", small: "consulta horarios" },
];

export function Hero() {
  return (
    <section id="top" className="grain relative isolate min-h-[86svh] overflow-hidden bg-night text-night-foreground md:min-h-[90vh]">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[100vh] w-[120vw] h-[68vw] pointer-events-none scale-150 opacity-75 select-none"
          src="https://www.youtube-nocookie.com/embed/MRXaamX810M?autoplay=1&mute=1&loop=1&playlist=MRXaamX810M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0&autohide=1"
          title="Taquería El Pipirín Video"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {/* Capa de contraste y gradiente */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#14131D_0%,rgba(20,19,29,0.82)_45%,rgba(20,19,29,0.45)_100%)] md:bg-[linear-gradient(100deg,#14131D_0%,rgba(20,19,29,0.75)_50%,rgba(20,19,29,0.25)_100%)]"
        />
      </div>

      <div className="shell relative z-10 flex min-h-[86svh] flex-col justify-end pb-8 pt-28 md:min-h-[90vh] md:pb-0">
        <div className="grid grid-cols-12 items-end gap-8 md:pb-40">
          <div className="col-span-12 text-night-foreground lg:col-span-8">
            <p className="eyebrow motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.1s_both] text-maize">
              Taquería poblana · Centro Histórico
            </p>
            <h1 className="motion-safe:animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] mt-5 text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.98]">
              Más de 50 años
              <br />
              de tradición poblana.
            </h1>
            <p className="motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.35s_both] mt-6 max-w-xl text-base leading-relaxed opacity-85 md:text-lg">
              Tacos, cemitas y antojitos con el sabor de siempre. Nuestra especialidad: la cecina
              hervida.
            </p>
            <p className="motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.4s_both] mt-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-maize">
              <Utensils size={15} strokeWidth={1.8} aria-hidden="true" />
              Especialidad: tacos y cemitas de cecina hervida
            </p>

            <div className="motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.45s_both] mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#menu" data-analytics="click_menu" className="btn-base btn-primary">
                Ver menú
              </a>
              <a
                href={restaurantInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="click_directions"
                className="btn-base btn-outline text-night-foreground"
              >
                Cómo llegar
                <Navigation size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>

            <a
              href={restaurantInfo.phone.href}
              data-analytics="click_phone"
              className="nav-link motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.5s_both] mt-7 inline-block text-night-foreground/90"
            >
              Llamar · {restaurantInfo.phone.display}
            </a>
          </div>

          <div className="col-span-12 hidden lg:col-span-4 lg:col-start-9 lg:block">
            <div className="motion-safe:animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_0.7s_both] flex flex-col items-end gap-3 text-night-foreground/70">
              <span className="eyebrow">Descubre</span>
              <span
                aria-hidden="true"
                className="motion-safe:animate-[line-drop_2.4s_ease-in-out_infinite] block h-16 w-px origin-top bg-current/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Franja de confianza */}
      <div className="relative z-10 border-t border-night-foreground/15 bg-night/80 text-night-foreground backdrop-blur-[2px] motion-safe:animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.65s_both]">
        <dl className="shell grid grid-cols-2 gap-y-5 py-5 md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.big} className="min-w-0">
              <dt className="font-display truncate text-lg md:text-xl">{t.big}</dt>
              <dd className="mt-0.5 text-[11px] uppercase tracking-[0.14em] opacity-60">
                {t.small}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
