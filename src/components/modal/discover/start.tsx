/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { checkUsernameAvailability, updateUsername } from '@lib/firebase/utils';
import { useAuth } from '@lib/context/auth-context';
import { useModal } from '@lib/hooks/useModal';
import { isValidUsername } from '@lib/validation';
import { sleep } from '@lib/utils';
import { Button } from '@components/ui/button';
import { HeroIcon } from '@components/ui/hero-icon';
import { ToolTip } from '@components/ui/tooltip';
import { Modal } from '@components/modal/modal';
import { StartModal } from '@components/modal/discover/start-modal';
import type { FormEvent, ChangeEvent } from 'react';

export function Start(): JSX.Element {


  const { user } = useAuth();
  const { open, openModal, closeModal } = useModal();

  const cancelStart = (): void => {
    closeModal();
  };


  return (
    <>
      <Modal
        modalClassName='flex flex-col gap-6 max-w-xl bg-main-background w-full p-8 rounded-2xl h-[485px] bg-no-repeat bg-top bg-cover' 
        open={open}
        closeModal={cancelStart}
      >
       <StartModal
         cancelStart 
         />
      </Modal>
      <Button
        className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                   active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                   dark:active:bg-dark-primary/20'
        onClick={openModal}
      >
        <HeroIcon className='h-5 w-5' iconName='RectangleStackIcon' />
        <ToolTip tip='Top tweets' />
      </Button>
    </>
  );
}
