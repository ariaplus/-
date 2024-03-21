import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { PoliticsNavLink } from './politics-nav-link';

type PoliticsNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'GOP', src: '/main/ui/header/primary/politics/GOP.svg', path: 'us/republican' },
    { name:'Democrats', src: '/main/ui/header/primary/politics/democrat.svg', path: 'us/demoratic' }
 
  ]

] as const;

export function PoliticsNav({ follow }: PoliticsNavProps): JSX.Element {
  const politicsNav = allNavs[+!!follow];

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
      {politicsNav.map(({ name, src, path }) => (

        <PoliticsNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
