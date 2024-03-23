import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { ArplImage } from '@components/ui/ariaplus';

export function PaymentCard() {

const { user } = useAuth();
const userId = user?.id as string;
  
  return (
    <Link href='/pay/flow'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-[13rem] w-[350px] xs:h-[13rem] sm:h-[13rem] sm:w-[350px] rounded-2xl shadow-md' style={{ backgroundImage: 'url(/assets/blue.jpg)' }}>

          <div className='flex p-4 items:end content-end justify-between'>
                    <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/explore.svg'
          alt=''
          layout='fill'
          width='25px'
          height='25px'
       />
        <p className='pl-2 font-[Helveticva] text-[18px] font-bold text-gray-400    '>
            $0
          </p>
        </div>
      </a>
    </Link>
  );
}
