import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'clsx';
import { preventBubbling } from '@lib/utils';
import { HeroIcon } from '@components/ui/hero-icon';
import type { NavLink } from './sidebar';
import { ArplImage } from '@components/ui/ariaplus';

type SidebarLinkProps = NavLink & {
  username?: string;
};

export function SidebarLink({
  href,
  username,
  src,
  linkName,
  disabled,
  canBeHidden
}: SidebarLinkProps): JSX.Element {
  const { asPath } = useRouter();
  const isActive = username ? asPath.includes(username) : asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(
          'group outline-none',
          canBeHidden ? 'hidden xs:flex' : 'flex',
          disabled && 'cursor-not-allowed'
        )}
        onClick={disabled ? preventBubbling() : undefined}
      >
        <div
          className={cn(
            `custom-button flex items-center justify-center gap-4 self-start text-xl transition 
             duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 
             group-focus-visible:ring-[#878a8c] dark:group-hover:bg-dark-primary/10 
             dark:group-focus-visible:ring-white xs:p-2 xl:pr-5`,
            isActive && 'font-bold'
          )}
        >
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src={src}
          alt=''
          layout='fill'
          width='25px'
          height='25px'
          useSkeleton
       />
          <p className='hidden xl:block'>{linkName}</p>
        </div>
      </a>
    </Link>
  );
}
