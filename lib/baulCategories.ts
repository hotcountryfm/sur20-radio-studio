export const BAUL_CATEGORIES = [
  {
    name: "¿Qué fue de...?",
    slug: "que-fue-de",
  },
  {
    name: "La historia detrás de la canción",
    slug: "historia-detras-cancion",
  },
  {
    name: "Discos que hicieron historia",
    slug: "discos-hicieron-historia",
  },
  {
    name: "Grandes conciertos",
    slug: "grandes-conciertos",
  },
  {
    name: "Un día como hoy",
    slug: "un-dia-como-hoy",
  },
  {
    name: "¿Sabías que...?",
    slug: "sabias-que",
  },
];

export function getCategorySlug(name: string) {
  const category = BAUL_CATEGORIES.find(
    (item) => item.name === name
  );

  return category?.slug ?? "";
}

export function getCategoryName(slug: string) {
  const category = BAUL_CATEGORIES.find(
    (item) => item.slug === slug
  );

  return category?.name ?? "";
}