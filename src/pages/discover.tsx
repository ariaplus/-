import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';
import { useWindow } from '@lib/context/window-context';
import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { tweetsCollection } from '@lib/firebase/collections';
import { DiscoverLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { SubHeader } from '@components/home/sub-header';
import { ExploreNav } from '@components/explore/explore-nav';
import { DiscoverDataLayout } from '@components/layout/discover/discover-data-layout';
import { DiscoverHomeLayout } from '@components/layout/discover/discover-home-layout';
import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { Start } from '@components/modal/discover/start';
import { ExploreButton } from '@components/explore/header/explore-button';
import { NewsButton } from '@components/explore/header/news-button';
import type { ReactElement, ReactNode } from 'react';
import { NextImage } from '@components/ui/next-image';
import { ServerDown } from '@components/maintenance/server-down';

export default function Discover(): JSX.Element {
  const { isMobile } = useWindow();

  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer>
      <SEO title='Discover | Aria+' />
      <MainHeader
        useMobileSidebar
        title='Discover'
        className='flex items-center justify-between text-[0px]'
      >
        <div className='flex items-right'>
          <ExploreButton />
          <Start />
        </div>
      </MainHeader>

      <ExploreNav />
      <NextImage
        className='accent-tab relative mt-0.5 h-64 xs:h-64 sm:h-64 h-64 w-full rounded-lg p-0 transition hover:brightness-75 xs:rounded-lg'
        useSkeleton
        layout='fill'
        imgClassName='object-cover'
        src='https://images.pexels.com/photos/4577718/pexels-photo-4577718.jpeg'
        alt=''
        key=''
      />
      <ServerDown />
      <section className='mt-0.5 xs:mt-0'>
        {loading ? (
          <Loading className='mt-5' />
        ) : !data ? (
          <Error message='Something went wrong' />
        ) : (
          <>
            <AnimatePresence exitBeforeEnter mode='popLayout'>
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

Discover.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <DiscoverLayout>
        <DiscoverDataLayout>
          <DiscoverHomeLayout>{page}</DiscoverHomeLayout>
        </DiscoverDataLayout>
      </DiscoverLayout>
    </MainLayout>
  </ProtectedLayout>
);
