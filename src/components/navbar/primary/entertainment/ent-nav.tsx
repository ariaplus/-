import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { EntNavLink } from './ent-nav-link';

type EntNavProps = {
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

export function EntNav({ follow }: EntNavProps): JSX.Element {
  const entNav = allNavs[+!!follow];

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
      {entNav.map(({ name, src, path }) => (

        <EntNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
