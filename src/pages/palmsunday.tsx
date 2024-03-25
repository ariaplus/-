import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';
import { useWindow } from '@lib/context/window-context';
import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { tweetsCollection } from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { Tweet } from '@components/tweet/tweet';
import { useRouter } from 'next/router';
import { NextImage } from '@components/ui/next-image';

import { EasterNav } from '@components/navbar/secondary/explore/easter/easter-nav';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { ExploreButton } from '@components/buttons/primary/explore-button';
import { ServerDown } from '@components/maintenance/server-down';
import type { ReactElement, ReactNode } from 'react';


export default function PalmSunday(): JSX.Element {
  const { isMobile } = useWindow();
  const { back } = useRouter();
             
  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer className='no-scrollbar'>
      <SEO title='Palm Sunday | Aria+' />
      <MainHeader
        useActionButton action={back} 
        title='Palm Sunday'
        className='flex z-80 items-center justify-between text-[0px]'
      >
        <div className='flex items-right'>
          <ExploreButton />
        </div>
      </MainHeader>
      <NextImage className='z-[8] accent-tab relative mt-0.5 h-64 xs:h-64 sm:h-64 h-64 w-full rounded-lg p-0 transition hover:brightness-75 xs:rounded-lg'
        useSkeleton
        layout='fill'
        imgClassName='object-cover'
        src='https://media.istockphoto.com/id/959120756/photo/elegant-composition-of-female-hand-holding-palm-leaf.webp?s=2048x2048&w=is&k=20&c=BYHrEUnnOr8HwUUFK0xA8S6rhzhZh_oocD0tjiKoGBA='
        alt=''
        key=''
      />
      <p className='z-[9] text-[13px] px-[20px] text-center -mt-[25px]'>Palm Sunday marks the beginning of Holy Week in the Christian tradition, commemorating Jesus Christ&apos;s triumphal entry into Jerusalem, as described in the Gospels. It is celebrated on the Sunday before Easter Sunday, with worshippers often carrying palm branches, symbolizing the ones laid before Jesus as he rode into the city. This event signifies the anticipation and joy of the crowds who hailed Jesus as the Messiah, spreading their cloaks and palm branches on the road. Palm Sunday serves as a reminder of the humility, sacrifice, and ultimate purpose of Jesus&apos;s journey towards crucifixion and resurrection, setting the stage for the profound events that follow during Holy Week.</p>

      <EasterNav/>
      <ServerDown/>
      <section className='mt-0.5 xs:mt-0 no-scrollbar'>
        {loading ? (
          <Loading className='mt-5' />
        ) : !data ? (
          <Error message='Something went wrong' />
        ) : (
          <>
            <AnimatePresence mode='popLayout'>
              {data.map((tweet) => (
                <Tweet {...tweet} key={tweet.id} />
              ))}
            </AnimatePresence>
            <LoadMore />
          </>
        )}
      </section>
    </MainContainer>
  );
}

PalmSunday.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
