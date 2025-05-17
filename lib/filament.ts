import { cmsBaseUrl } from '@/constants';

export async function fetchFilamentResource(
  url: string,
  tags: string[] = [],
  cache?: RequestCache
) {
  const response = await fetch(`${cmsBaseUrl}/api${url}`, {
    next: { tags },
    cache,
    headers: { Accept: 'application/json' },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText + ' - ' + `${cmsBaseUrl}/api${url}`);
  }

  return await response.json();
}

function convertFilamentConcertToFrontendConcert(
  concert: IFilamentConcert
): IConcert {
  const formattedDate = new Date(concert.date).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    ...concert,
    date: formattedDate,
    venue: concert.location,
    displayName: concert.display_name,
    ticketLink: concert.ticket_link,
    eventLink: concert.event_link,
    image: {
      url: concert.image_absolute_url,
      width: undefined,
      height: undefined,
      mobileUrl: undefined,
      desktopUrl: undefined,
      tabletUrl: undefined,
    },
  };
}

export async function getConcerts(): Promise<IConcert[]> {
  const data: IFilamentConcert[] = await fetchFilamentResource('/concerts', [
    'concerts',
  ]);

  return data.map(convertFilamentConcertToFrontendConcert);
}

export async function getConcertsBySlug(slug: string) {
  const data: IFilamentConcert = await fetchFilamentResource(
    `/concerts/${slug}`,
    [`concerts-${slug}`]
  );

  return convertFilamentConcertToFrontendConcert(data);
}

export async function getSecretLinks(password?: string) {
  const response = await fetch(`${cmsBaseUrl}/api/secret-links?p=${password}`, {
    next: { tags: [`secrets-${password ?? ''}`] },
  });

  if (response.status !== 200) {
    return [];
  }

  return ((await response.json()) as IFilamentSecretDocument[]).map(
    (secretDocs) =>
      ({
        display: secretDocs.display_name,
        link: secretDocs.signed_url,
      }) as ISecretInformation
  );
}
