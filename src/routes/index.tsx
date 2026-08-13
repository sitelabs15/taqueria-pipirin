import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/pipirin/Header";
import { Hero } from "@/components/pipirin/Hero";
import { QuickInfoBar } from "@/components/pipirin/QuickInfoBar";
import { SpecialtySection } from "@/components/pipirin/SpecialtySection";
import { FeaturedDishes } from "@/components/pipirin/FeaturedDishes";
import { MenuSection } from "@/components/pipirin/MenuSection";
import { StorySection } from "@/components/pipirin/StorySection";
import { GallerySection } from "@/components/pipirin/GallerySection";
import { NightSection } from "@/components/pipirin/NightSection";
import { ServicesSection } from "@/components/pipirin/ServicesSection";
import { ReviewsSection } from "@/components/pipirin/ReviewsSection";
import { LocationSection } from "@/components/pipirin/LocationSection";
import { FaqSection } from "@/components/pipirin/FaqSection";
import { FinalCta } from "@/components/pipirin/FinalCta";
import { Footer } from "@/components/pipirin/Footer";
import { MobileStickyActions } from "@/components/pipirin/MobileStickyActions";
import { PromoModal } from "@/components/pipirin/PromoModal";
import { faqItems, openingHours, restaurantInfo } from "@/data/pipirin";

const TITLE = "Taquería El Pipirín | Tacos y cemitas de cecina en Puebla";
const DESCRIPTION =
  "Tacos, cemitas de cecina hervida y antojitos poblanos en Taquería El Pipirín, una tradición de más de 50 años en el Centro Histórico de Puebla. Menú, horarios y ubicación.";

const dayNames: Record<number, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const toTime = (minutes: number) => {
  const m = minutes % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurantInfo.name,
  description: DESCRIPTION,
  telephone: restaurantInfo.phone.international,
  servesCuisine: restaurantInfo.cuisine,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurantInfo.address.street,
    addressLocality: restaurantInfo.address.city,
    addressRegion: restaurantInfo.address.state,
    postalCode: restaurantInfo.address.zip,
    addressCountry: restaurantInfo.address.country,
  },
  areaServed: "Centro Histórico, Puebla",
  sameAs: [
    "https://www.instagram.com/taqueria_el_pipirin/",
  ],
  openingHoursSpecification: openingHours
    .filter((h) => h.open !== null && h.close !== null)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[h.day]}`,
      opens: toTime(h.open!),
      closes: toTime(h.close!),
    })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Taquería El Pipirín | Tradición poblana" },
      {
        property: "og:description",
        content:
          "Tacos, cemitas de cecina hervida y antojitos poblanos en el Centro Histórico de Puebla.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.placename", content: "Puebla, México" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
});

import pueblaImg1 from "@/assets/Puebla/228103-Puebla-Province.png";
import pueblaImg2 from "@/assets/Puebla/zocolo-at-dawn-520916146-59a8d296396e5a001034e1a2.png";
import pueblaImg3 from "@/assets/Puebla/1960005-puebla-cathedral-in-puebla-historic-center-and-activities.png";
import pueblaImg4 from "@/assets/Puebla/228611-Puebla-Cathedral.png";
import pueblaImg5 from "@/assets/Puebla/traffic-on-street-of-downtown-of-puebla-puebla-state-mexico-on-tuesday-june-25-2024-mexico.png";
import pueblaImg6 from "@/assets/Puebla/228612-Puebla-Cathedral.png";
import pueblaImg7 from "@/assets/Puebla/6.png";
import pueblaImg8 from "@/assets/Puebla/8.png";
import pueblaImg9 from "@/assets/Puebla/10.png";
import pueblaImg10 from "@/assets/Puebla/OIP.png";

function StackCard({
  zIndex,
  bgImage,
  bgColor = "bg-[#161522]",
  overlayClass = "bg-[#161522]/80",
  children,
}: {
  zIndex: number;
  bgImage: string;
  bgColor?: string;
  overlayClass?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ zIndex }}
      className={`relative md:sticky md:top-0 -mt-6 md:mt-0 overflow-hidden rounded-t-[28px] md:rounded-t-[36px] border-t border-border-strong/60 ${bgColor} shadow-[0_-16px_40px_rgba(0,0,0,0.9)]`}
    >
      {/* Fotografía de Puebla de fondo visible en segundo plano */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-35 filter brightness-90 contrast-125 saturate-60 scale-105"
        />
        {/* Tinte translúcido para contraste óptimo */}
        <div className={`absolute inset-0 ${overlayClass} backdrop-blur-[0.5px]`} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Index() {
  return (
    <>
      <PromoModal />
      <Header />
      <main className="relative bg-night">
        <div className="sticky top-0 z-[10] overflow-hidden">
          <Hero />
        </div>

        <StackCard zIndex={20} bgImage={pueblaImg1}>
          <QuickInfoBar />
        </StackCard>

        <StackCard zIndex={30} bgImage={pueblaImg2}>
          <SpecialtySection />
        </StackCard>

        <StackCard zIndex={40} bgImage={pueblaImg3}>
          <FeaturedDishes />
        </StackCard>

        <StackCard zIndex={50} bgImage={pueblaImg4}>
          <MenuSection />
        </StackCard>

        <StackCard zIndex={60} bgImage={pueblaImg5}>
          <StorySection />
        </StackCard>

        <StackCard zIndex={70} bgImage={pueblaImg6}>
          <GallerySection />
        </StackCard>

        <StackCard zIndex={80} bgImage={pueblaImg7}>
          <NightSection />
        </StackCard>

        <StackCard zIndex={90} bgImage={pueblaImg8}>
          <ServicesSection />
        </StackCard>

        <StackCard zIndex={100} bgImage={pueblaImg9}>
          <ReviewsSection />
        </StackCard>

        <StackCard zIndex={110} bgImage={pueblaImg10}>
          <LocationSection />
        </StackCard>

        <StackCard zIndex={120} bgImage={pueblaImg2}>
          <FaqSection />
        </StackCard>

        <StackCard zIndex={130} bgImage={pueblaImg5} bgColor="bg-primary" overlayClass="bg-primary/90">
          <FinalCta />
        </StackCard>
      </main>
      <Footer />
      <MobileStickyActions />
    </>
  );
}

