import { Dialog } from '@headlessui/react';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import type { ReactNode, FormEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';
import Image from 'next/image';
import Link from 'next/link';
import { NextImage } from '@components/ui/next-image';

interface ImageProps {
  src: string;
  href: string;
}



export function StartModal( ): JSX.Element {

  
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
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' },
   { src: '/assets/tv/movie/gits.jpeg', href: '/link1' }   
    // Add more images as needed
  ];

    const cancelStart = (): void => {
    closeModal();
  };

  return (
    <form
      className='flex h-full flex-col justify-between bg-no-repeat bg-top bg-cover'>
    <div className='flex flex-col items-center gap-6'>
        <div className='flex flex-col gap-4'>
          <i className='mx-auto'>
      <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt='Twitter banner'
          layout='fill'
          width='40px'
          height='40px'
          useSkeleton
       />
          </i>

        </div>
      </div>
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
    </div>
      <div className='flex flex-col gap-3 inner:py-2 inner:font-bold'>

        <Button
          className='border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10
                     active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border 
                     dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 
                     dark:active:bg-light-border/20'
          onClick={cancelStart}
        >Close</Button>
      </div>
    </form>
  );
}
