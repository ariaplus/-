import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { UserNavLink } from './user-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { src: './assets/ariaplus.svg', path: '' }
  ],
  [
    { src: 'Following', path: 'following' },
    { src: 'Followers', path: 'followers' }
  ]
] as const;

export function UserNav({ follow }: UserNavProps): JSX.Element {
  const userNav = allNavs[+!!follow];

  return (
    <motion.nav
      className={cn(
        `hover-animation flex justify-between overflow-y-auto
         border-b border-light-border dark:border-dark-border`,
        follow && 'mt-1 mb-0.5'
      )}
      {...variants}
      exit={undefined}
    >
      {userNav.map(({ src, path }) => (

        <UserNavLink src={src} path={path} key={src} />
      
      ))}
    </motion.nav>
  );
}
