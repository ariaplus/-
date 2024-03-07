import { Dialog } from '@headlessui/react';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import type { ReactNode, FormEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';
import Image from 'next/image';
import Link from 'next/link';
import { NextImage } from '@components/ui/next-image';
import { MainHeader } from '@components/home/main-header';

interface ImageProps {
  src: string;
  href: string;
}

type UsernameModalProps = {
  loading: boolean;
  children: ReactNode;
  available: boolean;
  alreadySet: boolean;
  changeUsername: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  cancelUpdateUsername: () => void;
};

const usernameModalData = [
  {
    title: 'What should we call you?',
    description: 'Your @username is unique. You can always change it later.',
    cancelLabel: 'Skip'
  },
  {
    title: 'tv remote',
    description:
      'X',
    cancelLabel: 'Cancel'
  }
] as const;

export function UsernameModal({
  loading,
  children,
  available,
  alreadySet,
  changeUsername,
  cancelUpdateUsername
}: UsernameModalProps): JSX.Element {
  const { title, description, cancelLabel } = usernameModalData[+alreadySet];
  
  const images: ImageProps[] = [
   { src: '/assets/ariaplus.svg', href: '/tv/forestwitch' },
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
        title='Start'
        className='flex items-center justify-between text-[0px]'
      > <div className='flex items-right' >
         </div>
      </MainHeader>
     <div className='grid grid-cols-4 gap-4 px-3'>
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <a className='relative h-16 md:h-16 sm:h-16 overflow-hidden hover-animation transition rounded-lg'>
            <ArplImage
              useSkeleton
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt=''
              width='20px'
              height='20px'
            />
          </a>
        </Link>
      ))}
     </div>

    </form>
  );
}
