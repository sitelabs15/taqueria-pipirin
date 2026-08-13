import { useEffect, useState } from "react";
import { Navigation, Phone, Utensils } from "lucide-react";
import { restaurantInfo } from "@/data/pipirin";

export function MobileStickyActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[250] border-t border-border bg-bone/97 transition-transform duration-500 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-[1fr_1fr_1.3fr] items-stretch gap-2 px-3 py-2">
        <a
          href="#menu"
          data-analytics="click_menu"
          className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.1em]"
        >
          <Utensils size={17} strokeWidth={1.7} aria-hidden="true" />
          Menú
        </a>
        <a
          href={restaurantInfo.phone.href}
          data-analytics="click_phone"
          className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.1em]"
        >
          <Phone size={17} strokeWidth={1.7} aria-hidden="true" />
          Llamar
        </a>
        <a
          href={restaurantInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="click_directions"
          className="btn-base btn-primary min-h-[48px] whitespace-nowrap px-3 text-[10px] tracking-[0.06em]"
        >
          <Navigation size={16} strokeWidth={1.8} aria-hidden="true" />
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
