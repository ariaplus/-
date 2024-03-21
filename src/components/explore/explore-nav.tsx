import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type ExploreNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Discover', src: '/assets/ariaplus.svg', path: 'discover' },
    { name:'', src: '/assets/ariaplus.svg', path: 'politics' },
    { name:'', src: '/assets/ariaplus.svg', path: 'business' },
    { name:'', src: '/assets/ariaplus.svg', path: 'fashion' },
    {  name:'', src: '/assets/ariaplus.svg', path: 'entertainment' },
    {  name:'', src: '/assets/ariaplus.svg', path: 'fyi' },
    {  name:'', src: '/assets/ariaplus.svg', path: 'sports' },
    {  name:'', src: '/assets/ariaplus.svg', path: 'news' }
  ]

] as const;

export function ExploreNav({ follow }: ExploreNavProps): JSX.Element {
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
      {exploreNav.map(({ name, src, path }) => (

        <ExploreNavLink src={src} name={name} path={path} key={src} />
      
      ))}
    </motion.nav>
  );
}
