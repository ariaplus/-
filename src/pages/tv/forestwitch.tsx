import { useRouter } from 'next/router';
import {
  TrendsLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { AsideTrends } from '@components/aside/aside-trends';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';

import { AImage } from '@components/ui/tertiary/containers/image/a-image';
import { HeroIcon } from '@components/ui/hero-icon';
import type { ReactElement, ReactNode } from 'react';
import { NextImage } from '@components/ui/next-image';
import { RemoteButton } from '@components/buttons/primary/tv/remote-button';
import Image from 'next/image';
import { Movie } from '@components/tv/movie';
import { ArplImage } from '@components/ui/ariaplus';
import { TvPassModal } from '@components/modal/tv/tv-pass';

export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();

  return (
    <MainContainer>
      <SEO title='Forest Witch | Aria+' />
      <MainHeader useActionButton className='flex justify-between' title='Forest Witch' action={back}>
           <RemoteButton/>
      </MainHeader>
      
    <div className='flex flex-col items-center p-8 bg-no-repeat bg-top bg-contain -mt-[10px] md:-mt-[125px] lg:-mt-[100px]' style={{ backgroundImage: 'url(/assets/tv/movie/data/forestwitch/cover.jpg)' }}>

       <NextImage
        src='/assets/tv/movie/data/forestwitch/fw.png' // Update this with the path to your image
        alt=''
        width={250}
        height={125}  
        className=' lg:mt-56 mt-[8rem] rounded-lg pt-20'
               />
      <div className='flex gap-[10px] h-[80px] -mt-[9px] '>
        <div className='flex'>  
       <AImage
        src='/main/ui/tertiary/elements/tv/premieroriginals.svg' // Update this with the path to your image
        alt=''
        width={200}
        height={125}  
        className='object-contain -mt-[25px]'
               />
        </div>
        <div className='flex-col'>
      <p className='text-gray-600 mt-4 lg:text-[13px] text-[12px] text-center'>Horror | 2024 | 1hr 40min | 4K</p>
      <p className='text-yellow-600 lg:text-[13px] text-[12px]  text-center'>Coming to Aria+ at a Later Date</p>
        </div>
      </div>
      <div className='flex pt-[7px] gap-[10px] '>
      <Button
    className='accent-tab bg-main-accent enabled:hover:bg-main-accent/90
                     enabled:active:bg-main-accent/75 hover:bg-blue-700 text-white font-bold items-center justify-center self-center py-2 px-4 w-80 rounded-lg'>Play</Button>
     
        </div>         
        
      <p className='text-gray-600 pt-[10px] text-[13px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mollis ex a sodales. Quisque molestie massa quis dolor elementum rhoncus. Nullam scelerisque elementum elit, nec vestibulum augue luctus id. Aliquam et dolor non neque pulvinar sodales a nec mi. Morbi varius a erat in fermentum. Donec sed scelerisque purus. Integer sed libero sit amet erat aliquet facilisis in quis augue. Sed sollicitudin egestas fermentum. Integer sit amet tincidunt velit. Maecenas tincidunt justo at erat luctus feugiat. Pellentesque eget diam vitae elit ultrices ullamcorper. Aliquam tincidunt quam elit, ut interdum nisi maximus in. Donec eget enim feugiat, rutrum turpis sit amet, egestas tortor. Aenean lobortis finibus hendrerit. </p>
     </div>
     <div className='border-solid border-2 border-white mx-3.5 mb-5 shadow-md rounded-lg p-8'>
      <h2 className='text-2xl font-bold mb-2'>Forest Witch</h2>
      <p className='text-gray-700 mb-1 text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mollis ex a sodales. Quisque molestie massa quis dolor elementum rhoncus.</p>


      <div className='content gap-[10px] items-center'>
      <p className='text-gray-700 mb-1 text-[13px]'>
        Directed by <span className='font-bold text-[13px]'>Radhesh Aria</span>
      </p>
      <p className='text-gray-700 mb-1 text-[13px]'>
        Age Rating: <span className='font-bold text-[13px]'>18+</span>
      </p>
      <p className='text-gray-700'>TV-MA</p>

       </div>
    </div>
   <Movie/>
    </MainContainer>
  );
}

Bookmarks.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <TrendsLayout>{page}</TrendsLayout>
    </MainLayout>
  </ProtectedLayout>
);
