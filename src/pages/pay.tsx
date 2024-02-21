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
import { CardsButton } from '@components/pay/cards-button';
import { PaymentsButton } from '@components/pay/payments-button';
import { WalletButton } from '@components/pay/wallet-button';
import { PaySettingsButton } from '@components/pay/pay-settings-button';
import type { ReactElement, ReactNode } from 'react';

export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();

  return (
    <MainContainer>
      <SEO title='Pay | Aria+' />
      <MainHeader useActionButton title='Pay' action={back}>
        <div className=' flex items-right'>
       <CardsButton/>
       <PaymentsButton/>
        <WalletButton/>
       <PaySettingsButton/>
          </div>
      </MainHeader>
      <AsideTrends inTrendsPage />
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
