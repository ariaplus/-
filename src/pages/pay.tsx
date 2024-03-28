import { useRouter } from 'next/router';
import { useAuth } from '@lib/context/auth-context';
import {
  PayPrimaryLayout,
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
import { CardsButton } from '@components/pay/cards-button';
import { PaymentsButton } from '@components/pay/payments-button';
import { WalletButton } from '@components/pay/wallet-button';
import { PaymentCard } from '@components/pay/paymentcard';
import { PayNav } from '@components/navbar/primary/pay/pay-nav';
import type { ReactElement, ReactNode } from 'react';

export default function Pay(): JSX.Element {
  const { back } = useRouter();
  
 const { user } = useAuth();
  const userId = user?.id as string;
  
  return (
    <MainContainer>
      <SEO title='Pay | Aria+' />
      <MainHeader     useActionButton action={back} 
        title='Pay'
        className='flex items-center justify-between text-[0px]'
      > 
       <div className='flex'>
       <WalletButton/>
       </div>
      </MainHeader>
      <div className='self-center'>
      <PaymentCard />
        </div>
                        <p className='flex text-[12px] text-gray text-center border-b-4 '>Aria+ PAY CENTER</p>
                            <p className='flex text-[11px] text-center '>Use Aria+ Pay Center to Send & Receive Payments</p>
                                  <Button
    className='accent-tab bg-main-accent enabled:hover:bg-main-accent/90
                     enabled:active:bg-main-accent/75 hover:bg-blue-700 text-white font-bold items-center justify-center self-center py-2 px-4 w-80 rounded-lg'>Set Up Aria+ Pay</Button>

    </MainContainer>
  );
}

Pay.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <PayPrimaryLayout>{page}</PayPrimaryLayout>
    </MainLayout>
  </ProtectedLayout>
);
