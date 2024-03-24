import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { EasterNavLink } from './easter-nav-link';

type EasterNavProps = {
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

export function EasterNav({ follow }: EasterNavProps): JSX.Element {
  const easterNav = allNavs[+!!follow];

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
      {easterNav.map(({ name, src, path }) => (

        <EasterNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
