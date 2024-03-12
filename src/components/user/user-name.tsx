import cn from 'clsx';
import Link from 'next/link';
import { HeroIcon } from '@components/ui/hero-icon';
import { ArplImage } from '@components/ui/ariaplus';

type UserNameProps = {
  tag?: keyof JSX.IntrinsicElements;
  name: string;
  verified: boolean;
verifiedred: boolean;
verifiedgreen: boolean;
verifiedbot: boolean;
verifiedcyan: boolean;
verifiedgray: boolean;
verifiedgold: boolean;
verifiedpink: boolean;
verifiedviolet: boolean;
verifiedwhite: boolean;
verifiedapplegreen: boolean;
  username?: string;
  className?: string;
  iconClassName?: string;
};

export function UserName({
  tag,
  name,
  verified,
verifiedred,
verifiedgreen,
verifiedbot,
verifiedcyan,
verifiedgray,
verifiedgold,
verifiedpink,
verifiedviolet,
verifiedwhite,
verifiedapplegreen,
  username,
  className,
  iconClassName
}: UserNameProps): JSX.Element {
  const CustomTag = tag ? tag : 'p';

  return (
    <Link href={username ? `/${username}` : '#'}>
      <a
        className={cn(
          'flex items-center gap-1 truncate font-bold',
          username ? 'custom-underline' : 'pointer-events-none',
          className
        )}
        tabIndex={username ? 0 : -1}
      >
        <CustomTag className='truncate'>{name}</CustomTag>
        {verified && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/verified.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
            <CustomTag className='truncate'></CustomTag>
          </>
        )}
         {verifiedred && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/red.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
          {verifiedgreen && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/green.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
       {verifiedbot && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/bot.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
        {verifiedcyan && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/cyan.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
      {verifiedgray && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/gray.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
      {verifiedgold && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/gold.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
        {verifiedpink && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/pink.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
       {verifiedviolet && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/violet.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}

       {verifiedwhite && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/white.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}

      {verifiedapplegreen && (
          <>
            <i>
              <ArplImage
                imgClassName='arplicon'
                blurClassName='none'
                src='/main/ui/primary/user/verified/apple-green.svg'
                alt=''
                layout='fill'
                width='20px'
                height='20px'
              />
            </i>
          </>
        )}
        
      </a>
    </Link>
  );
}
