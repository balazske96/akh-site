export function YouTubeVideo({ src }: { src: string }) {
  return (
    <section className='mt-[299.52vw] flex w-full justify-center lg:mt-[20vw] lg:justify-start lg:pl-[12vw]'>
      <iframe
        className='h-[51.94vw] w-[92.77vw] lg:h-[27.55vw] lg:w-[49.06vw]'
        width='334'
        height='187'
        src={src}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </section>
  );
}
