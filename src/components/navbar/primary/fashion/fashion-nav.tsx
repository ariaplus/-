import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { FashionNavLink } from './fashion-nav-link';

type FashionNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Business', src: '/main/ui/header/primary/discover/business.svg', path: 'business' },
    { name:'Banks', src: '/main/ui/header/primary/business/bank.svg', path: 'banks' },
  { name:'Fed', src: '/main/ui/header/primary/business/3d-coin.svg', path: 'fed' },
    { name:'Finance', src: '/main/ui/header/primary/business/gold-bars.svg', path: 'finance' },
       { name:'Invest', src: '/main/ui/header/primary/business/investment-chart.svg', path: 'invest' }
 
  ]

] as const;

export function FashionNav({ follow }: FashionNavProps): JSX.Element {
  const fashionNav = allNavs[+!!follow];

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
      {fashionNav.map(({ name, src, path }) => (

        <FashionNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
