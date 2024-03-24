import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { EasterNavLink } from './easter-nav-link';

type EasterNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Easter', src: '/main/ui/header/secondary/explore/easter.svg', path: 'easter' },
    { name:'PalmSunday', src: '/main/ui/header/secondary/explore/easter/modern-green-leaf.svg', path: 'palmsunday' },
  { name:'HolyThurday', src: '/main/ui/header/secondary/explore/easter/bread.svg', path: 'maundy' },
    { name:'GoodFriday', src: '/main/ui/header/secondary/explore/easter/goodfriday.svg', path: 'goodfriday' },
       { name:'EasterSunday', src: '/main/ui/header/secondary/explore/easter/easter-sunday.svg', path: 'eastersunday' }
 
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
