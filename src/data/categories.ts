export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export const categories: readonly Category[] = [
  {
    slug: "obra-negra",
    name: "Materiales para obra negra",
    shortName: "Obra negra",
    description: "Familias esenciales para cimentación, refuerzo y construcción.",
  },
  {
    slug: "ferreteria-fijacion-cercado",
    name: "Ferretería, fijación y cercado",
    shortName: "Ferretería",
    description: "Elementos de unión, fijación y soluciones para cercado.",
  },
  {
    slug: "aceros-estructurales",
    name: "Aceros estructurales y comerciales",
    shortName: "Aceros",
    description: "Perfiles y piezas para aplicaciones estructurales y comerciales.",
  },
  {
    slug: "laminas-cubiertas",
    name: "Láminas y cubiertas",
    shortName: "Láminas",
    description: "Soluciones para cubiertas en distintas aplicaciones constructivas.",
  },
  {
    slug: "tuberias-tinacos-pvc",
    name: "Tuberías, tinacos y PVC",
    shortName: "Tuberías y PVC",
    description: "Conducción, conexiones y almacenamiento de agua.",
  },
] as const;
