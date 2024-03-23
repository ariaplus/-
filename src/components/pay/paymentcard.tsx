import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { ArplImage } from '@components/ui/ariaplus';
import { useUser } from '@lib/context/user-context';
import { UserName } from '@components/user/user-name';

export function PaymentCard() {
  const { user, loading } = useUser();

 const userId = user ? user.id : null;
  
  return (
    <Link href='/pay/flow'>
      <a className='block bg-cover border-solid border-2 border-white bg-center h-[13rem] w-[350px] xs:h-[13rem] sm:h-[13rem] sm:w-[350px] rounded-2xl shadow-md' style={{ backgroundImage: 'url(/assets/blue.jpg)' }}>
        <div className='flex p-4 items:end content-end '>
          <UserName
            tag='h2'
            name={user.name}
            className='-mt-1 text-xl'
            iconClassName='w-6 h-6'
            verified={user.verified}
            verifiedred={user.verifiedred}
            verifiedgreen={user.verifiedgreen}
            verifiedbot={user.verifiedbot}
            verifiedcyan={user.verifiedcyan}
            verifiedgray={user.verifiedgray}
            verifiedgold={user.verifiedgold}
            verifiedpink={user.verifiedpink}
            verifiedviolet={user.verifiedviolet}
            verifiedwhite={user.verifiedwhite}
            verifiedapplegreen={user.verifiedapplegreen}
          />
        </div>
      </a>
    </Link>
  );
}
