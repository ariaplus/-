import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';

import { useRouter } from 'next/router';
import { useWindow } from '@lib/context/window-context';
import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { tweetsCollection } from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { SubHeader } from '@components/home/sub-header';
import { SportsNav } from '@components/navbar/primary/sports-nav';

import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { Start } from '@components/modal/discover/start';
import { ExploreButton } from '@components/explore/header/explore-button';
import { NewsButton } from '@components/explore/header/news-button';
import type { ReactElement, ReactNode } from 'react';
import { NextImage } from '@components/ui/next-image';
import { ServerDown } from '@components/maintenance/server-down';

export default function Home(): JSX.Element {
  const { isMobile } = useWindow();
    const { back } = useRouter();

  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer>
      <SEO title='Sports | Aria+' />
      <MainHeader
        useActionButton action={back} 
        useMobileSidebar
        title='Sports'
        className='flex items-center justify-between text-[0px]'
      > <div className='flex items-right' >
        <ExploreButton />
         </div>
      </MainHeader>
      <SportsNav/>
     <NextImage className='accent-tab relative mt-0.5 h-64 xs:h-64 sm:h-64 h-64 w-full rounded-lg p-0 transition hover:brightness-75 xs:rounded-lg'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='https://api.athleticsnyc.site/wp-content/uploads/2019/05/MLS_logo_sm.jpg'
            alt=''
            key=''
          />
         <ServerDown/>
      <section className='mt-0.5 xs:mt-0'>
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

Home.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
