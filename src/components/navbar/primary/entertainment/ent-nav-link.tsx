import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'clsx';
import { ToolTip } from '@components/ui/tooltip';
import { ArplImage } from '@components/ui/ariaplus';

type EntNavLinkProp = {
  name: string;
  src: string;
  path: string;
};

export function EntNavLink({ name, src, path }: EntNavLinkProp): JSX.Element {
  const {
    asPath,
    query: { id }
  } = useRouter();

  const userPath = path ? `/${path}` : '';

  return (
    <Link href={userPath} scroll={false}>
      <a
        className='hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10'
      >
        <div className='px-[8px] md:px-[16px]'>
          <ToolTip
            className='translate-y-1 z-50' // Apply z-index to bring tooltip to the top
            tip={name}
          />
          <p
            className={cn(
              'flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200',
              asPath === userPath
                ? 'text-light-primary dark:text-dark-primary [&>i]:scale-100 [&>i]:opacity-100'
                : 'text-light-secondary dark:text-dark-secondary'
            )}
          >
            <ArplImage
              imgClassName='arplicon'
              blurClassName='none'
              src={src}
              alt=''
              layout='fill'
              width='25px'
              height='25px'
              useSkeleton
            />
            <i className='h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200' />
          </p>
        </div>
      </a>
    </Link>
  );
}
