import { useState, useEffect } from "react";

interface useCarouselProps {
    totalImages: number;
    interval?: number;
}

export const useCarousel = ({
    totalImages,
    interval = 5000,
}: useCarouselProps) => {
    const [currentImage, setcurrentImage] = useState(0);

    useEffect(() => {
       const timer = setInterval(() => {
        setcurrentImage((prev) => (prev + 1) % totalImages);
       }, interval) 

       return () => clearInterval(timer);
    }, [totalImages, interval])

    return currentImage;
}