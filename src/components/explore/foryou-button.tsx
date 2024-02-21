import Link from 'next/link'
import type { IconName } from '@components/ui/hero-icon';
import { HeroIcon } from '@components/ui/hero-icon';
import { ToolTip } from '@components/ui/tooltip';

interface Props {
  href: string
  icon: IconName
  children: React.ReactNode
}

export const ForYouButton: React.FC<Props> = ({ href, icon, children }) => {
  return (
    <Link href={href}>
      <a className="dark-bg-tab group relative p-2 hover:bg-light-primary/10
                   active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                   dark:active:bg-dark-primary/20">
        <span className="mr-2">
          {/* replace with your icon library's component */}
        <HeroIcon className='h-5 w-5' iconName='AtSymbolIcon' />
        <ToolTip tip='Top tweets' />
        </span>
        {children}
      </a>
    </Link>
  )
}
