export interface Locutor {
  id: number;
  nombre: string;
  pais: string;
  bandera: string;
  ciudad: string;
  programa: string;
  descripcion: string;
  imagen: string;
  urlPrograma: string;
}

export const locutores: Locutor[] = [
  {
    id: 1,
    nombre: "George",
    pais: "Reino Unido",
    bandera: "🇬🇧",
    ciudad: "Londres",
    programa: "Próximamente",
    descripcion:
      "Desde Londres comparte la mejor música y toda la pasión por la radio con los oyentes de SUR20 RADIO.",
    imagen: "/locutores/GORGE.png",
    urlPrograma: "#",
  },
  {
    id: 2,
    nombre: "JR. Néstor Luis",
    pais: "Estados Unidos",
    bandera: "🇺🇸",
    ciudad: "Texas",
    programa: "Los Gigantes del Pasado",
    descripcion:
      "Un recorrido por los grandes éxitos de los años 80 y 90 que siguen formando parte de la banda sonora de nuestras vidas.",
    imagen: "/locutores/logo JR nestor.jpg",
    urlPrograma: "/gigantes",
  },
];