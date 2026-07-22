export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const cover = searchParams.get("cover");

  if (!cover) {
    return new Response("Falta el parámetro cover", { status: 400 });
  }

  // Descargar la portada
  const imageResponse = await fetch(cover, {
    cache: "no-store",
  });

  if (!imageResponse.ok) {
    return new Response("No se pudo descargar la portada", { status: 500 });
  }

  const buffer = await imageResponse.arrayBuffer();
  const mime = imageResponse.headers.get("content-type") ?? "image/jpeg";
  const base64 = Buffer.from(buffer).toString("base64");
  const imageData = `data:${mime};base64,${base64}`;

  // Descargar el logo de SUR20 RADIO
  const logoResponse = await fetch(
    new URL("/icons/icon-512.png", request.url),
    {
      cache: "force-cache",
    }
  );

  if (!logoResponse.ok) {
    return new Response("No se pudo cargar el logo", { status: 500 });
  }

  const logoBuffer = await logoResponse.arrayBuffer();
  const logoBase64 = Buffer.from(logoBuffer).toString("base64");
  const logoData = `data:image/png;base64,${logoBase64}`;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">

  <!-- Portada -->
  <image
    href="${imageData}"
    x="0"
    y="0"
    width="512"
    height="512"
  />

  <!-- Banda inferior -->
  <rect
    x="0"
    y="422"
    width="512"
    height="90"
    fill="rgba(0,0,0,0.78)"
  />

  <!-- Logo -->
  <image
    href="${logoData}"
    x="15"
    y="430"
    width="70"
    height="70"
  />

  <!-- Nombre de la emisora -->
  <text
    x="100"
    y="476"
    fill="white"
    font-size="46"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900">
    SUR20 RADIO
  </text>

</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store",
    },
  });
}