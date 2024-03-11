import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { UserNavLink } from './explore-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name: 'Politics', path: 'politics' },
    { name: 'Finance', path: 'finance' },
    { name: 'Business', path: 'business' },
    { name: 'Fashion', path: 'fashion' },
    { name: 'Arts', path: 'arts' },
    { name: 'Entertainment', path: 'entertainment' },
   { name: 'Fitness', path: 'fitness' },
    { name: 'Food', path: 'foods' },
    { name: 'Gaming', path: 'gaming' },
   { name: 'Family', path: 'family' },
    { name: 'Sports', path: 'sports' },
  { name: 'E-Sports', path: 'esports' }
  ]
] as const;

export function ExploreNav({ follow }: UserNavProps): JSX.Element {
  const exploreNav = allNavs[+!!follow];

  return (
    <motion.nav
      className={cn(
        `hover-animation no-scrollbar flex justify-between overflow-y-auto
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
