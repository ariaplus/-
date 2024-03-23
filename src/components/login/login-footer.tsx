const footerLinks = [
  ['About', 'https://www.ariaplus.net/about'],
  ['Help Center', 'https://www.ariaplus.net/help'],
  ['Privacy Policy', 'https://www.ariaplus.net/tos'],
  ['Cookie Policy', 'https://www.ariaplus.net/cookies'],
  ['Accessibility', 'https://www.ariaplus.net/access'],
  ['Blog', 'https://www.ariaplus.net/blog'],
  ['Status', 'https://www.ariaplus.net/status'],
  ['Careers', 'https://www.ariaplus.net/us/careers'],
  ['Brand Resources', 'https://www.ariaplus.net/brand'],
  ['Advertising', 'https://www.ariaplus.net/ads'],
  ['Marketing', 'https://www.ariaplus.net/marketing'],
  ['Developers', 'https://www.ariaplus.net/developer'],
  ['Directory', 'https://www.ariaplus.net/directory'],
  ['Settings', 'https://www.ariaplus.net/settings']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-evenly bg-black text-sm text-light-secondary z-50 h-[30px] dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={linkName}
          >
            {linkName}
          </a>
        ))}
        <p>© 2024 Aria+, Inc.</p>
      </nav>
    </footer>
  );
}
