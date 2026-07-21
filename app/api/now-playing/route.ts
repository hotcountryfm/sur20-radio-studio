export async function GET() {
  try {
    // Obtener datos de Icecast
    const response = await fetch(
      "http://hoth.alonhosting.com:5430/status-json.xsl",
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    const source = data.icestats.source;

    const title = source.title ?? "";

    const parts = title.split(" - ");

    const artist = parts[0]?.trim() ?? "";

    const song = parts.slice(1).join(" - ").trim();

    // Imagen por defecto
    let cover = "/icons/icon-512.png";

    // Buscar portada en iTunes
    if (artist && song) {
      try {
        const query = encodeURIComponent(`${artist} ${song}`);

        const itunes = await fetch(
          `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`,
          {
            cache: "no-store",
          }
        );

        const results = await itunes.json();

        if (results.resultCount > 0) {
          cover =
            results.results[0].artworkUrl100.replace(
              "100x100bb",
              "512x512bb"
            );
        }
      } catch {
        // Si falla iTunes usamos el logo de SUR20 RADIO
      }
    }

    return Response.json({
      artist,
      song,
      title,
      cover,
      server: source.server_name,
      bitrate: source.bitrate,
      description: source.server_description,
      online: true,
    });
  } catch {
    return Response.json({
      artist: "",
      song: "",
      cover: "/icons/icon-512.png",
      online: false,
    });
  }
}