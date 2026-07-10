import { PROGRAMS } from "./programs";

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getCurrentProgram() {
  const now = new Date();

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  for (const program of PROGRAMS) {
    let start = toMinutes(program.start);
    let end = toMinutes(program.end);

    // Programa que pasa de las 00:00
    if (end < start) {
      end += 24 * 60;

      if (currentMinutes < start) {
        if (currentMinutes + 24 * 60 <= end) {
          return program;
        }
      }
    }

    if (currentMinutes >= start && currentMinutes <= end) {
      return program;
    }
  }

  return {
    title: "Programación Musical",
    description:
      "Los mejores éxitos de los años 80, 90 y 2000 durante las 24 horas.",
    icon: "🎵",
  };
}