import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';
import { useWindow } from '@lib/context/window-context';
import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { tweetsCollection } from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { Input } from '@components/input/input';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import type { ReactElement, ReactNode } from 'react';
import { ExploreNav } from '@components/explore/explore-nav';
import { ForYouButton } from '@components/explore/foryou-button';
import { NewsButton } from '@components/explore/news-button';
import { NextImage } from '@components/ui/next-image';

export default function Home(): JSX.Element {
  const { isMobile } = useWindow();

  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer>
      <SEO title='Explore | Aria+' />
      <MainHeader
        useMobileSidebar
        title='Explore'
        className='flex items-center justify-between'
      >
        <ForYouButton />
        <NewsButton />
      </MainHeader>
      <section className='mt-0.5 xs:mt-0'>
          <NextImage className='accent-tab relative mt-0.5 h-36 xs:h-48 sm:h-52 w-full rounded-none p-0 transition hover:brightness-75'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='https://hips.hearstapps.com/hmg-prod/images/f1-car-performance-1665774443.jpg?crop=1.00xw:0.769xh;0,0.141xh&resize=1200:*'
            alt=''
            key=''
          />

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
