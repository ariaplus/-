import { motion } from 'framer-motion';
import cn from 'clsx';
import { variants } from '@components/user/user-header';
import { NewsNavLink } from './news-nav-link';

type NewsNavProps = {
  follow?: boolean;
};

const allNavs = [
  [
    { name:'News', src: '/main/ui/header/primary/discover/news.svg', path: 'news' },
    { name:'Trends', src: '/main/ui/header/primary/news/trend.svg', path: 'news/trends' },
  { name:'NewYorkTimes', src: '/main/ui/header/primary/news/nytimes.svg', path: 'newyorktimes' },
    { name:'Articles', src: '/main/ui/header/primary/news/news-article.svg', path: 'articles' },
       { name:'NewsCategories', src: '/main/ui/header/primary/down.svg', path: 'news/categories' }
 
  ]

] as const;

export function NewsNav({ follow }: NewsNavProps): JSX.Element {
  const newsNav = allNavs[+!!follow];

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
      {newsNav.map(({ name, src, path }) => (

        <NewsNavLink src={src} name={name} path={path}  key={src} />
      
      ))}
    </motion.nav>
  );
}
