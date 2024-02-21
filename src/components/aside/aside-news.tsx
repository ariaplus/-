import Link from 'next/link';
import cn from 'clsx';
import { motion } from 'framer-motion';
import { formatNumber } from '@lib/date';
import { preventBubbling } from '@lib/utils';
import { useTrends } from '@lib/api/trends';
import { Error } from '@components/ui/error';
import { HeroIcon } from '@components/ui/hero-icon';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { Loading } from '@components/ui/loading';
import type { MotionProps } from 'framer-motion';
import { NextImage } from '@components/ui/next-image';

export const variants: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

type AsideTrendsProps = {
  inTrendsPage?: boolean;
};

export function AsideNews({ inTrendsPage }: AsideTrendsProps): JSX.Element {
  const { data, loading } = useTrends(1, inTrendsPage ? 100 : 10, {
    refreshInterval: 30000
  });

  const { trends, location } = data ?? {};

  return (
    
    <section
      className={cn(
        !inTrendsPage &&
          'hover-animation rounded-2xl bg-main-sidebar-background'
      )}
    >
             <NextImage className='accent-tab relative mt-0.5 h-36 xs:h-48 sm:h-96 h-full w-full rounded-none p-0 transition hover:brightness-75'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='https://people.com/thmb/9uGdBRNKu7lCYdCpKde438oTUrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/taylor-swift-joined-by-maren-morris-060523-tout-c762fe47b0dc438d92a390bb10e69d83.jpg'
            alt=''
            key=''
          />
      
      {loading ? (
        <Loading />
      ) : trends ? (
        <motion.div
          className={cn('inner:px-4 inner:py-3', inTrendsPage && 'mt-0.5')}
          {...variants}
        >

          {trends.map(({ name, query, tweet_volume, url }) => (
            <Link href={url} key={query}>
              <a
                className='hover-animation accent-tab hover-card relative 
                           flex cursor-not-allowed flex-col gap-0.5'
                onClick={preventBubbling()}
              >
                <div className='absolute right-2 top-2'>
                  <Button
                    className='hover-animation group relative cursor-not-allowed p-2
                               hover:bg-accent-blue/10 focus-visible:bg-accent-blue/20 
                               focus-visible:!ring-accent-blue/80'
                    onClick={preventBubbling()}
                  >
                    <HeroIcon
                      className='h-5 w-5 text-light-secondary group-hover:text-accent-blue 
                                 group-focus-visible:text-accent-blue dark:text-dark-secondary'
                      iconName='EllipsisHorizontalIcon'
                    />
                    <ToolTip tip='More' />
                  </Button>
                </div>
                <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                  Trending{' '}
                  {location === 'Worldwide'
                    ? 'Worldwide'
                    : `in ${location as string}`}
                </p>
                <p className='font-bold'>{name}</p>
                <p className='text-sm text-light-secondary dark:text-dark-secondary'>
                  {formatNumber(tweet_volume)} tweets
                </p>
              </a>
            </Link>
          ))}
          {!inTrendsPage && (
            <Link href='/trends'>
              <a
                className='custom-button accent-tab hover-card block w-full rounded-2xl
                           rounded-t-none text-center text-main-accent'
              >
                Show more
              </a>
            </Link>
          )}
        </motion.div>
      ) : (
        <Error />
      )}
    </section>
  );
}