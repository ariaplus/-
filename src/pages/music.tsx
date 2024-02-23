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
import { HeroIcon } from '@components/ui/hero-icon';
import type { ReactElement, ReactNode } from 'react';
import { useAuth } from '@lib/context/auth-context';
import { NewMusicSlide } from '@components/music/new';

export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();
  const { user } = useAuth();

  const userId = user?.id as string;
  
  return (
    <MainContainer>
      <SEO title='Music | Aria+' />
      <MainHeader useActionButton action={back}>
          <div className='-mb-1 flex flex-col'>
          <h2 className='-mt-1 text-xl font-bold'>Aria+ Music</h2>
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
        <Button
          className='dark-bg-tab group relative ml-auto cursor-not-allowed p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
        >
          <HeroIcon className='h-5 w-5' iconName='Cog8ToothIcon' />
          <ToolTip tip='Settings' />
        </Button>
      </MainHeader>
  <NewMusicSlide/>
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
