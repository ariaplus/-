import { ArplImage } from '@components/ui/ariaplus';
import { SEO } from './seo';

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='Aria+'
        description='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
        image='/home.png'
      />
      <i>
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt='Twitter banner'
          layout='fill'
          width='60px'
          height='60px'
          useSkeleton
       />
      </i>
    </main>
  );
}
