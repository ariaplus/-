import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'clsx';
import { ToolTip } from '@components/ui/tooltip';
import { ArplImage } from '@components/ui/ariaplus';

type ExploreNavLinkProps = {
  name: string;
  src: string;
  path: string;
};

export function ExploreNavLink({ name, src, path }: ExploreNavLinkProps): JSX.Element {
  const {
    asPath,
    query: { id }
  } = useRouter();

  const userPath = path ? `/${path}` : '';

  return (
    <Link href={userPath} scroll={false}>
         
      
      <a
        className='hover-animation main-tab dark-bg-tab flex flex-1 justify-center
                   hover:bg-light-primary/10 dark:hover:bg-dark-primary/10'
      >
        
        <ToolTip tip={name} />
        <div className='px-[8px] md:px-[16px]'>
          
        
     

         <ToolTip tip={name} />
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
        </div>
      </a>
    </Link>
  );
}
