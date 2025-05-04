import { ImgHTMLAttributes } from 'react';

interface IMainPageResponsiveImageProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  maxWidthForMobileImage?: number | string;
  minWidthForDesktopImage?: number | string;
  mobileImageSrc: string;
  desktopImageSrc: string;
}

export function ResponsiveImage({
  maxWidthForMobileImage = 1023,
  minWidthForDesktopImage = 1024,
  mobileImageSrc,
  desktopImageSrc,
  ...rest
}: IMainPageResponsiveImageProps) {
  const { src, alt, ...restest } = rest;

  return (
    <picture>
      <source
        media={`(max-width: ${maxWidthForMobileImage}px)`}
        srcSet={mobileImageSrc}
      />
      <source
        media={`(min-width: ${minWidthForDesktopImage}px)`}
        srcSet={desktopImageSrc}
      />
      <img src={src ?? mobileImageSrc} alt={alt ?? 'Image'} {...restest} />
    </picture>
  );
}
