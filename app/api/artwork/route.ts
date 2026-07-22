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
  y="392"
  width="512"
  height="120"
  fill="rgba(0,0,0,0.82)"
/>

<image
  href="${logoData}"
  x="18"
  y="420"
  width="72"
  height="72"
/>

<text
  x="105"
  y="445"
  fill="white"
  font-size="50"
  font-family="Arial"
  font-weight="900">
  SUR20 RADIO
</text>

<text
  x="107"
  y="482"
  fill="#ff4040"
  font-size="28"
  font-family="Arial"
  font-weight="900">
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