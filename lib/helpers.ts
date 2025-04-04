import {getFooterData as getFooterDataFromPayload} from "./payload";
import {getMainPageData} from "./payload";
import {getStreamingProviders as getStreamingProvidersFromPayload} from "./payload";
import {StreamingProviderLogo} from "@/payload-types";

export async function getStreamingProviders(): Promise<IStreamingProvider[]> {
    const data = await getStreamingProvidersFromPayload();

    return data.docs.map((provider) => {
        return {
            name: provider.name,
            imageUrl: (provider.image as StreamingProviderLogo).url ?? "",
            link: provider.link,
        };
    });
}

export async function getFooterLinks(): Promise<ISiteLink[]> {
    const footerData = await getFooterDataFromPayload();

    return (
        footerData.links?.map(({href, displayName, external}) => ({
            href,
            displayName,
            external: external ?? false,
        })) ?? []
    );
}

export function isValidURL(url: string): boolean {
    const urlRegex =
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[\w%-]*)*(\?.*)?(#.*)?$/;
    return urlRegex.test(url);
}

export function isValidYouTubeVideoURL(url: string): boolean {
    const youtubeUrlRegex =
        /^https:\/\/(www\.)?youtube\.com\/embed\/[\w-]{11}(\?.*)?$/;

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

export function convertDateStringToHumanReadableString(date: string) {
    const dateObject = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return dateObject.toLocaleDateString('hu-HU', options);
}

export async function getMainPageYouTubeLink() {
    return (await getMainPageData()).youtube_video_url;
}
