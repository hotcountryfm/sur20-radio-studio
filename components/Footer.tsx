import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div className="flex items-start gap-4">
            <Image
              src="/logo.png"
              alt="SUR20 Radio"
              width={80}
              height={80}
            />

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                SUR20 RADIO
              </h3>

              <p className="text-gray-400 mt-2">
                Tu compañía, tu voz
              </p>

              <p className="text-gray-500 text-sm mt-4">
                Música de los 80, 90 y 2000 durante las 24 horas.
              </p>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/">Inicio</Link>
              </li>

              <li>
                <Link href="/programacion">Programación</Link>
              </li>

              <li>
                <Link href="#">Noticias</Link>
              </li>

              <li>
                <Link href="#">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Emisión */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4">
              Emisión en Directo
            </h4>

            <p className="text-gray-400">
              Escúchanos las 24 horas del día.
            </p>

            <a
              href="http://hoth.alonhosting.com:5430/stream"
              target="_blank"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-bold"
            >
              ▶ Escuchar
            </a>
          </div>

        </div>

        <div className="border-t border-yellow-500/20 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 SUR20 RADIO · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}