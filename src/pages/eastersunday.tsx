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

export default function EasterSunday(): JSX.Element {
  const { isMobile } = useWindow();
  const { back } = useRouter();
             
  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer className='no-scrollbar'>
      <SEO title='Easter Sunday | Aria+' />
      <MainHeader
        useActionButton action={back} 
        title='Easter Sunday'
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
        src='https://static.tnn.in/thumb/msid-90865797,thumbsize-58684,width-1280,height-720,resizemode-75/90865797.jpg'
        alt=''
        key=''
      />
      <p className='z-[9] text-[13px] px-[20px] text-center -mt-[25px]'>Easter Sunday is the culmination of the Christian Holy Week, celebrating the resurrection of Jesus Christ from the dead. It&apos;s a joyous occasion filled with hope and renewal, symbolizing victory over sin and death. Christians worldwide gather to commemorate this pivotal event in their faith, attending church services, partaking in special rituals like the Easter Vigil, and sharing meals with loved ones. The empty tomb on Easter morning signifies the fulfillment of God&apos;s promise of salvation and eternal life, offering believers a profound sense of spiritual rebirth and redemption.</p>

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

EasterSunday.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
