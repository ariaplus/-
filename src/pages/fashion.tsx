import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

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
import { SubHeader } from '@components/home/sub-header';
import { FashionNav } from '@components/navbar/primary/fashion/fashion-nav';

import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';

import { ExploreButton } from '@components/buttons/primary/explore-button';

import type { ReactElement, ReactNode } from 'react';
import { NextImage } from '@components/ui/next-image';
import { ServerDown } from '@components/maintenance/server-down';

export default function Fashion(): JSX.Element {
  const { isMobile } = useWindow();
    const { back } = useRouter();

  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer>
      <SEO title='Fashion | Aria+' />
      <MainHeader
        useActionButton action={back}         title='Fashion'
        className='flex items-center justify-between text-[0px]'
      > <div className='flex items-right' >
        <ExploreButton />

      </div>
      </MainHeader>
      <FashionNav/>
     <NextImage className='accent-tab relative mt-0.5 h-64 xs:h-64 sm:h-64 h-64 w-full rounded-lg p-0 transition hover:brightness-75 xs:rounded-lg'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='https://www.hollywoodreporter.com/wp-content/uploads/2015/04/martha_hunt_taylor_swift.jpg'
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

Fashion.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
