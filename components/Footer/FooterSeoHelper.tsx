export default function FooterSeoHelper({
  socialMediaPlatforms,
}: {
  socialMediaPlatforms: ISocialMediaPlatform[];
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'A Király Halott',
    url: 'https://www.akiralyhalott.hu',
    sameAs: socialMediaPlatforms.map((platform) => platform.link),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
