import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { CoachellaNavLink } from './coachella-nav-link';

type CoachellaNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'Coachella', src: '/main/ui/header/secondary/explore/easter.svg', path: 'coachella' },
    { name:'CoachellaMusic', src: '/main/ui/header/secondary/explore/easter/modern-green-leaf.svg', path: 'coachella/music' },
  { name:'CoachellaParties', src: '/main/ui/header/secondary/explore/easter/bread.svg', path: 'coachella/parties' },
    { name:'CoachellaCommunities', src: '/main/ui/header/secondary/explore/easter/goodfriday.svg', path: 'communities/coachella' },
       { name:'CoachellaCamp', src: '/main/ui/header/secondary/explore/easter/easter-sunday.svg', path: 'coachella/camp' }
 
  ]

] as const;

export function CoachellaNav({ follow }: CoachellaNavProps): JSX.Element {
  const coachellaNav = allNavs[+!!follow];

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
      {coachellaNav.map(({ name, src, path }) => (

        <CoachellaNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
