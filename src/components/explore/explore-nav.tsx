import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Politics', src: '/assets/ariaplus.svg', path: 'politics' },
    { src: '/assets/ariaplus.svg', path: 'finance' },
    { src: '/assets/ariaplus.svg', path: 'business' },
    { src: '/assets/ariaplus.svg', path: 'fashion' },
        { src: '/assets/ariaplus.svg', path: 'beauty' },
    { src: '/assets/ariaplus.svg', path: 'arts' },
    { src: '/assets/ariaplus.svg', path: 'entertainment' },
        { src: '/assets/ariaplus.svg', path: 'fitness' },
    { src: '/assets/ariaplus.svg', path: 'food' },
        { src: '/assets/ariaplus.svg', path: 'gaming' },
    { src: '/assets/ariaplus.svg', path: 'family' },
        { src: '/assets/ariaplus.svg', path: 'sports' },
    { src: '/assets/ariaplus.svg', path: 'esports' }
  ]
] as const;

export function ExploreNav({ follow }: UserNavProps): JSX.Element {
  const exploreNav  = allNavs[+!!follow];

  return (
    <motion.nav
      className={cn(
        `hover-animation flex justify-between no-scrollbar overflow-y-auto
         border-b border-light-border dark:border-dark-border`,
        follow && 'mt-1 mb-0.5'
      )}
      {...variants}
      exit={undefined}
    >
      {exploreNav.map(({ name, src, path }) => (

        <ExploreNavLink name={name} src={src} path={path} key={src} />
      
      ))}
    </motion.nav>
  );
}
