import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { PayNavLink } from './pay-nav-link';

type PayNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'News', src: '/main/ui/header/primary/discover/news.svg', path: 'pay' },
    { name:'Trends', src: '/main/ui/header/primary/news/trend.svg', path: 'pay/wallet' }

 
  ]

] as const;

export function PayNav({ follow }: PayNavProps): JSX.Element {
  const payNav = allNavs[+!!follow];

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
      {payNav.map(({ name, src, path }) => (

        <PayNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
