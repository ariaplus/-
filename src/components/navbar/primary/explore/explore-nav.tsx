import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type ExploreNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Explore', src: '/main/ui/header/primary/explore/feed.svg', path: 'explore' },
    { name:'Trends', src: '/main/ui/header/primary/explore/trends.svg', path: 'trends' },
        { name:'Easter', src: 'public/main/ui/header/secondary/explore/easter.svg', path: 'easter' },
  { name:'Likes', src: '/main/ui/header/primary/explore/liked.svg', path: 'likes' },
    { name:'ExploreMore', src: '/main/ui/header/primary/explore/explore-more.svg', path: 'explore/more' }

 
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

        <ExploreNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
