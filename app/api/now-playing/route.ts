export async function GET() {
  try {
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

    return Response.json({
      artist,
      song,
      title,
      server: source.server_name,
      bitrate: source.bitrate,
      description: source.server_description,
      online: true,
    });

  } catch {

    return Response.json({
      artist: "",
      song: "",
      online: false,
    });

  }
}