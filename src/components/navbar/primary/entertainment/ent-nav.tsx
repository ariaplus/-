import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { EntNavLink } from './ent-nav-link';

type EntNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Fashion', src: '/main/ui/header/primary/discover/fashion.svg', path: 'fashion' },
    { name:'FashionProducts', src: '/main/ui/header/primary/fashion/makeup.svg', path: 'fashion/products' },
  { name:'Clothing', src: '/main/ui/header/primary/fashion/fashion-clothing.svg', path: 'clothing' },
    { name:'FashionShows', src: '/main/ui/header/primary/fashion/fashionshow.svg', path: 'fashionshows' },
       { name:'FashionCategories', src: '/main/ui/header/primary/fashion/down.svg', path: 'fashion/categories' }
 
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
