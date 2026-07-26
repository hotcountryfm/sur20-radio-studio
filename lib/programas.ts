export interface Programa {
  id: number;
  nombre: string;
  locutor: string;
  descripcion: string;
  imagen: string;
  urlLocutor: string;
}

export const programas: Programa[] = [
  {
    id: 1,
    nombre: "Matinales SUR20 RADIO",
    locutor: "JM. Torres",
    descripcion: "La mejor forma de comenzar el día con música y entretenimiento.",
    imagen: "/locutores/jm-torres.png",
    urlLocutor: "/locutores/jm-torres",
  },
  {
    id: 2,
    nombre: "Todo Pop Español",
    locutor: "JM. Torres",
    descripcion: "Los mejores éxitos del pop español de todas las épocas.",
    imagen: "/locutores/jm-torres.png",
    urlLocutor: "/locutores/jm-torres",
  },
  {
    id: 3,
    nombre: "The Disco Experience",
    locutor: "George",
    descripcion: "Una selección de la mejor música Disco y Dance.",
    imagen: "/locutores/GORGE.png",
    urlLocutor: "/locutores/george",
  },
  {
    id: 4,
    nombre: "Los Gigantes del Pasado",
    locutor: "JR. Néstor Luis",
    descripcion: "Los grandes éxitos de los años 80 y 90.",
    imagen: "/locutores/logo JR nestor.jpg",
    urlLocutor: "/locutores/jr-nestor-luis",
  },
  {
    id: 5,
    nombre: "El Baúl de los Recuerdos",
    locutor: "Dora",
    descripcion: "La música que nunca pasa de moda.",
    imagen: "/locutores/dora.png",
    urlLocutor: "/locutores/dora",
  },
];