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

  const mime =
    imageResponse.headers.get("content-type") ?? "image/jpeg";

  const base64 = Buffer.from(buffer).toString("base64");

  const imageData = `data:${mime};base64,${base64}`;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">

  <image
    href="${imageData}"
    width="512"
    height="512"/>

  <rect
    x="0"
    y="420"
    width="512"
    height="92"
    fill="#000"
    fill-opacity="0.75"/>

  <image
    href="/icons/icon-512.png"
    x="15"
    y="430"
    width="64"
    height="64"/>

  <text
    x="95"
    y="470"
    font-size="30"
    fill="white"
    font-family="Arial">
    SUR20 RADIO
  </text>

  <text
    x="95"
    y="500"
    font-size="20"
    fill="#ff4444"
    font-family="Arial">
    ● EN DIRECTO
  </text>

</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store",
    },
  });
}