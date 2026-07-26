import Image from "next/image";
import Link from "next/link";

interface ProgramaCardProps {
  nombre: string;
  locutor: string;
  descripcion: string;
  imagen: string;
  urlLocutor: string;
}

export default function ProgramaCard({
  nombre,
  locutor,
  descripcion,
  imagen,
  urlLocutor,
}: ProgramaCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-all duration-300">
      <div className="relative h-72">
        <Image
          src={imagen}
          alt={locutor}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{nombre}</h2>

        <p className="text-red-400 font-semibold mb-3">
          Presenta: {locutor}
        </p>

        <p className="text-gray-300 mb-6">
          {descripcion}
        </p>

        <div className="flex gap-3">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Escuchar
          </Link>

          <Link
            href={urlLocutor}
            className="border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition"
          >
            Ver locutor
          </Link>
        </div>
      </div>
    </div>
  );
}