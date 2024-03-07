import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { orderBy, query } from 'firebase/firestore';
import { useAuth } from '@lib/context/auth-context';
import { useModal } from '@lib/hooks/useModal';
import { useCollection } from '@lib/hooks/useCollection';
import { useArrayDocument } from '@lib/hooks/useArrayDocument';
import { clearAllBookmarks } from '@lib/firebase/utils';
import {
  moviesCollection,
  userBookmarksCollection
} from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { Modal } from '@components/modal/modal';
import { TvPassModal } from '@components/modal/tv/tv-pass';
import { ActionModal } from '@components/modal/action-modal';
import { Movie } from '@components/tv/movie';
import { StatsEmpty } from '@components/tweet/stats-empty';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { HeroIcon } from '@components/ui/hero-icon';
import { Loading } from '@components/ui/loading';
import type { ReactElement, ReactNode } from 'react';

export default function TV(): JSX.Element {
  const { back } = useRouter();
  const { user } = useAuth();

  const { open, openModal, closeModal } = useModal();

  const userId = user?.id as string;


  return (
    <MainContainer>
      <SEO title='tv | Aria+' />
      
      <MainHeader useActionButton action={back}>
          <div className='-mb-1 flex flex-col'>
          <h2 className='-mt-1 text-xl font-bold'>tv</h2>
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
          <TvPassModal/>
      </MainHeader>
        
      </MainHeader>
      <Movie/>
    </MainContainer>
  );
}

TV.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
