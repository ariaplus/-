import Link from 'next/link';
import { useAuth } from '@lib/context/auth-context';
import { useWindow } from '@lib/context/window-context';
import { useModal } from '@lib/hooks/useModal';
import { Modal } from '@components/modal/modal';
import { Input } from '@components/input/input';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import { SidebarLink } from './sidebar-link';
import { MoreSettings } from './more-settings';
import { SidebarProfile } from './sidebar-profile';
import type { IconName } from '@components/ui/hero-icon';
import { ArplImage } from '@components/ui/ariaplus';

export type NavLink = {
  href: string;
  linkName: string;
  iconName: IconName;
  disabled?: boolean;
  canBeHidden?: boolean;
};

const navLinks: Readonly<NavLink[]> = [
  {
    href: '/explore',
    linkName: 'Explore',
    iconName: 'HashtagIcon'
  },
  {
    href: '/notifications',
    linkName: 'Notifications',
    iconName: 'BellIcon',
    canBeHidden: true
  },
  {
    href: '/messages',
    linkName: 'Messages',
    iconName: 'EnvelopeIcon',
    disabled: true
  },
  {
    href: '/ai',
    linkName: 'Ai',
    iconName: 'XMarkIcon',
    canBeHidden: true
  },
  {
    href: '/tv',
    linkName: 'tv',
    iconName: 'TicketIcon',
    canBeHidden: true
  },
  {
    href: '/music',
    linkName: 'Music',
    iconName: 'MusicalNoteIcon',
    canBeHidden: true
  },
 {
    href: '/market',
    linkName: 'Market',
    iconName: 'ShoppingBagIcon',
    canBeHidden: true
  }
];

export function Sidebar(): JSX.Element {
  const { user } = useAuth();
  const { isMobile } = useWindow();

  const { open, openModal, closeModal } = useModal();

  const username = user?.username as string;

  return (
    <header
      id='sidebar'
      className='flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24
                 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end'
    >
      <Modal
        className='flex items-start justify-center'
        modalClassName='bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden'
        open={open}
        closeModal={closeModal}
      >
        <Input modal closeModal={closeModal} />
      </Modal>
      <div
        className='fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border 
                   bg-main-background py-0 dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 
                   xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72'
      >
        <section className='flex flex-col justify-center gap-2 xs:items-center xl:items-stretch'>
          <h1 className='hidden xs:flex'>
            <Link href='/explore'>
              <a
                className='custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 
                           focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80
                           dark:text-twitter-icon dark:hover:bg-dark-primary/10'
              >
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt='Twitter banner'
          layout='fill'
          width='40px'
          height='40px'
          useSkeleton
       />
              </a>
            </Link>
          </h1>
          <nav className='flex items-center justify-around xs:flex-col xs:justify-center xl:block'>
            {navLinks.map(({ ...linkData }) => (
              <SidebarLink {...linkData} key={linkData.href} />
            ))}
            <SidebarLink
              href={`/${username}`}
              username={username}
              linkName='Profile'
              iconName='UserIcon'
            />
            {!isMobile && <MoreSettings />}
          </nav>
        <Button
          className='accent-tab bg-main-accent px-4 py-1.5 h-10 font-bold text-white
                     enabled:hover:bg-main-accent/90
                     enabled:active:bg-main-accent/75'

          
                       onClick={openModal}
        >
      <ArplImage
          useSkeleton
          imgClassName='arplicon'
          blurClassName='none'
          src='/assets/ariaplus.svg'
          alt=''
          layout='fill'
          width='20px'
          height='20px'
       />
        </Button>

          </Button>
        </section>
        {!isMobile && <SidebarProfile />}
      </div>
    </header>
  );
}
