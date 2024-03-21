import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { PoliticsNavLink } from './politics-nav-link';

type PoliticsNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Soccer', src: '/main/ui/header/primary/sports/sports-filled.svg', path: 'sports' },
    { name:'', src: '/main/ui/header/primary/sports/soccer.svg', path: 'soccer' },
    { name:'', src: '/main/ui/header/primary/sports/football.svg', path: 'football' },
    
    {  name:'', src: '/main/ui/header/primary/sports/basketball.svg', path: 'basketball' },
    { name:'', src: '/main/ui/header/primary/sports/baseball.svg', path: 'baseball' },
    {  name:'', src: '/main/ui/header/primary/sports/tennis.svg', path: 'tennis' },
    {  name:'', src: '/main/ui/header/primary/sports/golf.svg', path: 'golf' },
    {  name:'', src: '/main/ui/header/primary/sports/esports2.svg', path: 'esports' }
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
