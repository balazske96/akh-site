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
