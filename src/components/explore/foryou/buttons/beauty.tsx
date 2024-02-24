/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
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
import { UsernameModal } from '@components/modal/username-modal';
import { InputField } from '@components/input/input-field';
import type { FormEvent, ChangeEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';

export function BeautyButton(): JSX.Element {
  const [alreadySet, setAlreadySet] = useState(false);
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visited, setVisited] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { user } = useAuth();
  const { open, openModal, closeModal } = useModal();


  return (
    <>
     <Link href={'/explore/foryou/beauty'}>
        <a>
          <Button
            className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                       active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                       dark:active:bg-dark-primary/20'  >
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/main/ui/header/primary/drawer.svg'
          alt='For You'
          layout='fill'
          width='25px'
          height='25px'
       />
            <ToolTip tip='For You' />
          </Button>
        </a>
      </Link>
    </>
  );
}
