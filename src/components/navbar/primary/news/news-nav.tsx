import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { NewsNavLink } from './news-nav-link';

type NewsNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Entertainment', src: '/main/ui/header/primary/discover/hollywood.svg', path: 'entertainment' },
    { name:'HollywoodNews', src: '/main/ui/header/primary/ent/hollywood-camera.svg', path: 'hollywood/news' },
  { name:'HollywoodAwards', src: '/main/ui/header/primary/ent/oscar.svg', path: 'hollywood/awards' },
    { name:'HollywoodMusic', src: '/main/ui/header/primary/ent/hollywood-music.svg', path: 'hollywood/music' },
       { name:'HollywoodCategoories', src: '/main/ui/header/primary/down.svg', path: 'hollywood/categories' }
 
  ]

] as const;

export function NewsNav({ follow }: NewsNavProps): JSX.Element {
  const newsNav = allNavs[+!!follow];

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
      {newsNav.map(({ name, src, path }) => (

        <NewsNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
