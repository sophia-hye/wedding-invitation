import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import ResponsiveImage from '../atoms/ResponsiveImage';

interface GalleryImageGridProps {
  imagePaths: string[];
}

export default function GalleryImageGrid({
  imagePaths,
}: GalleryImageGridProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5">
      {imagePaths.map((src, index) => (
        <div key={`gallery-image-grid-${index}`} className="">
          <ResponsiveImage imagePath={src} />
        </div>
      ))}
    </div>
  );
}

// getStaticProps is executed at build time to fetch image file paths
export const getStaticProps: GetStaticProps = async () => {
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  const files = fs.readdirSync(galleryDir);
  const imagePaths = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/.test(file),
  );
  return {
    props: {
      imagePaths,
    },
  };
};
