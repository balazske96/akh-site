export function YouTubeVideo({ src }: { src: string }) {
  return (
    <section className="mt-[299.52vw] lg:mt-[20vw] w-full flex justify-center lg:justify-start lg:pl-[12vw]">
      <iframe
        className="w-[92.77vw] h-[51.94vw] lg:w-[49.06vw] lg:h-[27.55vw]"
        width="334"
        height="187"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}
