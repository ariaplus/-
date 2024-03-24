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

import { EasterNav } from '@components/navbar/secondary/explore/easter/easter.nav';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { ExploreButton } from '@components/buttons/primary/explore-button';
import { ServerDown } from '@components/maintenance/server-down';
import type { ReactElement, ReactNode } from 'react';

export default function Maundy(): JSX.Element {
  const { isMobile } = useWindow();
  const { back } = useRouter();
             
  const { data, loading, LoadMore } = useInfiniteScroll(
    tweetsCollection,
    [where('parent', '==', null), orderBy('createdAt', 'desc')],
    { includeUser: true, allowNull: true, preserve: true }
  );

  return (
    <MainContainer className='no-scrollbar'>
      <SEO title='Maundy Thursday | Aria+' />
      <MainHeader
        useActionButton action={back} 
        title='Maundy Thursday'
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
        src='https://media.ascensionpress.com/wp-content/uploads/2020/04/Ultima_Cena_-_Juan_de_Juanes.jpeg'
        alt=''
        key=''
      />
      <p className='z-[9] text-[13px] px-[20px] text-center -mt-[25px]'>Maundy Thursday, observed in the Christian liturgical calendar during Holy Week, commemorates the Last Supper of Jesus Christ with his disciples, as described in the Gospels. This solemn day holds profound significance, marking Jesus&apos; institution of the Eucharist and the priesthood, as well as his act of humility in washing the feet of his disciples, demonstrating the essence of servant leadership. The term &quot;Maundy&quot; is derived from the Latin word &quot;mandatum,&quot; meaning commandment, referencing Jesus&apos; new commandment to love one another as he has loved them. </p>

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

Maundy.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
