import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { ExploreNavLink } from './explore-nav-link';

type ExploreNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'', src: '/assets/ariaplus.svg', path: 'discover' },
    { name:'', src: '/main/ui/primary/user/ui/bubble-replies.svg', path: 'news' },
    { name:'', src: '/main/ui/primary/user/ui/shorts.svg', path: 'shorts' },
    {  name:'', src: '/main/ui/primary/user/ui/media.svg', path: 'media' },
    {  name:'', src: '/main/ui/primary/user/ui/bubble-like.svg', path: 'likes' }
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
