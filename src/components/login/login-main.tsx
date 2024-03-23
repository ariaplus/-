import { useAuth } from '@lib/context/auth-context';
import { NextImage } from '@components/ui/next-image';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import { ArplImage } from '@components/ui/ariaplus';

export function LoginMain(): JSX.Element {
  const { signInWithGoogle } = useAuth();

  return (
    <main className='grid lg:grid-cols-[1fr,45vw]'>
      <div className='relative hidden items-center justify-center  lg:flex'>
        <i className='absolute'>
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/cover.jpg'
          alt=''
          layout='fill'
          width='735px'
          height='624px'
          useSkeleton
       />
        </i>
      </div>
      <div className='flex flex-col items-center justify-center gap-6 p-8 lg:items-start lg:justify-center'>
        <i className=' self-center  lg:self-auto'>
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt=''
          layout='fill'
          width='60px'
          height='60px'
          useSkeleton
       />
        </i>
        <div className='flex max-w-xs flex-col gap-4 font-Helvetica lg:max-w-none'>
          <h1
            className='text-[23px] font-bold before:content-["Everything is Here."] 
                       lg:text-[23px] font-bold lg:before:content-["Everything is Here."]'
          />
          <h2 className='hidden font-medium -mt-5 text-[20px] lg:block lg:text-[20px]'> </h2>
        </div>
        <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2'>
          <div className='grid gap-3 font-bold'>

            <Button
              className='flex justify-center bg-accent-blue text-white transition hover:brightness-90
                         focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-7'
              onClick={signInWithGoogle}
            >
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt=''
          layout='fill'
          width='25px'
          height='25px'
          useSkeleton
       />
            </Button>
            <div className='grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2'>
              <i className='border-b border-light-border dark:border-dark-border' />
              <p>or</p>
              <i className='border-b border-light-border dark:border-dark-border' />
            </div>
            <Button
              className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                         focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                         dark:border-light-secondary'
            >
              Sign up with phone or email
            </Button>
            <p
              className='inner:custom-underline font-Helvetica inner:custom-underline text-center text-xs
                         text-light-secondary font-Helvetica inner:text-accent-blue dark:text-dark-secondary'
            >
              By signing up, you agree to the{' '}
              <a
                href='https://www.ariaplus.net/tos'
                target='_blank'
                rel='noreferrer'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='https://www.ariaplus.net/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>
              , including{' '}
              <a
                href='https://www.ariaplus.net/cookies'
                target='_blank'
                rel='noreferrer'
              >
                Cookie Use
              </a>
              .
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold font-Helvetica '>Already have an account? </p>
            <Button
              className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                         focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                         dark:border-light-secondary'
              onClick={signInWithGoogle}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
