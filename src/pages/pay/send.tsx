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

import { Form1235 } from '@components/pay/flow/send/send-form';
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
import { PaymentCard } from '@components/pay/paymentcard';
import { PaySettingsButton } from '@components/pay/pay-settings-button';
import { FlowNav } from '@components/navbar/primary/pay/flow-nav';
import type { ReactElement, ReactNode } from 'react';

export default function Send(): JSX.Element {
  const { back } = useRouter();
  
 const { user } = useAuth();
  const userId = user?.id as string;
  
  return (
    <MainContainer>
      <SEO title='Send | Aria+' />
      <MainHeader     useActionButton action={back} 
        title='Send'
        className='flex items-center justify-between text-[0px]'
      > 
       <PaySettingsButton/>
      </MainHeader>
      <FlowNav/>
      <div className='self-center'>
      <PaymentCard />
        </div>
      <Form1235/>
    </MainContainer>
  );
}

Send.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <TrendsLayout>{page}</TrendsLayout>
    </MainLayout>
  </ProtectedLayout>
);
