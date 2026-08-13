import { openingHours, type OpeningHour } from "@/data/pipirin";

export type OpenState = {
  status: "abierto" | "cerrado" | "cerrado-hoy";
  headline: string;
  detail: string;
  today: OpeningHour;
};

/** Hora local de Puebla (America/Mexico_City) en minutos + día de la semana. */
export function pueblaNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Mexico_City",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const hour = Number(get("hour")) % 24;
  return { day: map[get("weekday")] ?? 0, minutes: hour * 60 + Number(get("minute")) };
}

const byDay = (day: number) => openingHours.find((h) => h.day === day)!;

function fmt(minutes: number) {
  const m = ((minutes % 1440) + 1440) % 1440;
  const h24 = Math.floor(m / 60);
  const mm = String(m % 60).padStart(2, "0");
  const suffix = h24 < 12 ? "a.m." : "p.m.";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${mm} ${suffix}`;
}

/**
 * Calcula el estado actual respetando cierres pasada la medianoche:
 * el tramo de un día puede extenderse hasta la 1:00 a.m. del día siguiente.
 */
export function getOpenState(date = new Date()): OpenState {
  const { day, minutes } = pueblaNow(date);
  const today = byDay(day);
  const yesterday = byDay((day + 6) % 7);

  // ¿Seguimos dentro del tramo iniciado ayer? (ej. 00:30 del jueves)
  if (yesterday.open !== null && yesterday.close !== null && yesterday.close > 1440) {
    if (minutes < yesterday.close - 1440) {
      return {
        status: "abierto",
        headline: "Abierto ahora",
        detail: `Cierra a las ${fmt(yesterday.close)}`,
        today,
      };
    }
  }

  if (today.open === null || today.close === null) {
    const next = nextOpening(day);
    return {
      status: "cerrado-hoy",
      headline: `Cerrado hoy · ${today.label}`,
      detail: next,
      today,
    };
  }

  if (minutes < today.open) {
    return {
      status: "cerrado",
      headline: "Cerrado ahora",
      detail: `Abre a las ${fmt(today.open)}`,
      today,
    };
  }

  if (minutes < Math.min(today.close, 1440)) {
    return {
      status: "abierto",
      headline: "Abierto ahora",
      detail: `Cierra a las ${fmt(today.close)}`,
      today,
    };
  }

  return { status: "cerrado", headline: "Cerrado ahora", detail: nextOpening(day), today };
}

function nextOpening(fromDay: number) {
  for (let i = 1; i <= 7; i++) {
    const d = byDay((fromDay + i) % 7);
    if (d.open !== null) return `Abre ${d.label.toLowerCase()} a las ${fmt(d.open)}`;
  }
  return "Consulta nuestros horarios";
}
