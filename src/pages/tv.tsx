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
import { TvNav } from '@components/navbar/primary/tv/tv-nav';
import {
  moviesCollection,
  userBookmarksCollection
} from '@lib/firebase/collections';
import { TvLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { Modal } from '@components/modal/modal';
import { TvPassModal } from '@components/modal/tv/tv-pass';

import { RemoteButton } from '@components/buttons/primary/tv/remote-button';
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
      
          <MainHeader useActionButton action={back} className='flex items-center justify-between '>
            <div className='justify-between flex '>
        <div className='-mb-1 flex flex-col'>
          <h2 className=' text-[100px] -mt-[30px] -mb-[20px] font-bold'>tv</h2>
       
        </div>
       </div>
        
        <div className=' flex items-end'>

       <RemoteButton  />
          </div>

        
      </MainHeader>
      <div className='mb-[10px]'>
      <TvNav/>
        </div>
      <Movie/>
    </MainContainer>
  );
}

TV.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <TvLayout>{page}</TvLayout>
    </MainLayout>
  </ProtectedLayout>
);
