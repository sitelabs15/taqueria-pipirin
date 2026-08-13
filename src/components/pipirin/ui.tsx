import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { getOpenState } from "@/lib/hours";
import { useEffect, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "p" | "span";
}) {
  const { ref, shown } = useReveal();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Titular con reveal por línea (overflow + translateY). */
export function MaskedHeading({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const { ref, shown } = useReveal(0.25);
  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span key={line} className={`line-mask ${shown ? "line-mask-in" : ""}`}>
          <span style={{ transitionDelay: `${i * 90}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-primary ${className}`}>{children}</p>;
}

export function SectionIndex({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-2xl leading-none text-primary/70">{number}</span>
      <span className="eyebrow text-muted-foreground">{label}</span>
    </div>
  );
}

/** Imagen con revelado de cortina (overlay scaleX). */
export function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const { ref, shown } = useReveal(0.2);
  return (
    <div ref={ref} data-shown={shown} className={`img-cover relative ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={imgClassName}
      />
    </div>
  );
}

export function OpenBadge({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [state, setState] = useState<ReturnType<typeof getOpenState> | null>(null);

  useEffect(() => {
    setState(getOpenState());
    const t = setInterval(() => setState(getOpenState()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!state) {
    return <span className="eyebrow text-muted-foreground">Consulta nuestros horarios</span>;
  }

  const isOpen = state.status === "abierto";
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${
        variant === "dark" ? "text-night-foreground" : "text-foreground"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${isOpen ? "bg-accent" : "bg-primary"}`}
      />
      <strong className="font-semibold">{state.headline}</strong>
      <span aria-hidden="true" className="opacity-40">
        ·
      </span>
      <span className="opacity-75">{state.detail}</span>
    </span>
  );
}
