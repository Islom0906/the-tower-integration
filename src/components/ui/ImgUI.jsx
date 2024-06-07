import { useState } from 'react';
import Image from "next/image";


const ImgUI = ({ src, alt, priority = false, objectFitContain = false, card = false, quality = 90, imageStyle }) => {
    const [loading, setLoading] = useState(true);

    const classNames = `${objectFitContain ? 'object-contain' : 'object-cover'} w-full h-full duration-200 ease-in-out ${imageStyle ? imageStyle : 'object-top'} ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`;

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className={classNames}
            quality={quality}
            priority={priority}
            onLoad={() => setLoading(false)}
            sizes={`${card ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '100vw'}`}
        />
    );
};

export default ImgUI
