import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { BusinessNavLink } from './business-nav-link';

type BusinessNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'GOP', src: '/main/ui/header/primary/politics/GOP.svg', path: 'us/republican' },
    { name:'Democrats', src: '/main/ui/header/primary/politics/democrat.svg', path: 'us/demoratic' }
 
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
