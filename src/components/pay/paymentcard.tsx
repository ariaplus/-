import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { ArplImage } from '@components/ui/ariaplus';

export function PaymentCard() {

const { user } = useAuth();
const userId = user?.id as string;
  
  return (
    <Link href='/pay/flow'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-[13rem] w-[350px] xs:h-64 sm:h-64 sm:w-[350px] rounded-2xl shadow-md' style={{ backgroundImage: 'url(/assets/blue.jpg)' }}>

          <div className='flex p-4 items:end content-end '>
        <p className='pl-2 text-xl text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
      </a>
    </Link>
  );
}
