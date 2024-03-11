import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Politics', src: '/assets/ariaplus.svg', path: 'politics' }

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
