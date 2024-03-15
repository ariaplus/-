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

import { useWindow } from '@lib/context/window-context';


export const variants: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

type AsideTvProps = {
  inTrendsPage?: boolean;
};

export function AsideTv({ inTrendsPage }: AsideTvProps): JSX.Element {
  const { data, loading } = useTrends(1, inTrendsPage ? 100 : 10, {
    refreshInterval: 30000
  });

  const { trends, location } = data ?? {};
   const { isMobile } = useWindow();


  return (
    
    <section
      className={cn(
        !inTrendsPage &&
          'hover-animation rounded-2xl bg-black border border-slate-700'
      )}
    >

    </section>
  );
}
