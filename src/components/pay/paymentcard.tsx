import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { ArplImage } from '@components/ui/ariaplus';

export function PaymentCard() {

const { user } = useAuth();
const userId = user?.id as string;
  
  return (
    <Link href='/pay/flow'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-[13rem] w-[350px] xs:h-[13rem] sm:h-[13rem] sm:w-[350px] rounded-2xl shadow-md' style={{ backgroundImage: 'url(/main/ui/primary/pay/elements/cards/ariaplus-card.jpg)' }}>

          <div className='flex p-4 items:end content-end justify-between'>
        
        <p className='pl-2 text-[18px] font-bold text-gray-400    '>
            $0
          </p>
        </div>
      </a>
    </Link>
  );
}
