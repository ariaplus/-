import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { FlowNavLink } from './flow-nav-link';

type FlowNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Send', src: '/main/ui/header/primary/pay/quick-pay.svg', path: 'pay/send' },
    { name:'Receive', src: '/main/ui/header/primary/pay/wallet.svg', path: 'pay/receive' }

 
  ]

] as const;

export function FlowNav({ follow }: FlowNavProps): JSX.Element {
  const flowNav = allNavs[+!!follow];

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
      {flowNav.map(({ name, src, path }) => (

        <FlowNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
