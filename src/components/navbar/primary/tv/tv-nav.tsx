import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { TvNavLink } from './tv-nav-link';

type TvNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'tv', src: '/main/ui/primary/tv/3d-tv-box.svg', path: 'tv' },
    { name:'Featured', src: '/main/ui/header/primary/fashion/makeup.svg', path: 'featured' },
  { name:'Originals', src: '/main/ui/header/primary/fashion/fashion-clothing.svg', path: 'originals' },
    { name:'Categories', src: '/main/ui/header/primary/fashion/fashionshow.svg', path: 'categories' },
       { name:'Watchlist', src: '/main/ui/header/primary/fashion/down.svg', path: 'watchlist' }
 
  ]

] as const;

export function TvNav({ follow }: TvNavProps): JSX.Element {
  const tvNav = allNavs[+!!follow];

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
      {tvNav.map(({ name, src, path }) => (

        <TvNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
