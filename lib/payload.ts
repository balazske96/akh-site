import configPromise from "@payload-config";
import { getPayload } from "payload";

const getPayloadInstance = async () => {
  return await getPayload({
    config: configPromise,
  });
};

export const getConcerts = async () => {
  const payload = await getPayloadInstance();

  const data = await payload.find({
    collection: "concerts",
    where: {
      hidden: {
        equals: false,
      },
    },
  });

  return data;
};

export const getMainPageData = async () => {
  const payload = await getPayloadInstance();
  const data = await payload.findGlobal({ slug: "main-page" });

  return data;
};

export const getStreamingProviders = async () => {
  const payload = await getPayloadInstance();

  return await payload.find({
    collection: "streaming-providers",
    depth: 1,
  });
};

export const getFooterData = async () => {
  const payload = await getPayloadInstance();

  return await payload.findGlobal({ slug: "footer" });
};
