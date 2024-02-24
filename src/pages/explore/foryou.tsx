// for you page data of Aria+


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
import { ExploreNav } from '@components/explore/explore-nav';
import { NextImage } from '@components/ui/next-image';
import { FinanceButton } from '@components/explore/foryou/buttons/finance';
import { TechButton } from '@components/explore/foryou/buttons/tech';
import { FashionButton } from '@components/explore/foryou/buttons/fashion';
import { BeautyButton } from '@components/explore/foryou/buttons/beauty';
import { ArtsAndCultureButton } from '@components/explore/foryou/buttons/artsandculture';
import { EButton } from '@components/explore/foryou/buttons/entertainment';
import { FitnessButton } from '@components/explore/foryou/buttons/fitness';
import { GamingButton } from '@components/explore/foryou/buttons/gaming';
import { HomeAndFamilyButton } from '@components/explore/foryou/buttons/homeandfamily';


export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();

  return (
    <MainContainer>
      <SEO title='For You | Aria+' />
      <MainHeader useActionButton title='For You' action={back}>
  <div className=' flex items-right'>
      <FinanceButton/>
  </div>
      </MainHeader>
      <MainHeader>
  <div className=' flex items-right'>

      <FinanceButton/>
      <TechButton/>
      <FashionButton/>
      <BeautyButton/>
      <ArtsAndCultureButton/>
      <EButton/>
      <FitnessButton/>

      <GamingButton/>
      <HomeAndFamilyButton/>
  </div>
      </MainHeader>
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
