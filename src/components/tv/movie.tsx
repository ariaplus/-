import Image from 'next/image';
import Link from 'next/link';
import { NextImage } from '@components/ui/next-image';

interface ImageProps {
  src: string;
  href: string;
}

export function Movie() {
  const images: ImageProps[] = [
   { src: '/assets/tv/movie/data/forestwitch/forestwitch.jpg', href: '/tv/forestwitch' },
   { src: '/assets/tv/movie/data/madhouse/madhose-web.jpg', href: '/tv/madhouse' },
   { src: '/assets/tv/movie/data/strangecriminals/strange-criminals-web.jpg', href: '/tv/strangecriminals' },
   { src: '/assets/tv/movie/data/petitesecrets/petite-secrets-web.jpg', href: '/tv/petitesecrets' },
   { src: '/assets/tv/movie/data/dove/dove-web.jpg', href: '/tv/dove' },
   { src: '/assets/tv/movie/data/youvereachedrebecca/yrr-web.jpg', href: '/tv/youvereachedrebecca' },
   { src: '/assets/tv/movie/data/missie/missie-web.jpg', href: '/tv/missie' },
   { src: '/assets/tv/movie/data/candy/candy-web.jpg', href: '/tv/candy' },
   { src: '/assets/tv/movie/data/luminescent/lumen-web.png', href: '/tv/luminescent' },
   { src: '/assets/tv/movie/data/404/404-web.jpg', href: '/tv/404' },
   { src: '/assets/tv/movie/data/rot/rot-web.jpg', href: '/tv/rot' }

    // Add more images as needed
  ];

  return (
    <div className='grid grid-cols-3 gap-4 px-3'>
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <a className='relative h-48 border-[#333] md:h-64 sm:h-56 overflow-hidden hover-animation transition rounded-lg'>
            <NextImage
              useSkeleton
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt=''
            />
          </a>
        </Link>
      ))}
    </div>
  );
}
