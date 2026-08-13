import { Facebook, Instagram } from "lucide-react";
import { navItems, openingHours, restaurantInfo, socialLinks } from "@/data/pipirin";
import logoImg from "@/assets/logo.png";

import { MadeWithLoveBadge } from "./MadeWithLoveBadge";

const icons = { instagram: Instagram, facebook: Facebook } as const;

export function Footer() {
  const a = restaurantInfo.address;
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-night pb-28 text-night-foreground md:pb-0">
      <div className="shell py-16 md:py-20">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <a href="#top" className="group inline-block" aria-label={restaurantInfo.name}>
              <img
                src={logoImg}
                alt={restaurantInfo.name}
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm opacity-70">{restaurantInfo.tagline}</p>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <p className="eyebrow text-maize">Visítanos</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {a.street}
              <br />
              {a.neighborhood}, {a.state}
              <br />
              C.P. {a.zip}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <p className="eyebrow text-maize">Horario</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Lun, Mié–Vie: 3:30 p.m.–1:00 a.m.
              <br />
              Sáb–Dom: 1:30 p.m.–1:00 a.m.
              <br />
              <span className="font-bold text-maize">Martes: Cerrado</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="eyebrow text-maize">Contacto</p>
            <a
              href={restaurantInfo.phone.href}
              data-analytics="click_phone"
              className="nav-link mt-4 inline-block text-sm normal-case tracking-normal opacity-90"
            >
              {restaurantInfo.phone.display}
            </a>
            <p className="eyebrow mt-8 text-maize">Síguenos</p>
            <ul className="mt-4 flex gap-3">
              <li>
                <a
                  href={`https://wa.me/522224868832?text=${encodeURIComponent(
                    "Hola, quisiera consultar el menú o hacer un pedido en Taquería El Pipirín."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="click_whatsapp_footer"
                  aria-label="WhatsApp: 222 486 8832"
                  className="grid h-11 w-11 place-items-center rounded-[4px] border border-night-foreground/25 transition-colors duration-300 hover:border-maize hover:text-maize"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </li>
              {socialLinks.map((s) => {
                const Icon = icons[s.id as keyof typeof icons];
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics={`click_${s.id}`}
                      aria-label={`${s.label}: ${s.handle}`}
                      className="grid h-11 w-11 place-items-center rounded-[4px] border border-night-foreground/25 transition-colors duration-300 hover:border-maize hover:text-maize"
                    >
                      <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-6 border-t border-night-foreground/15 pt-8 text-center">
          <nav aria-label="Enlaces del pie" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((n) => (
              <a key={n.id} href={n.href} className="nav-link text-xs opacity-75">
                {n.label}
              </a>
            ))}
            <a href={restaurantInfo.phone.href} className="nav-link text-xs opacity-75">
              Contacto
            </a>
          </nav>

          <div className="flex flex-col items-center justify-center gap-3">
            <MadeWithLoveBadge />
            <p className="text-xs opacity-50">
              © {year} {restaurantInfo.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
