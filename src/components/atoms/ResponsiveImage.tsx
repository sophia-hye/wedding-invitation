import Image from 'next/image';
import { Fragment } from 'react';

interface ResponsiveImageProps {
  imagePath: string;
}

export default function ResponsiveImage({ imagePath }: ResponsiveImageProps) {
  return (
    <Fragment>
      <Image
        src={`/gallery/${imagePath}`}
        width={300}
        height={300}
        className="hidden md:block"
        alt={imagePath}
      />
      <Image
        src={`/gallery/${imagePath}`}
        width={100}
        height={100}
        className="block md:hidden"
        alt={imagePath}
      />
    </Fragment>
  )
}
