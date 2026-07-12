export async function getAlbumCover(
  artist: string,
  song: string
): Promise<string | null> {
  try {
    const query = encodeURIComponent(`${artist} ${song}`);

    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&entity=song&limit=1`
    );

    const data = await res.json();

    if (!data.results?.length) {
      return null;
    }

    return data.results[0].artworkUrl100.replace(
      "100x100",
      "600x600"
    );
  } catch (err) {
    console.error(err);
    return null;
  }
}