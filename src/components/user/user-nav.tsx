import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { UserNavLink } from './user-nav-link';

type UserNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'', src: '/assets/ariaplus.svg', path: '' },
    { name:'', src: '/main/ui/primary/user/ui/bubble-replies.svg', path: 'replies' },
    { name:'', src: '/main/ui/primary/user/ui/shorts.svg', path: 'shorts' },
    {  name:'', src: '/main/ui/primary/user/ui/media.svg', path: 'media' },
    {  name:'', src: '/main/ui/primary/user/ui/bubble-likes.svg', path: 'likes' }
  ],
  [
    {  name:'Following', src: 'Following', path: 'following' },
    { name:'Followers',  src: 'Followers', path: 'followers' }
  ]
] as const;

export function UserNav({ follow }: UserNavProps): JSX.Element {
  const userNav = allNavs[+!!follow];

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
      {userNav.map(({ name, src, path }) => (

        <UserNavLink src={src} name={name} path={path} key={src} />
      
      ))}
    </motion.nav>
  );
}
