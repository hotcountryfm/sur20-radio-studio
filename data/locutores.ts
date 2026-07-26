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
    programa: "The Disco Experience",
    descripcion:
      "Desde Londres comparte la mejor música y toda la pasión por la radio con los oyentes de SUR20 RADIO.",
    imagen: "/locutores/GORGE.png",
    urlPrograma: "/locutores/george",
  },
  {
    id: 2,
    nombre: "JR. Néstor Luis",
    pais: "Estados Unidos",
    bandera: "🇺🇸",
    ciudad: "Texas",
    programa: "Los Gigantes del Pasado",
    descripcion:
      "Un recorrido por los grandes éxitos de los años 80 y 90.",
    imagen: "/locutores/logo JR nestor.jpg",
    urlPrograma: "/locutores/jr-nestor-luis",
  },
  {
    id: 3,
    nombre: "Dora",
    pais: "España",
    bandera: "🇪🇸",
    ciudad: "Bilbao",
    programa: "El Baúl de los Recuerdos",
    descripcion:
      "La música que nunca pasa de moda.",
    imagen: "/locutores/dora.png",
    urlPrograma: "/locutores/dora",
  },
  {
    id: 4,
    nombre: "JM. Torres",
    pais: "España",
    bandera: "🇪🇸",
    ciudad: "Bilbao",
    programa: "Matinales SUR20 RADIO · Todo Pop Español",
    descripcion:
      "Muy pronto con nosotros.",
    imagen: "/locutores/jm-torres.png",
    urlPrograma: "/locutores/jm-torres",
  },
];