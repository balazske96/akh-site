import {convertDateStringToHumanReadableString} from "@/lib/helpers";
import {getConcertBySlug} from "@/lib/concert";
import {getConcertSlugs} from "@/lib/concert";
import {headers} from "next/headers";
import Image from "next/image";
import {LinkButton} from "@/components/Button";
import logo from "@/public/images/navbar-logo.webp";
import {notFound} from "next/navigation";

export const dynamicParams = false;
export const revalidate = 1200;

export async function generateStaticParams() {
    return await getConcertSlugs();
}

interface IPageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({params}: IPageProps) {
    const reqHeaders = await headers();
    const origin = reqHeaders.get('origin') || `${reqHeaders.get('x-forwarded-proto')}://${reqHeaders.get('host')}`;
    const {slug} = await params;
    const concert = await getConcertBySlug(slug);

    if (!concert) throw notFound();

    const {
        image,
        venue,
        date,
        city,
        address,
        displayName,
        eventLink,
        ticketLink,
    } = concert;

    let jsonLd: object = {
        '@context': 'https://schema.org',
        '@type': 'MusicEvent',
        name: `A Király Halott koncert | ${displayName}`,
        startDate: `${date}`,
        location: {
            "@type": "Place",
            name: `${venue}`,
            address: {
                "@type": "PostalAddress",
                addressLocality: {city},
                streetAddress: {address},
                addressCountry: "HU"
            }
        },
        image: `${origin}${image.url}`,
    }

    if (ticketLink) {
        jsonLd = {
            ...jsonLd,
            offers: {
                offers: {
                    "@type": "Offer",
                    url: ticketLink,
                    availability: "https://schema.org/InStock",
                }
            }
        }
    }

    return (
        <section className="font-martian max-w-[1440px] mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <div className={'py-6 px-14 flex justify-center'}>
                <a href="/">
                    <Image className={'w-40 sm:w-60 md:w-80'} src={logo} alt={'Zenekari logó'}/>
                </a>
            </div>
            <article itemScope itemType="https://schema.org/Event">
                <figure>
                    <figcaption className="sr-only">
                        A Király Halott koncert flyer
                    </figcaption>
                    <Image
                        src={image?.url ?? ''}
                        width={image.width}
                        height={image.height}
                        alt={'Koncert flyer'}
                    />
                </figure>
                <header>
                    <h1 className={'w-full text-center uppercase font-bold text-2xl pb-2 pt-6 sm:text-6xl sm:pb-8 sm:pt-14'}
                        itemProp="name">
                        {displayName}
                    </h1>
                    <meta itemProp="eventStatus" content="https://schema.org/EventScheduled"/>
                </header>
                <time className={'block uppercase w-full text-center pb-2 sm:text-4xl '} dateTime={date}
                      itemProp="startDate">
                    {convertDateStringToHumanReadableString(date)}
                </time>
                <div itemProp="location" itemScope itemType="https://schema.org/Place">
                    <span className={'block uppercase text-center w-full sm:text-3xl sm:py-4'}
                          itemProp="name">{venue}</span>
                    <span className="sr-only" itemProp="address" itemScope
                          itemType="https://schema.org/PostalAddress">
                        <span itemProp="streetAddress">{address}</span>,
                        <span itemProp="addressLocality">{city}</span>,
                        <span itemProp="addressCountry">HU</span>
                    </span>
                </div>
                <div className="flex flex-row gap-2 sm:gap-6 justify-center w-full py-4">
                    {eventLink && (
                        <LinkButton variant={'dark'} className={'sm:text-2xl sm:py-4 sm:px-6'} href={eventLink}
                                    target={'_blank'}>{'Esemény'}</LinkButton>)}
                    {ticketLink && (
                        <LinkButton variant={'light'} className={'sm:text-2xl sm:py-4 sm:px-6'} href={ticketLink}
                                    target={'_blank'}>{'Jegyek'}</LinkButton>)}
                </div>
            </article>
            <div className="flex justify-center py-2 sm:py-4 mb-4 sm:mb-8">
                <a className={'underline text-xs sm:text-md'} href={'/koncertek'}>Vissza az összes koncerthez</a>
            </div>
        </section>
    )
}
