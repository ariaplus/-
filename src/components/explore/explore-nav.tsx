import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { UserNavLink } from './explore-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name: 'For You', path: 'foryou' },
    { name: 'Trending', path: 'trending' },
    { name: 'News', path: 'news' },
    { name: 'Sports', path: 'sports' },
    { name: 'Fun', path: 'fun' }
  ],
  [
    { name: 'Following', path: 'following' },
    { name: 'Followers', path: 'followers' }
  ]
] as const;

export function ExploreNav({ follow }: UserNavProps): JSX.Element {
  const exploreNav = allNavs[+!!follow];

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
      {exploreNav.map(({ name, path }) => (
        <UserNavLink name={name} path={path} key={name} />
      ))}
    </motion.nav>
  );
}
