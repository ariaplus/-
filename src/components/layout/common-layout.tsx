import { useRequireAuth } from '@lib/hooks/useRequireAuth';
import { Aside } from '@components/aside/aside';
import { AsideRightTrends } from '@components/aside/aside-right-trends';
import { AsideMessages } from '@components/aside/messages/aside-messages';
import { Suggestions } from '@components/aside/suggestions';
import { Placeholder } from '@components/common/placeholder';

import { AsideTransactions } from '@components/aside/primary/pay/aside-transactions';
import { AsideTv } from '@components/aside/aside-tv';
import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: LayoutProps): JSX.Element {
  const user = useRequireAuth();

  if (!user) return <Placeholder />;

  return <>{children}</>;
}

export function HomeLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideRightTrends />
        <Suggestions />
      </Aside>
    </>
  );
}

export function UserLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <Suggestions />
        <AsideRightTrends />
      </Aside>
    </>
  );
}
export function MessagesLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideMessages />
      </Aside>
    </>
  );
}
export function DiscoverLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <Suggestions />
        <AsideRightTrends />
      </Aside>
    </>
  );
}

export function TvLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideTv />
      </Aside>
    </>
  );
}

export function PayPrimaryLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideTransactions />
      </Aside>
    </>
  );
}

export function TrendsLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <Suggestions />
      </Aside>
    </>
  );
}

export function PeopleLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideRightTrends />
      </Aside>
    </>
  );
}
