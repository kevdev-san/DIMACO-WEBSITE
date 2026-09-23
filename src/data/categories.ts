export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export const categories: readonly Category[] = [
  {
    slug: "ferreteria-fijacion-cercado",
    name: "Alambres, fijación y cercado",
    shortName: "Alambres y cercado",
    description: "Soluciones integrales de fijación, delimitación y seguridad perimetral para proyectos agrícolas, residenciales e industriales.",
  },
  {
    slug: "aceros-estructurales",
    name: "Aceros estructurales y comerciales",
    shortName: "Aceros",
    description: "Vigas, perfiles tubulares, polines y aceros de alta resistencia para herrería, edificación y estructuras pesadas.",
  },
  {
    slug: "tuberias-tinacos-pvc",
    name: "Tuberías, tinacos y PVC",
    shortName: "Tuberías y Tinacos",
    description: "Sistemas completos para conducción hidráulica, sanitaria y almacenamiento de agua potable.",
  },
  {
    slug: "laminas-cubiertas",
    name: "Láminas y cubiertas",
    shortName: "Láminas",
    description: "Cubiertas metálicas acanaladas y soluciones de protección para techumbres comerciales, residenciales y bodegas.",
  },
  {
    slug: "obra-negra",
    name: "Materiales para obra negra",
    shortName: "Obra negra",
    description: "Aceros de refuerzo, varilla corrugada, mallas y alambres indispensables para cimentación, armado y estructuras de concreto.",
  },
] as const;

