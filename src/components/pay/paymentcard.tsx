import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { ArplImage } from '@components/ui/ariaplus';

export function PaymentCard() {

const { user } = useAuth();
const userId = user?.id as string;
  
  return (
    <Link href='/pay/card'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-64 rounded-lg shadow-md' style={{ backgroundImage: 'url(/path/to/image.jpg)' }}>
            <div className='flex flex-col items-center pt-24'>
      <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt='Twitter banner'
          layout='fill'
          width='40px'
          height='40px'
          useSkeleton
       />
            </div>
        <div className='p-4 items:end content-end pt-30'>
          <h2 className='text-xl font-semibold mb-1' aria-label='Aria+ Pay Card'>Aria+ Pay Card</h2>
        <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
      </a>
    </Link>
  );
}
