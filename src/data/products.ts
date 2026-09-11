export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  variantsNote: string;
  image: string;
  brand?: string;
  specs?: readonly string[];
  featured?: boolean;
};

// Catálogo oficial DIMACO 2026 - Hito 2: Catálogo de productos completo
export const products: readonly Product[] = [
  // ==========================================
  // ALAMBRES, FIJACIÓN Y CERCADO (Página 2 del Catálogo)
  // ==========================================
  {
    slug: "alambre-de-puas",
    name: "Alambre de púas",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Alambre de acero galvanizado de alta resistencia para delimitación y cercado perimetral agrícola, ganadero e industrial.",
    variantsNote: "Disponible en rollos de alta resistencia de 300 m y 360 m en calibres comerciales.",
    image: "/images/products/alambre-puas.png",
    brand: "TYASA / Deacero",
    specs: ["Galvanizado de alta resistencia", "Púas de 4 puntas distribuidas uniformemente", "Rollos compactos de fácil desenrollo"],
    featured: true,
  },
  {
    slug: "grapas",
    name: "Grapas para cerco",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Grapas de acero galvanizado y accesorios de fijación para anclaje firme de alambres de púas sobre postes de madera o concreto.",
    variantsNote: "Consulta presentaciones en caja de 25 kg o por kilo según requerimiento de obra.",
    image: "/images/products/grapas.png",
    specs: ["Punta diamante para fácil inserción", "Acabado galvanizado anticorrosión", "Caja sellada o por kilogramo"],
  },
  {
    slug: "birlos-y-pijas",
    name: "Birlos y pijas",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Elementos de fijación mecánica, birlos roscados y pijas punta de broca para fijación de láminas, paneles y perfiles metálicos.",
    variantsNote: "Variedad de calibres, longitudes y cabezas hexagonales con arandela de sellado.",
    image: "/images/products/birlos-pijas.png",
    specs: ["Punta de broca autorroscante", "Arandela vulcanizada de neopreno", "Tratamiento zincado antioxidante"],
  },
  {
    slug: "clavos-paraguas",
    name: "Clavos paraguas",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Clavos de acero galvanizado con cabeza ancha tipo paraguas y arandela de sellado para montaje seguro de láminas sin filtraciones.",
    variantsNote: "Medidas desde 2\" hasta 3 1/2\" en cajas y empaques comerciales.",
    image: "/images/products/clavo-paraguas.png",
    specs: ["Cabeza amplia tipo paraguas", "Rondana de sello hermético", "Vástago estriado para máxima retención"],
  },
  {
    slug: "clavos-para-madera",
    name: "Clavos para madera",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Clavos estándar de acero al carbón para cimbra, tarimas, carpintería pesada y armado estructural en carpintería de obra.",
    variantsNote: "Disponibles con y sin cabeza en medidas de 1\" a 4\" por kilogramo o caja.",
    image: "/images/products/clavos-para-madera.png",
    specs: ["Acero de alto rendimiento", "Presentaciones con cabeza y sin cabeza", "Medidas de 1\" a 4\""],
  },
  {
    slug: "reja-acero",
    name: "Reja de acero (Rejacero)",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Sistema perimetral ornamental de paneles de alambre galvanizado plastificado con pintura termoendurecida de alta durabilidad.",
    variantsNote: "Paneles en alturas estándar (1.00 m, 1.50 m, 2.00 m, 2.50 m) con postes, grapas y abrazaderas.",
    image: "/images/products/reja-acero.png",
    brand: "PROLAMSA / Gerdau",
    specs: ["Alambre galvanizado plastificado", "Acabado verde o blanco arquitectónico", "Postes de anclaje y accesorios compatibles"],
    featured: true,
  },

  // ==========================================
  // ACEROS ESTRUCTURAL Y COMERCIAL (Páginas 3 y 4 del Catálogo)
  // ==========================================
  {
    slug: "perfiles-tubulares-zintro",
    name: "Perfiles tubulares zintro verde",
    categorySlug: "aceros-estructurales",
    description: "Perfiles de acero con recubrimiento zintro verde para cancelería, marcos, herrería y estructuras con exposición climática extrema.",
    variantsNote: "Secciones cuadradas y rectangulares en calibres C-18 y C-20 en tramos de 6.00 m.",
    image: "/images/products/perfil-tubular-zintro-verde.jpg",
    brand: "PROLAMSA / TYASA",
    specs: ["Recubrimiento anticorrosivo zintro", "Calibres C-18 y C-20", "Tramos estándar de 6.00 m"],
  },
  {
    slug: "tableros-zintro",
    name: "Tableros zintro",
    categorySlug: "aceros-estructurales",
    description: "Tableros de lámina galvanizada acanalada con acabado zintro para puertas, portones, cierres y mamparas metálicas de alta resistencia.",
    variantsNote: "Medidas exactas de catálogo: C-22 de 3x10, C-22 de 3x8, C-22 de 3x6 y C-22 de 3x3.",
    image: "/images/products/tablero-zintro-verde.jpg",
    brand: "PROLAMSA",
    specs: ["Calibre C-22 reforzado", "Medidas: 3x10, 3x8, 3x6 y 3x3 pies", "Acabado Zintro de gran durabilidad"],
    featured: true,
  },
  {
    slug: "ptr",
    name: "PTR (Negro y galvanizado)",
    categorySlug: "aceros-estructurales",
    description: "Perfil Tubular Rectangular y cuadrado de alta resistencia estructural para columnas, bastidores, chasis y naves industriales.",
    variantsNote: "Acabados en negro y galvanizado; calibres 14, 12, 10 y medidas desde 1\"x1\" hasta 4\"x4\".",
    image: "/images/products/ptr.png",
    brand: "PROLAMSA / GERDAU CORSA",
    specs: ["Acabados negro y galvanizado", "Secciones desde 1\"x1\" hasta 4\"x4\"", "Largo estándar de 6.00 m"],
    featured: true,
  },
  {
    slug: "monten",
    name: "Polín Montén (Pintado y galvanizado)",
    categorySlug: "aceros-estructurales",
    description: "Perfil de acero conformado en frío en forma de canal C para soporte de cubiertas, techumbres, pórticos y fachadas industriales.",
    variantsNote: "Disponibilidad en acabado galvanizado o pintado rojo anticorrosivo en calibres 14 y 16.",
    image: "/images/products/monten.png",
    brand: "TYASA / GERDAU CORSA",
    specs: ["Peraltes de 3\", 4\", 6\", 8\" y 10\"", "Calibres 14 y 16", "Acabado rojo anticorrosivo o galvanizado"],
    featured: true,
  },
  {
    slug: "angulos-y-soleras",
    name: "Ángulos y soleras de acero",
    categorySlug: "aceros-estructurales",
    description: "Perfiles de acero laminado en caliente en ángulo recto (L) y solera plana para herrería, marcos, ensambles y anclajes estructurales.",
    variantsNote: "Espesores de 1/8\" a 1/2\" y anchos comerciales de 1/2\" a 4\" en tramos de 6.10 m.",
    image: "/images/products/angulos-soleras.jpg",
    brand: "GERDAU CORSA / TYASA",
    specs: ["Norma ASTM A36", "Espesores desde 1/8\" hasta 1/2\"", "Tramos de 6.10 m"],
  },
  {
    slug: "redondo-y-cuadrados",
    name: "Redondo y cuadrados macizos",
    categorySlug: "aceros-estructurales",
    description: "Barras macizas lisas laminadas en caliente para forja, cancelería artesanal, pernos, anclajes y piezas mecánicas.",
    variantsNote: "Diámetros y lados desde 3/8\" hasta 1\" y superiores en barras de 6.00 m.",
    image: "/images/products/redondo-cuadrados.png",
    brand: "GERDAU CORSA",
    specs: ["Barras macizas lisas", "Medidas de 3/8\", 1/2\", 5/8\", 3/4\", 1\"", "Tramos de 6.00 m"],
  },
  {
    slug: "viga-ipr",
    name: "Viga IPR",
    categorySlug: "aceros-estructurales",
    description: "Viga estructural de patín ancho rolada en caliente para trabes maestras, columnas portantes y claros de gran envergadura.",
    variantsNote: "Peraltes y pesos nominales bajo normas ASTM A36 / ASTM A992 en largos de 6.10 m y 12.20 m.",
    image: "/images/products/viga-ipr.png",
    brand: "GERDAU CORSA / TYASA",
    specs: ["Normas ASTM A36 / A992", "Peraltes desde 4\" hasta 24\"", "Tramos de 6.10 m y 12.20 m"],
    featured: true,
  },
  {
    slug: "placas",
    name: "Placas de acero",
    categorySlug: "aceros-estructurales",
    description: "Placas de acero estructural al carbón para anclaje de columnas, placas base, cartabones de unión y aplicaciones de herrería pesada.",
    variantsNote: "Espesores desde 3/16\" hasta 1 1/2\" en hojas completas o cortes según plano de cálculo.",
    image: "/images/products/placas.jpg",
    brand: "TYASA / GERDAU CORSA",
    specs: ["Norma ASTM A36", "Espesores desde 3/16\" hasta 1 1/2\"", "Cortes y barrenados bajo especificación"],
  },
  {
    slug: "hss",
    name: "HSS (Hollow Structural Sections)",
    categorySlug: "aceros-estructurales",
    description: "Tubos estructurales de sección hueca pesada cuadrada y rectangular para diseño arquitectónico y columnas de alto tonelaje.",
    variantsNote: "Diversas secciones y espesores de pared bajo norma ASTM A500 Grado B en tramos de 6.00 m y 12.20 m.",
    image: "/images/products/hss.jpg",
    brand: "PROLAMSA / GERDAU CORSA",
    specs: ["Norma ASTM A500 Grado B", "Secciones cuadradas y rectangulares pesadas", "Mayor resistencia a flexotorsión"],
  },
  {
    slug: "tuberia-estructural",
    name: "Tubería estructural redonda",
    categorySlug: "aceros-estructurales",
    description: "Tubería de acero circular para pilotes, postes, cerchas, naves industriales y columnas de sección cilíndrica.",
    variantsNote: "Calibres comerciales y cédula 30/40 en diferentes diámetros nominales.",
    image: "/images/products/tuberia-estructural.jpg",
    brand: "PROLAMSA",
    specs: ["Perfil circular estructural", "Calibres y cédulas estándar", "Tramos de 6.00 m"],
  },
  {
    slug: "canal-u",
    name: "Canal U (CPS)",
    categorySlug: "aceros-estructurales",
    description: "Perfil laminado en caliente con sección transversal en forma de U para trabes secundarias, soportes y remolques.",
    variantsNote: "Peraltes desde 3\" hasta 12\" con alma y patines estandarizados en tramos de 6.10 m.",
    image: "/images/products/canal-u.jpg",
    brand: "GERDAU CORSA / TYASA",
    specs: ["Norma ASTM A36", "Peraltes desde 3\" hasta 12\"", "Tramos de 6.10 m y 12.20 m"],
  },

  // ==========================================
  // TUBERÍAS, TINACOS Y PVC (Página 5 del Catálogo)
  // ==========================================
  {
    slug: "tinacos-accesorios",
    name: "Tinacos y accesorios Rotoplas",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Tanques de almacenamiento de agua potable con tecnología antibacterial Expélit, equipados con multiconector, flotador y válvula.",
    variantsNote: "Capacidades de 450 L, 750 L, 1,100 L y 2,500 L con garantía de por vida Rotoplas.",
    image: "/images/products/tinaco-rotoplas-tricapa.jpg",
    brand: "ROTOPLAS",
    specs: ["Garantía de por vida Rotoplas", "Capa antibacterial Expélit", "Incluye kit de instalación completa"],
    featured: true,
  },
  {
    slug: "cisternas-accesorios",
    name: "Cisternas y accesorios Rotoplas",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Cisternas subterráneas de polietileno de alta densidad para reserva confiable de agua en residencias, hoteles e industrias.",
    variantsNote: "Capacidades de 1,200 L, 2,800 L, 5,000 L y 10,000 L con equipo de succión y bombeo opcional.",
    image: "/images/products/cisterna-rotoplas-azul.jpg",
    brand: "ROTOPLAS",
    specs: ["Instalación subterránea reforzada", "Polietileno 100% virgen", "Capacidades de 1,200 L a 10,000 L"],
    featured: true,
  },
  {
    slug: "tubos-sanitarios",
    name: "Tubos sanitarios PVC",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Tubería de PVC rígido para desalojo seguro de aguas negras y pluviales por gravedad en obras residenciales y comerciales.",
    variantsNote: "Diámetros de 1 1/2\", 2\", 3\", 4\" y 6\" en tramos estándar de 6.00 m.",
    image: "/images/products/tubo-sanitario-pvc.png",
    specs: ["Norma sanitaria NMX", "Campana y espiga para cementar", "Tramos de 6.00 m"],
  },
  {
    slug: "tubos-hidraulicos",
    name: "Tubos hidráulicos PVC",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Tubería de PVC para conducción de agua potable a presión en acometidas, redes de bombeo e instalaciones hidráulicas.",
    variantsNote: "Cédula 40 y sistemas métricos / RD en diámetros de 1/2\" hasta 4\".",
    image: "/images/products/tubos-hidraulicos.png",
    specs: ["Cédula 40 y RD estándar", "Alta resistencia a presión hidrostática", "Tramos de 6.00 m"],
  },
  {
    slug: "conexiones-pvc",
    name: "Conexiones PVC y CPVC",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Codos, tes, coples, adaptadores, reducciones y tuercas unión para sistemas sanitarios, hidráulicos y agua caliente CPVC.",
    variantsNote: "Disponibles en todas las medidas estándar compatibles con la tubería de catálogo.",
    image: "/images/products/conexiones-pvc.png",
    brand: "ROTOPLAS",
    specs: ["Línea sanitaria, hidráulica y CPVC", "Sellado hermético y seguro", "Variedad completa de accesorios"],
  },

  // ==========================================
  // LÁMINAS Y CUBIERTAS (Páginas 3 y 7 del Catálogo)
  // ==========================================
  {
    slug: "lamina-galvateja",
    name: "Láminas Galvateja",
    categorySlug: "laminas-cubiertas",
    description: "Cubierta de acero galvanizado esmaltado con diseño y relieve tipo teja tradicional, combinando estética de teja y durabilidad de acero.",
    variantsNote: "Calibre 26 en largos estándar y especiales en acabado rojo terracota.",
    image: "/images/products/lamina-galvateja-terracota.jpg",
    brand: "Ternium / DIMACO",
    specs: ["Calibre 26 de alta resistencia", "Acabado rojo terracota esmaltado", "Aislamiento y estética campestre"],
    featured: true,
  },
  {
    slug: "lamina-acanalada",
    name: "Láminas acanaladas Zintro y Pintro",
    categorySlug: "laminas-cubiertas",
    description: "Láminas de acero acanalado ondulado y rectangular para techumbres, cobertizos, naves comerciales y bardas perimetrales.",
    variantsNote: "Acabados galvanizado (Zintro) y prepintado blanco/arena (Pintro) en diversos calibres y longitudes.",
    image: "/images/products/lamina-acanalada.jpg",
    brand: "Ternium / TYASA",
    specs: ["Perfiles R-101, R-72 y ondulado O-100", "Acabados Zintro y Pintro", "Largos de 2.44 m hasta 12.00 m"],
    featured: true,
  },

  // ==========================================
  // MATERIALES PARA OBRA NEGRA (Estructura base / Marcas de Fachada)
  // ==========================================
  {
    slug: "varilla-corrugada",
    name: "Varilla corrugada",
    categorySlug: "obra-negra",
    description: "Barras de acero de refuerzo corrugado grado 42 para elementos estructurales de concreto armado: losas, zapatas, columnas y trabes.",
    variantsNote: "Grado 42 en calibres del #3 (3/8\") hasta #8 (1\") en tramos de 12.00 m.",
    image: "/images/products/varilla-corrugada.jpg",
    brand: "TYASA / Deacero",
    specs: ["Norma NMX-B-506 Grado 42", "Calibres #3 a #8", "Tramos de 12.00 m o doblados"],
    featured: true,
  },
  {
    slug: "malla-electrosoldada",
    name: "Malla electrosoldada",
    categorySlug: "obra-negra",
    description: "Malla de alambre de alta resistencia electrosoldado para refuerzo contra agrietamiento por temperatura en firmes, losas y pavimentos.",
    variantsNote: "Rollos y hojas planas en cuadrículas estándar 6-6/10-10, 6-6/8-8, 6-6/6-6 y 6-6/4-4.",
    image: "/images/products/malla-electrosoldada.jpg",
    brand: "Deacero / TYASA",
    specs: ["Acero de alta resistencia grado 50", "Cuadrículas estándar 6x6", "Rollos de 100 m² y hojas planas"],
  },
  {
    slug: "alambre-recocido",
    name: "Alambre recocido",
    categorySlug: "obra-negra",
    description: "Alambre suave de acero negro recocido al horno para amarre ágil y resistente de varillas y armaduras de refuerzo.",
    variantsNote: "Calibre 16 comercial disponible en rollos de 50 kg y atados menores.",
    image: "/images/products/alambre-recocido.jpg",
    brand: "Deacero / TYASA",
    specs: ["Calibre 16 estándar", "Gran ductilidad sin romperse", "Rollos compactos para obra"],
  },
] as const;
