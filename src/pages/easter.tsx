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


export default function Easter(): JSX.Element {
  const { isMobile } = useWindow();
  const { back } = useRouter();
             
  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer className='no-scrollbar'>
      <SEO title='Easter | Aria+' />
      <MainHeader
        useActionButton action={back} 
        title='Easter'
        className='flex z-80 items-center justify-between text-[0px]'
      > <div className='flex items-right' >
        <ExploreButton />
         </div>
      </MainHeader>
      <NextImage className='z-[8] accent-tab relative mt-0.5 h-64 xs:h-64 sm:h-64 h-64 w-full rounded-lg p-0 transition hover:brightness-75 xs:rounded-lg'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='/main/ui/secondary/banner/easter/easter-cover.jpg'
            alt=''
            key=''
          />
      <p className='z-[9] text-[13px] px-[20px]  text-center -mt-[25px] '> Easter, a Christian holiday celebrated globally, commemorates the resurrection of Jesus Christ from the dead, as described in the New Testament of the Bible. It is observed on the first Sunday following the full moon after the vernal equinox, typically falling between late March and late April. Easter is a time of spiritual reflection, joyful gatherings, and religious observances for Christians worldwide. Traditions vary among cultures but often include attending church services, participating in egg hunts, decorating eggs, and sharing festive meals with family and friends. The holiday symbolizes hope, renewal, and the triumph of life over death, serving as a cornerstone of the Christian faith and a time for believers to rejoice in the promise of salvation.</p>

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

Easter.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
