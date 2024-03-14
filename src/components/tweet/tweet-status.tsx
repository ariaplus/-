import { motion } from 'framer-motion';
import { HeroIcon } from '@components/ui/hero-icon';
import { CustomIcon } from '@components/ui/custom-icon';
import { fromTop } from '@components/input/input-form';
import type { ReactNode } from 'react';
import { ArplImage } from '@components/ui/ariaplus';

type TweetStatusProps = {
  type: 'pin' | 'tweet';
  children: ReactNode;
};

export function TweetStatus({ type, children }: TweetStatusProps): JSX.Element {
  return (
    <motion.div
      className='col-span-2 grid grid-cols-[48px,1fr] gap-3 text-light-secondary dark:text-dark-secondary'
      {...fromTop}
    >
      <i className='justify-self-end'>
        {type === 'pin' ? (
        <ArplImage className='opacity-50'
          imgClassName='aplicon'
          blurClassName=''
          src='/main/ui/primary/user/ui/pin.svg'
          alt=''
          layout='fill'
          width='25px'
          height='25px'
       />

                                <ArplImage className='opacity-50'
          imgClassName='aplicon'
          blurClassName=''
          src='assets/ariaplus.svg'
          alt=''
          layout='fill'
          width='25px'
          height='25px'
       />
        ) : (
          <HeroIcon className='h-5 w-5' iconName='ArrowPathRoundedSquareIcon' />
        )}
      </i>
      {children}
    </motion.div>
  );
}
