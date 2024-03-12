import cn from 'clsx';
import Link from 'next/link';
import { HeroIcon } from '@components/ui/hero-icon';
import { ArplImage } from '@components/ui/ariaplus';


type UserNameProps = {
  tag?: keyof JSX.IntrinsicElements;
  name: string;
  verified: boolean;
 explore: boolean;
  username?: string;
  className?: string;
  iconClassName?: string;
};

export function UserName({
  tag,
  name,
  verified,
  explore,
  username,
  className,
  iconClassName
}: UserNameProps): JSX.Element {
  const CustomTag = tag ? tag : 'p';

  return (
    <Link href={username ? `/${username}` : '#'}>
      <a
        className={cn(
          'flex items-center gap-1 truncate font-bold',
          username ? 'custom-underline' : 'pointer-events-none',
          className
        )}
        tabIndex={username ? 0 : -1}
      >
        <CustomTag className='truncate'>{name}</CustomTag>
        {verified && (
          <i>
 
                    <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/main/ui/primary/verified.svg'
          alt=''
          layout='fill'
          width='20px'
          height='20px'
       />
         <CustomTag className='truncate'>{name}</CustomTag>
        {explore && (
          <i>
 
                    <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/explore.svg'
          alt=''
          layout='fill'
          width='20px'
          height='20px'
       />

          </i>
        )}
      </a>
    </Link>
  );
}
