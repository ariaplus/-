import { Dialog } from '@headlessui/react';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import type { ReactNode, FormEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';
import Image from 'next/image';
import Link from 'next/link';
import { NextImage } from '@components/ui/next-image';
import { Start } from '@components/modal/discover/start';
import { ExploreButton } from '@components/explore/header/explore-button';
import { MainHeader } from '@components/home/main-header';
import { useWindow } from '@lib/context/window-context';

interface ImageProps {
  src: string;
  href: string;
}



export function StartModal(): JSX.Element {


 const { isMobile } = useWindow();
  
  const images: ImageProps[] = [
   { src: '/assets/tv/movie/m.jpg', href: '/tv/forestwitch' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' },
   { src: '/assets/tv/movie/m.jpg', href: '/tv/forestwitch' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' },
   { src: '/assets/tv/movie/m.jpg', href: '/tv/forestwitch' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' },
   { src: '/assets/tv/movie/m.jpg', href: '/tv/forestwitch' },
   { src: '/assets/tv/movie/n.jpg', href: '/tv/nowhere' },
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' },
   { src: '/assets/tv/movie/gits.jpeg', href: '/link1' }   
    // Add more images as needed
  ];



  return (
    <form
      className='flex h-full flex-col justify-between bg-no-repeat bg-top bg-cover'>
      <MainHeader
        useMobileSidebar
        title='Start'
        className='flex items-center justify-between text-[0px]'
      > <div className='flex items-right' >
        <ExploreButton />
         </div>
      </MainHeader>
     <div className='grid grid-cols-4 gap-4 px-3'>
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <a className='relative h-16 md:h-16 sm:h-16 overflow-hidden hover-animation transition rounded-lg'>
            <NextImage
              useSkeleton
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt={`Grid Image ${index + 1}`}
            />
          </a>
        </Link>
      ))}
        <NextImage className='accent-tab relative mt-0.5 h-16 xs:h-16 sm:h-16 h-16 w-full rounded-none p-0 transition hover:brightness-75'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='https://images.pexels.com/photos/4577718/pexels-photo-4577718.jpeg'
            alt=''
            key=''
          />
     
     </div>

    </form>
  );
}
