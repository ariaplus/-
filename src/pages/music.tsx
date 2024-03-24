import { useRouter } from 'next/router';
import { useAuth } from '@lib/context/auth-context';
import {
  TrendsLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import {
  moviesCollection,
  userBookmarksCollection
} from '@lib/firebase/collections';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { AsideTrends } from '@components/aside/aside-trends';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { HeroIcon } from '@components/ui/hero-icon';
import { MusicNav  } from '@components/navbar/primary/music/music-nav';

import { NewMusicSlide } from '@components/music/new';
import type { ReactElement, ReactNode } from 'react';

export default function Music(): JSX.Element {
  const { back } = useRouter();
  
 const { user } = useAuth();
  const userId = user?.id as string;
  
  return (
    <MainContainer>
      <SEO title='Music | Aria+' />
      <MainHeader     useActionButton action={back} 
        title='Music'
        className='flex items-center justify-between text-[0px]'
      > 
       
      </MainHeader>
          <MusicNav/>
  
      <div className='self-center'>
   
  <NewMusicSlide/>
        </div>
    </MainContainer>
  );
}

Music.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <TrendsLayout>{page}</TrendsLayout>
    </MainLayout>
  </ProtectedLayout>
);
