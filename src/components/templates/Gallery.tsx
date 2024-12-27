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
