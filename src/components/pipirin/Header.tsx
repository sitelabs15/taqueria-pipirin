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
          <a
            href={`https://wa.me/522224868832?text=${encodeURIComponent(
              "Hola, quisiera consultar el menú o hacer un pedido en Taquería El Pipirín."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            data-analytics="click_whatsapp_header"
            className="grid h-[38px] w-[38px] md:h-[40px] md:w-[40px] shrink-0 place-items-center rounded-full bg-[#D99B26] text-[#14131D] transition-all duration-300 hover:scale-105 hover:bg-[#b8811c] active:scale-95 shadow-md"
          >
            <svg className="h-4 w-4 md:h-5 md:w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
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
