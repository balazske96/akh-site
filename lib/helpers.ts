export function getStreamingProviders(): IStreamingProvider[] {
  return [
    {
      name: "Spotify",
      link: "https://open.spotify.com/artist/6YVFO1kvJ7kxbYpbIZLXhJ",
      imageUrl: "/images/streaming-providers/spotify.webp",
    },
    {
      name: "Apple Music",
      link: "https://music.apple.com/us/artist/a-kir%C3%A1ly-halott/1331011092",
      imageUrl: "/images/streaming-providers/apple_music.webp",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/akiralyhalott",
      imageUrl: "/images/streaming-providers/youtube.webp",
    },
    {
      name: "Tidal",
      link: "https://listen.tidal.com/artist/9404749",
      imageUrl: "/images/streaming-providers/tidal.webp",
    },
  ];
}

export async function getFooterLinks(): Promise<ISiteLink[]> {
  return [
    { href: "/szervezoknek", displayName: "Szervezőknek" },
    { href: "/impresszum", displayName: "Impresszum" },
  ];
}

export function isValidURL(url: string): boolean {
  const urlRegex =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w%-]*)*(\?.*)?(#.*)?$/;
  return urlRegex.test(url);
}

export function isValidYouTubeVideoURL(url: string): boolean {
  const youtubeUrlRegex =
    /^https:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/;

  return youtubeUrlRegex.test(url);
}

export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  return slugRegex.test(slug);
}

export function convertStringToSlug(val: string): string {
  return val
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();
}
