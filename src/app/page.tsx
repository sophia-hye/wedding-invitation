import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Calendar from '@/components/templates/Calendar';
import Cover from '@/components/templates/Cover';
import Gallery from '@/components/templates/Gallery';
import RSVP from '@/components/templates/RSVP';

interface HomeProps {
  galleryImagePaths: string[];
}

export default function Home({ galleryImagePaths }: HomeProps) {
  return (
    <>
      <Cover />
      <RSVP />
      <Gallery imagePaths={galleryImagePaths} />
      <Calendar />
    </>
  );
}

// getStaticProps is executed at build time to fetch image file paths
export const getStaticProps: GetStaticProps = async () => {
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  const files = fs.readdirSync(galleryDir);
  const galleryImagePaths = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/.test(file)
  );
  return {
    props: {
      galleryImagePaths,
    },
  };
};
