import { useMemo, useRef, useState } from 'react';

export default function useImageLoader(
	numberOfImages: number,
	startsWithLoading = true
) {
	const [currentPercentage, setCurrentPercentage] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(startsWithLoading);

	const onePercentage = useMemo(() => numberOfImages / 100, [numberOfImages]);
	const imageCounter = useRef<number>(0);

	const imageLoaded = () => {
		imageCounter.current += 1;
		setCurrentPercentage(Math.floor(imageCounter.current / onePercentage));

		if (imageCounter.current >= numberOfImages) {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		currentPercentage,
		imageLoaded,
	};
}
