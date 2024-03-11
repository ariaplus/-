import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { src: '/assets/ariaplus.svg', path: '' },
    { src: '/assets/ariaplus.svg', path: 'replies' },
    { src: '/assets/ariaplus.svg', path: 'shorts' },
    { src: '/assets/ariaplus.svg', path: 'media' },
    { src: '/assets/ariaplus.svg', path: 'likes' }
  ],
  [
    { src: 'Following', path: 'following' },
    { src: 'Followers', path: 'followers' }
  ]
] as const;

export function ExploreNav({ follow }: UserNavProps): JSX.Element {
  const exploreNav  = allNavs[+!!follow];

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
      {exploreNav.map(({ src, path }) => (

        <UserNavLink src={src} path={path} key={src} />
      
      ))}
    </motion.nav>
  );
}
