import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { hoursNotice, restaurantInfo } from "@/data/pipirin";
import { OpenBadge } from "./ui";

export function QuickInfoBar() {
  return (
    <section aria-label="Información rápida" className="border-b border-border bg-bone">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <Clock size={13} strokeWidth={1.8} className="shrink-0 text-primary" aria-hidden="true" />
            Hoy
          </p>
          <div className="mt-3">
            <OpenBadge />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Martes: cerrado</p>
        </div>

        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <MapPin size={13} strokeWidth={1.8} className="shrink-0 text-primary" aria-hidden="true" />
            Dirección
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {restaurantInfo.address.street}, {restaurantInfo.address.neighborhood}
            <br />
            <span className="text-muted-foreground">{restaurantInfo.address.crossStreets}</span>
          </p>
        </div>

        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <Phone size={13} strokeWidth={1.8} className="shrink-0 text-primary" aria-hidden="true" />
            Teléfono
          </p>
          <a
            href={restaurantInfo.phone.href}
            data-analytics="click_phone"
            className="nav-link mt-3 inline-block text-sm normal-case tracking-normal"
          >
            {restaurantInfo.phone.display}
          </a>
        </div>

        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-2 text-muted-foreground">
            <ShoppingBag size={13} strokeWidth={1.8} className="shrink-0 text-primary" aria-hidden="true" />
            Servicio
          </p>
          <p className="mt-3 text-sm leading-relaxed">Comer aquí · Recoger · Entrega</p>
        </div>
      </div>
      <div className="shell pb-8">
        <p className="text-xs text-muted-foreground">{hoursNotice}</p>
      </div>
    </section>
  );
}
