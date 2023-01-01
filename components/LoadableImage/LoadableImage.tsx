import { useEffect, ImgHTMLAttributes, useRef } from 'react';

export interface LoadableImageProps
	extends ImgHTMLAttributes<HTMLImageElement> {
	onLoadingComplete: () => void;
}

export default function LoadableImage({
	onLoadingComplete,
	...rest
}: LoadableImageProps) {
	const ref = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (ref.current && ref.current?.complete) {
			console.log(ref.current);
			onLoadingComplete();
		}
	}, [ref]);

	return <img {...rest} ref={ref} />;
}
