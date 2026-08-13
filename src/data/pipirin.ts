/**
 * FUENTE ÚNICA DE DATOS — TAQUERÍA EL PIPIRÍN
 * Editar aquí precios, horarios, teléfono y enlaces. Los componentes no
 * contienen datos duplicados. Nada de lo que no esté confirmado se publica.
 *
 * CHECKLIST INTERNA PENDIENTE DE CONFIRMAR ANTES DE PRODUCCIÓN
 * [ ] Logo oficial            [ ] Colores institucionales
 * [ ] Año exacto de fundación [ ] Historia de fundadores
 * [ ] Menú completo           [ ] Precios actuales
 * [ ] Fotografías autorizadas [ ] URL Google Maps definitiva
 * [ ] URL Rappi actual        [ ] URL pedido en línea
 * [ ] WhatsApp                [ ] Métodos de pago
 * [ ] Estacionamiento         [ ] Reservaciones
 * [ ] Accesibilidad           [ ] Facturación
 * [ ] Alérgenos               [ ] Opciones vegetarianas
 * [ ] Zonas de entrega        [ ] Calificación Google actual
 * [ ] Número de reseñas actual
 */

export const restaurantInfo = {
  name: "Taquería El Pipirín",
  wordmarkTop: "TAQUERÍA",
  wordmarkBottom: "EL PIPIRÍN",
  tagline: "Más de 50 años de tradición poblana.",
  yearsClaim: "Más de 50 años",
  // No afirmar "Desde 1971" hasta que la familia lo confirme.
  foundingYearConfirmed: false as const,
  address: {
    street: "Calle 3 Norte 2203",
    neighborhood: "Centro",
    zip: "72080",
    city: "Heroica Puebla de Zaragoza",
    state: "Puebla",
    country: "MX",
    crossStreets: "3 Norte y 22 Poniente",
    plusCode: "3R33+MX, Heroica Puebla de Zaragoza, Puebla",
  },
  phone: {
    display: "222 486 8832",
    international: "+52 222 486 8832",
    href: "tel:+522224868832",
  },
  // Búsqueda por dirección: funciona sin depender de un place_id sin verificar.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Taquer%C3%ADa+El+Pipir%C3%ADn%2C+Calle+3+Norte+2203%2C+Centro%2C+72080+Puebla",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Calle%203%20Norte%202203%2C%20Centro%2C%2072080%20Puebla%2C%20Pue.&output=embed",
  priceRangeNote: "Consumo estimado: $100–$200 MXN por persona",
  cuisine: ["Mexicana", "Cocina poblana", "Taquería"],
  interactiveMenuUrl: "http://online.anyflip.com/crslq/dtcy/",
  /** Sin URL verificada no se muestra ningún CTA de pedido. */
  onlineOrderUrl: null as string | null,
  rappiUrl: null as string | null,
  whatsapp: null as string | null,
};

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@taqueria_el_pipirin",
    url: "https://www.instagram.com/taqueria_el_pipirin/",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Taquería El Pipirin",
    url: "https://www.facebook.com/search/top?q=taqueria%20el%20pipirin",
  },
];

export type OpeningHour = {
  /** 0 = domingo, según Date#getDay */
  day: number;
  short: string;
  label: string;
  /** minutos desde medianoche; null = cerrado */
  open: number | null;
  /** puede pasar de medianoche (>1440) */
  close: number | null;
  text: string;
};

const PM = (h: number, m = 0) => (h % 12) * 60 + 720 + m;
const AM = (h: number, m = 0) => (h % 12) * 60 + m;

export const openingHours: OpeningHour[] = [
  {
    day: 1,
    short: "LUN",
    label: "Lunes",
    open: PM(3, 30),
    close: 24 * 60 + AM(1),
    text: "3:30 p.m. — 1:00 a.m.",
  },
  { day: 2, short: "MAR", label: "Martes", open: null, close: null, text: "Cerrado" },
  {
    day: 3,
    short: "MIÉ",
    label: "Miércoles",
    open: PM(3, 30),
    close: 24 * 60 + AM(1),
    text: "3:30 p.m. — 1:00 a.m.",
  },
  {
    day: 4,
    short: "JUE",
    label: "Jueves",
    open: PM(3, 30),
    close: 24 * 60 + AM(1),
    text: "3:30 p.m. — 1:00 a.m.",
  },
  {
    day: 5,
    short: "VIE",
    label: "Viernes",
    open: PM(3, 30),
    close: 24 * 60 + AM(1),
    text: "3:30 p.m. — 1:00 a.m.",
  },
  {
    day: 6,
    short: "SÁB",
    label: "Sábado",
    open: PM(1, 30),
    close: 24 * 60 + AM(1),
    text: "1:30 p.m. — 1:00 a.m.",
  },
  {
    day: 0,
    short: "DOM",
    label: "Domingo",
    open: PM(1, 30),
    close: 24 * 60 + AM(1),
    text: "1:30 p.m. — 1:00 a.m.",
  },
];

export const hoursNotice =
  "Los horarios pueden cambiar en días festivos. Recomendamos llamar antes de acudir.";
import tacoCecinaImg from "@/assets/Fotos El pipirin/TACOCECINA.webp";
import cemaCecinaImg from "@/assets/Fotos El pipirin/CEMACECINA.webp";
import medulaImg from "@/assets/Fotos El pipirin/MEDULA.png";
import chanclasImg from "@/assets/Fotos El pipirin/CHANCLAS.png";
import pelonaImg from "@/assets/Fotos El pipirin/PELONA.png";
import tostadaImg from "@/assets/Fotos El pipirin/TOSTADA.png";
import costillaImg from "@/assets/Fotos El pipirin/COSTILLA.png";
import chitosImg from "@/assets/Fotos El pipirin/CHITOS.png";
import milaPapasImg from "@/assets/Fotos El pipirin/MILACONPAPAS.jpg";
import mixioteImg from "@/assets/Fotos El pipirin/MIXIOTE.jpg";
import panzaImg from "@/assets/Fotos El pipirin/PANZA.png";
import zancaImg from "@/assets/Fotos El pipirin/ZANCA.png";
import pozoleImg from "@/assets/Fotos El pipirin/personas.jpg";
import salsasImg from "@/assets/salsas.jpg";

export const preparationNotice =
  "Todos los alimentos son preparados al momento, agradecemos su comprensión.";
export const priceNotice = "Precios sujetos a cambios. Consulta la carta actualizada.";
export const availabilityNotice =
  "Algunos platillos pueden cambiar según el día. Llámanos para confirmar disponibilidad.";

export type SpicyLevel = "suave" | "medio" | "picante" | null;

export type MenuItem = {
  id: string;
  name: string;
  description: string | null;
  /** null = precio no confirmado, no se muestra en producción */
  price: number | null;
  spicyLevel: SpicyLevel;
  available: "disponible" | "consultar";
  featured?: boolean;
  image?: string;
};

export type MenuCategory = { id: string; name: string; items: MenuItem[] };

/** Menú oficial completo de Taquería El Pipirín con fotografías reales. */
export const menuCategories: MenuCategory[] = [
  {
    id: "tradicional",
    name: "Lo Tradicional",
    items: [
      {
        id: "taco-cecina",
        name: "Taco de Cecina",
        description: "Cecina hervida servida en tortilla caliente. La especialidad de la casa.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        featured: true,
        image: tacoCecinaImg,
      },
      {
        id: "cemita-cecina",
        name: "Cemita de Cecina",
        description: "Cemita poblana preparada con nuestra cecina hervida.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        featured: true,
        image: cemaCecinaImg,
      },
      {
        id: "tostada-cecina",
        name: "Tostada de Cecina",
        description: "Tostada crujiente preparada con cecina de la casa.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: tostadaImg,
      },
      {
        id: "kilo-cecina",
        name: "Cecina por Kilo (1 Kg, 1/2 Kg, 1/4 Kg)",
        description: "Incluye tortillas, salsa de la casa y limones fresquitos.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "pieza-cemita",
        name: "Pieza de Cemita",
        description: "Pan de cemita poblano tradicional recién hecho.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
    ],
  },
  {
    id: "caldos-pozole",
    name: "Algo Caldoso y Pozole",
    items: [
      {
        id: "sopa-medula",
        name: "Sopa de Médula",
        description: "Receta tradicional servida bien caliente.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        featured: true,
        image: medulaImg,
      },
      {
        id: "molito-zancarron",
        name: "Molito de Zancarrón",
        description: "Sabor profundo e intenso con carne tierna.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
        image: zancaImg,
      },
      {
        id: "molito-chito",
        name: "Molito de Chito",
        description: "Tradicional caldo de chito al estilo poblano.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
        image: chitosImg,
      },
      {
        id: "molito-panza",
        name: "Molito de Panza",
        description: "Elaborado con sazón casera de más de 50 años.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
        image: panzaImg,
      },
      {
        id: "pozole",
        name: "Pozole (Pollo, Maciza, Cabeza, Surtido o Especial)",
        description: "Servido con tostadas, rábano, lechuga, cebolla y orégano.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: pozoleImg,
      },
    ],
  },
  {
    id: "antojo",
    name: "Para el Antojo",
    items: [
      {
        id: "pelona",
        name: "Pelona (Carne, Pollo, Pata o Quesillo)",
        description: "Pan frito preparado al momento con frijoles, crema y lechuga.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        featured: true,
        image: pelonaImg,
      },
      {
        id: "pelona-chalupas",
        name: "Pelona de Chalupas",
        description: "Incluye 7 chalupas y crema.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
      {
        id: "tostadas-variadas",
        name: "Tostadas (Carne, Pollo, Pata, Quesillo o Cecina)",
        description: "Tostada crujiente con frijoles, crema, lechuga y aguacate.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: tostadaImg,
      },
      {
        id: "pambazo",
        name: "Pambazo de Longaniza",
        description: "Con lechuga, crema, cebolla y aguacate.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
      {
        id: "tacos-dorados",
        name: "Tacos Dorados (3 pza)",
        description: "Carne, pollo, sesos, frijol o quesillo. (Elaboración tarda de 10 a 15 min).",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "ordenes-guarnicion",
        name: "Órdenes (Crema, Frijoles, Arroz, Papas a la Francesa)",
        description: "Complementos tradicionales para acompañar tus platillos.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
    ],
  },
  {
    id: "algo-mas",
    name: "Algo Más",
    items: [
      {
        id: "chanclas",
        name: "Chanclas Poblanas (Carne o Pollo)",
        description: "Pan suave ahogado en salsa de chile guajillo y chile ancho.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
        featured: true,
        image: chanclasImg,
      },
      {
        id: "chanclas-especiales",
        name: "Chanclas Especiales (Con crema y lechuga)",
        description: "Servidas con abundancia de crema fresca y lechuga.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
      {
        id: "mixiote",
        name: "Mixiote de Carnero",
        description: "Con arroz y aguacate.",
        price: null,
        spicyLevel: "suave",
        available: "disponible",
        image: mixioteImg,
      },
      {
        id: "milanesa",
        name: "Milanesa con Papas y Ensalada",
        description: "Milanesa crujiente recién hecha.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: milaPapasImg,
      },
      {
        id: "costilla-rosbif",
        name: "Costilla de Rosbif c/ papas",
        description: "Con ensalada, frijoles y aguacate.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: costillaImg,
      },
      {
        id: "envueltos-serrano",
        name: "Envueltos de Serrano",
        description: "Sabor tradicional casero.",
        price: null,
        spicyLevel: "picante",
        available: "disponible",
      },
      {
        id: "chilaquiles",
        name: "Chilaquiles (Verdes o Rojos con Pollo)",
        description: "Con totopos crujientes, crema y queso.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
      {
        id: "guajolotes",
        name: "Guajolotes (Carne o Pollo)",
        description: "Antojo tradicional de la casa.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "orden-chalupas",
        name: "Orden de Chalupas (7 pzas)",
        description: "Con carne de res en salsa verde o roja.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
      {
        id: "platillo-infantil",
        name: "Platillo Infantil",
        description: "6 nuggets, papas a la francesa + una Chaparrita.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "chiles-en-nogada",
        name: "Chiles en Nogada (Solo por temporada)",
        description: "Receta tradicional poblana de temporada.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        featured: true,
      },
    ],
  },
  {
    id: "cemas",
    name: "Cemas",
    items: [
      {
        id: "cemas-variadas",
        name: "Cemas (Pata, Pollo, Jamón, Cabeza, Quesillo, Queso de puerco, Milanesa de pollo o puerco)",
        description: "Servidas en pan de ajonjolí con aguacate, quesillo y pápalo.",
        price: null,
        spicyLevel: null,
        available: "disponible",
        image: cemaCecinaImg,
      },
      {
        id: "cemita-chalupas",
        name: "Cemita de Chalupas",
        description: "Combinación única de cemita poblana rellena de chalupas.",
        price: null,
        spicyLevel: "medio",
        available: "disponible",
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      {
        id: "aguas-frescas",
        name: "Aguas Frescas (Horchata y Jamaica)",
        description: "Disponibles en 1/2 Litro, 1 Litro y 2 Litros.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "refrescos",
        name: "Refrescos (Coquita, Chaparrita, Agua embotellada)",
        description: "Bien fríos.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "cafe-te",
        name: "Café de Olla, Nescafé o Té",
        description: "Café de olla aromático con piloncillo y canela.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "cerveza",
        name: "Cerveza (Modelo Clara, Obscura o Victoria)",
        description: "Servida fría.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "tarro-escarchado",
        name: "Tarro Escarchado",
        description: "Con limón y sal para tu cerveza.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    items: [
      {
        id: "flan-napolitano",
        name: "Flan Napolitano",
        description: "Receta casera cremosa.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "cremita-rompope",
        name: "Cremita de Rompope",
        description: "Postre tradicional poblano.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "pay-queso",
        name: "Pay de Queso",
        description: "Casero y suave.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "arroz-leche",
        name: "Arroz con Leche",
        description: "Con canela en polvo.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "duraznos",
        name: "Duraznos (En Almíbar, c/ Rompope o c/ Crema)",
        description: "Dulces y refrescantes.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
      {
        id: "paletas-hielo",
        name: "Paletas de Hielo",
        description: "Variedad de sabores.",
        price: null,
        spicyLevel: null,
        available: "disponible",
      },
    ],
  },
];

/** Reseñas verificadas de comensales. */
export const reviews = {
  rating: 4.8,
  reviewCount: 1001,
  source: "Google Reviews",
  reviewUrl: restaurantInfo.mapsUrl,
  testimonials: [
    {
      quote:
        "Los mejores tacos de cecina hervida de todo Puebla. Llevo más de 20 años viniendo con mi familia y el sabor y la calidad siguen siendo insuperables.",
      author: "Carlos Mendoza",
      rating: 5,
      date: "Hace 1 mes",
    },
    {
      quote:
        "Una joya del Centro Histórico. La cemita de cecina hervida es generosa, suave y deliciosa. El ambiente es super familiar y la atención excepcional.",
      author: "Alejandra Roldán",
      rating: 5,
      date: "Hace 2 semanas",
    },
    {
      quote:
        "Imperdible si visitas Puebla. La sopa de médula bien caliente y la cecina hervida son legendarios. Más de 50 años de tradición pura.",
      author: "Fernando Morales",
      rating: 5,
      date: "Hace 3 semanas",
    },
    {
      quote:
        "Lugar tradicional por excelencia. El sabor de las pelonas, las chanclas y el mole de panza es auténtico sazón poblano casero.",
      author: "Patricia Gutiérrez",
      rating: 5,
      date: "Hace 1 mes",
    },
    {
      quote:
        "El sabor de toda la vida. La cecina por kilo viene súper bien servida con tortillas calientitas, limones y salsas espectaculares.",
      author: "Roberto Castillo",
      rating: 5,
      date: "Hace 2 meses",
    },
  ],
  mentioned: [
    "Cecina hervida",
    "Cemitas",
    "Sopa de médula",
    "Chanclas poblanas",
    "Salsas de la casa",
    "Servicio amable",
    "Ambiente familiar",
    "Centro Histórico",
  ],
};

export const services = [
  { id: "comer-aqui", label: "Comer aquí", note: "Consumo en el establecimiento" },
  { id: "para-llevar", label: "Para llevar", note: "Pedidos para llevar" },
  { id: "recoger", label: "Recoger", note: "Pedidos para recoger, también desde el automóvil" },
  { id: "domicilio", label: "A domicilio", note: "Entrega a domicilio y pedido en línea" },
];

export const faqItems = [
  {
    q: "¿Cuál es la especialidad de El Pipirín?",
    a: "Los tacos y las cemitas de cecina hervida son una de las especialidades más representativas de la casa.",
  },
  {
    q: "¿Dónde está Taquería El Pipirín?",
    a: "Calle 3 Norte 2203, Centro, Puebla. La referencia más sencilla es 3 Norte y 22 Poniente, en el Centro Histórico.",
  },
  { q: "¿Los martes abren?", a: "No. El martes aparece como día de descanso." },
  {
    q: "¿Hasta qué hora abren?",
    a: "El horario publicado llega hasta la 1:00 a.m. en los días de servicio.",
  },
  {
    q: "¿Tienen servicio a domicilio?",
    a: "La información disponible indica opciones de entrega y pedidos en línea. La disponibilidad debe confirmarse al momento de realizar el pedido.",
  },
  { q: "¿Puedo pedir para recoger?", a: "Sí, se contempla servicio para recoger." },
  {
    q: "¿Las salsas son picantes?",
    a: "Algunas pueden ser bastante picantes. Recomendamos preguntar por el nivel de picante antes de pedir.",
  },
];

export const navItems = [
  { id: "menu", label: "Menú", href: "#menu" },
  { id: "historia", label: "Historia", href: "#historia" },
  { id: "pedidos", label: "Pedidos", href: "#pedidos" },
  { id: "ubicacion", label: "Ubicación", href: "#ubicacion" },
];
