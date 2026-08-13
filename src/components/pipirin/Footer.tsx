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
