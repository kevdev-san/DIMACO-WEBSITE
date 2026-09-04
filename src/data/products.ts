export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  variantsNote: string;
};

// Hito 1 uses representative families. Hito 2 will validate variants, copy and authorized imagery.
export const products: readonly Product[] = [
  {
    slug: "varilla",
    name: "Varilla",
    categorySlug: "obra-negra",
    description: "Acero de refuerzo para aplicaciones de construcción.",
    variantsNote: "Consulta medidas y presentaciones disponibles.",
  },
  {
    slug: "mallas",
    name: "Mallas",
    categorySlug: "obra-negra",
    description: "Soluciones de refuerzo para diferentes necesidades de obra.",
    variantsNote: "Disponibles en diferentes presentaciones por confirmar.",
  },
  {
    slug: "tornilleria",
    name: "Tornillería",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Familia de elementos de fijación para diversos trabajos.",
    variantsNote: "Consulta tipos, medidas y presentaciones.",
  },
  {
    slug: "rejas-acero",
    name: "Rejas de acero",
    categorySlug: "ferreteria-fijacion-cercado",
    description: "Soluciones de acero para delimitación y protección.",
    variantsNote: "Consulta las presentaciones disponibles.",
  },
  {
    slug: "ptr-negro",
    name: "PTR negro",
    categorySlug: "aceros-estructurales",
    description: "Perfil tubular para trabajos estructurales y de fabricación.",
    variantsNote: "Consulta medidas y espesores disponibles.",
  },
  {
    slug: "viga-ipr",
    name: "Viga IPR",
    categorySlug: "aceros-estructurales",
    description: "Perfil de acero para requerimientos estructurales.",
    variantsNote: "Consulta medidas y presentaciones disponibles.",
  },
  {
    slug: "laminas",
    name: "Láminas",
    categorySlug: "laminas-cubiertas",
    description: "Familia de materiales para cubiertas y cerramientos.",
    variantsNote: "Tipos, medidas y disponibilidad sujetos a confirmación.",
  },
  {
    slug: "laminas-galvateja",
    name: "Láminas Galvateja",
    categorySlug: "laminas-cubiertas",
    description: "Solución de cubierta con apariencia tipo teja.",
    variantsNote: "Consulta medidas y presentaciones disponibles.",
  },
  {
    slug: "tinacos-accesorios",
    name: "Tinacos y accesorios",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Soluciones para almacenamiento y manejo de agua.",
    variantsNote: "Consulta capacidades y accesorios disponibles.",
  },
  {
    slug: "tubos-hidraulicos",
    name: "Tubos hidráulicos",
    categorySlug: "tuberias-tinacos-pvc",
    description: "Tubería para instalaciones hidráulicas.",
    variantsNote: "Consulta diámetros y presentaciones disponibles.",
  },
] as const;
