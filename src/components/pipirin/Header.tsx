import { useEffect, useState } from "react";
import { Menu, Navigation, X, Phone, Clock } from "lucide-react";
import { navItems, restaurantInfo } from "@/data/pipirin";
import { OpenBadge } from "./ui";
import logoImg from "@/assets/logo.png";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={restaurantInfo.name}>
      <img
        src={logoImg}
        alt={restaurantInfo.name}
        className={`${
          compact ? "h-10 md:h-12" : "h-12 md:h-14"
        } w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 md:top-5 z-[200] flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-500">
      <div
        className={`pointer-events-auto inline-flex items-center justify-center gap-4 sm:gap-6 md:gap-8 rounded-full border transition-all duration-500 px-4 py-2 md:px-6 md:py-2.5 ${
          scrolled
            ? "border-border-strong bg-bone/95 shadow-[0_12px_36px_rgba(0,0,0,0.7)] backdrop-blur-md"
            : "border-border/40 bg-night/80 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        }`}
      >
        <div className="text-foreground">
          <a href="#top" className="group flex items-center gap-2" aria-label={restaurantInfo.name}>
            <img
              src={logoImg}
              alt={restaurantInfo.name}
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </a>
        </div>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link text-foreground text-xs font-semibold uppercase tracking-wider transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={restaurantInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="click_directions"
            className="btn-base btn-primary hidden min-h-[38px] md:min-h-[40px] rounded-full px-4 text-[11px] font-bold tracking-wider sm:inline-flex"
          >
            Cómo llegar
            <Navigation size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label="Abrir menú de navegación"
            className="grid h-9 w-9 place-items-center rounded-full border border-border-strong text-foreground hover:bg-white/10 lg:hidden"
          >
            <Menu size={18} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <Wordmark compact />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="grid h-11 w-11 place-items-center rounded-[4px] border border-border-strong"
          >
            <X size={20} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navegación móvil" className="shell mt-6 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display border-b border-border py-5 text-4xl"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="shell mt-auto space-y-4 pb-10 pt-8">
          <div className="flex items-start gap-3">
            <Clock size={16} strokeWidth={1.6} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
            <OpenBadge />
          </div>
          <a
            href={restaurantInfo.phone.href}
            data-analytics="click_phone"
            className="flex items-center gap-3 text-sm font-semibold"
          >
            <Phone size={16} strokeWidth={1.6} className="shrink-0 text-primary" aria-hidden="true" />
            {restaurantInfo.phone.display}
          </a>
          <a
            href={restaurantInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="click_directions"
            className="btn-base btn-primary w-full"
          >
            Cómo llegar
            <Navigation size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
