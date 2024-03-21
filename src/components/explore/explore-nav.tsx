import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type ExploreNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Discover', src: '/main/ui/primary/discover.svg', path: 'discover' },
    { name:'', src: '/main/ui/header/primary/discover/politics.svg', path: 'politics' },
    { name:'', src: '/main/ui/header/primary/discover/business.svg', path: 'business' },
    { name:'', src: '/main/ui/header/primary/discover/fashion.svg', path: 'fashion' },
    {  name:'', src: '/main/ui/header/primary/discover/hollywood.svg', path: 'entertainment' },
    {  name:'', src: '/main/ui/header/primary/discover/arts.svg', path: 'arts' },
    {  name:'', src: '/main/ui/header/primary/discover/sports.svg', path: 'sports' },
    {  name:'', src: '/main/ui/header/primary/discover/news.svg', path: 'news' }
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

        <ExploreNavLink src={src} name={name} path={path}  tip={name} key={src} />
      
      ))}
    </motion.nav>
  );
}
