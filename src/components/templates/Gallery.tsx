import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import GridImage from '@/components/organisms/GridImage';

interface GalleryProps {
  imagePaths: string[];
}

export default function Gallery({ imagePaths }: GalleryProps) {
  const imageInfos = imagePaths.map((imagePath) => ({
    src: imagePath,
  }));
  return <GridImage imageInfos={imageInfos} />;
}

// getStaticProps is executed at build time to fetch image file paths
export const getStaticProps: GetStaticProps = async () => {
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  const files = fs.readdirSync(galleryDir);
  const imagePaths = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/.test(file)
  );
  return {
    props: {
      imagePaths,
    },
  };
};
