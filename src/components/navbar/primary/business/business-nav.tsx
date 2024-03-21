import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { BusinessNavLink } from './business-nav-link';

type BusinessNavProps = {
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

export function BusinessNav({ follow }: BusinessNavProps): JSX.Element {
  const businessNav = allNavs[+!!follow];

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
      {businessNav.map(({ name, src, path }) => (

        <PoliticsNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
