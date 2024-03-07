import { Dialog } from '@headlessui/react';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import type { ReactNode, FormEvent } from 'react';
import { ArplImage } from '@components/ui/ariaplus';


type UsernameModalProps = {
  loading: boolean;
  children: ReactNode;
  available: boolean;
  alreadySet: boolean;
  changeUsername: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  cancelUpdateUsername: () => void;
};

const usernameModalData = [
  {
    title: 'What should we call you?',
    description: 'Your @username is unique. You can always change it later.',
    cancelLabel: 'Skip'
  },
  {
    title: 'Introducting',
    description:
      'Your Aria+ Movie Pass to dozens of awesome movies and shows. completely free of ads and in-app purchases. All for one low montly price.',
    cancelLabel: 'Cancel'
  }
] as const;

export function UsernameModal({
  loading,
  children,
  available,
  alreadySet,
  changeUsername,
  cancelUpdateUsername
}: UsernameModalProps): JSX.Element {
  const { title, description, cancelLabel } = usernameModalData[+alreadySet];

  return (
    <form
      className='flex h-full flex-col justify-between bg-no-repeat bg-top bg-cover'>
    <div className='flex flex-col items-start gap-6'>
        <div className='flex flex-col mt-[100px] gap-4'>
          <i className='flex items-start'>
      <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Google_Play_Pass_logo.svg/168px-Google_Play_Pass_logo.svg.png'
          alt=''
          layout='fill'
          width='512px'
          height='731px'
          useSkeleton
       />
          </i>
          <div className='flex items-start flex-col gap-2'>
            <Dialog.Title className='text-2xl font-bold xs:text-3xl sm:text-4xl'>
              {title}
            </Dialog.Title>
            <p className='text-2xl font-bold xs:text-3xl sm:text-4xl'>Aria+ Movie Pass</p>
            <Dialog.Description className='text-light-secondary w-[380px] dark:text-dark-secondary'>
              {description}
            </Dialog.Description>
          </div>
        </div>
        {children}
      </div>
      <div className='flex flex-col gap-3 inner:py-2 inner:font-bold'>

        <Button
          className='border border-light-line-reply hover:bg-light-primary/10 focus-visible:bg-light-primary/10
                     active:bg-light-primary/20 dark:border-light-secondary dark:text-light-border 
                     dark:hover:bg-light-border/10 dark:focus-visible:bg-light-border/10 
                     dark:active:bg-light-border/20'
          onClick={cancelUpdateUsername}
        >Close</Button>
      </div>
    </form>
  );
}
