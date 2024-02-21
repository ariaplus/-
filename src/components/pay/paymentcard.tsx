import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';

export function PaymentCard() {

const { user } = useAuth();
const userId = user?.id as string;
  
  return (
    <Link href='/pay/card'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-64 rounded-lg shadow-md px-8' style={{ backgroundImage: 'url(/path/to/image.jpg)' }}>
        <div className='p-4 items:end '>
          <h2 className='text-xl font-semibold mb-1' aria-label='Aria+ Pay Card'>Aria+ Pay Card</h2>
        <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
      </a>
    </Link>
  );
}
