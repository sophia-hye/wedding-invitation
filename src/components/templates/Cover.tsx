import Image from 'next/image';
import React from 'react';

interface CoverProps {
  imagePath: string;
}

export default function Cover({ imagePath }: CoverProps) {
  return (
    <div>
      <Image src={imagePath} alt="" />
    </div>
  );
}
