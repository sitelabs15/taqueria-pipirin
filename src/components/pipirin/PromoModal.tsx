import { useEffect, useState } from "react";
import { Navigation, X } from "lucide-react";
import anuncioImg from "@/assets/Anuncios/Anuncio-01.jpeg";
import { restaurantInfo } from "@/data/pipirin";

export function PromoModal() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [closing, setClosing] = useState(false);

  // Retardo de 1.4 segundos antes de mostrar el anuncio suavemente
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => {
        setActive(true);
      });
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setActive(false);
    setTimeout(() => {
      setMounted(false);
    }, 500);
  };

  useEffect(() => {
    if (active && !closing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active, closing]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mounted) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 pointer-events-auto"
    >
      {/* Telón de fondo (Backdrop con fundido suave) */}
      <div
        className={`fixed inset-0 bg-night/80 backdrop-blur-sm transition-opacity duration-700 ease-out ${
          active && !closing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Tarjeta del Anuncio con entrada fluida tipo studio */}
      <div
        className={`relative z-10 max-h-[90vh] w-full max-w-lg overflow-hidden rounded-2xl border border-border-strong/80 bg-card shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active && !closing
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        {/* Botón de Cierre (X) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar anuncio"
          className="absolute right-3.5 top-3.5 z-20 grid h-9 w-9 place-items-center rounded-full bg-night/75 text-night-foreground transition-all duration-300 hover:bg-primary hover:scale-110 active:scale-95 focus:outline-none"
        >
          <X size={18} strokeWidth={2.2} aria-hidden="true" />
        </button>

        {/* Imagen del Anuncio */}
        <div className="relative max-h-[68vh] overflow-y-auto bg-night">
          <img
            src={anuncioImg}
            alt="Aprovecha la temporada de chiles en nogada - Taquería El Pipirín"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Pie del Anuncio con Botón "Cómo llegar" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border-strong bg-bone p-4 sm:px-6 sm:py-4">
          <h3 id="promo-title" className="font-display text-base sm:text-lg text-foreground leading-snug">
            Aprovecha la temporada de chiles en nogada
          </h3>
          <a
            href={restaurantInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="click_promo_directions"
            onClick={handleClose}
            className="btn-base btn-primary w-full sm:w-auto min-h-[42px] rounded-full px-5 text-[11px] tracking-wider"
          >
            Cómo llegar
            <Navigation size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
