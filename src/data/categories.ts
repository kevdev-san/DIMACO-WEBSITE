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
    description: "Alambre de púas, grapas, tornillería, clavos y sistemas de rejas perimetrales de alta durabilidad.",
  },
  {
    slug: "aceros-estructurales",
    name: "Aceros estructurales y comerciales",
    shortName: "Aceros",
    description: "Perfiles tubulares zintro, PTR, polín montén, vigas IPR, placas, HSS, canal U y redondos macizos.",
  },
  {
    slug: "tuberias-tinacos-pvc",
    name: "Tuberías, tinacos y PVC",
    shortName: "Tuberías y Tinacos",
    description: "Soluciones de almacenamiento Rotoplas, cisternas, tubería sanitaria, hidráulica y conexiones completas.",
  },
  {
    slug: "laminas-cubiertas",
    name: "Láminas y cubiertas",
    shortName: "Láminas",
    description: "Láminas acanaladas zintro, tableros metálicos y cubiertas galvateja para techumbres y fachadas.",
  },
  {
    slug: "obra-negra",
    name: "Materiales para obra negra",
    shortName: "Obra negra",
    description: "Acero de refuerzo, varilla corrugada grado 42, mallas electrosoldadas y alambre recocido de amarre.",
  },
] as const;

