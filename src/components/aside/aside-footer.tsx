const footerLinks = [
  ['Terms of Service', 'https://www.ariaplus.net'],
  ['Privacy Policy', 'https://www.ariaplus.net'],
  ['Cookie Policy', 'https://www.ariaplus.net'],
  ['Accessibility', 'https://www.ariaplus.net'],
  [
    'Ads Info',
    'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html'
  ]
] as const;

export function AsideFooter(): JSX.Element {
  return (
    <footer
      className='sticky top-16 flex flex-col gap-3 text-center text-sm 
                 text-light-secondary dark:text-dark-secondary'
    >
      <nav className='flex flex-wrap justify-center gap-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={href}
          >
            {linkName}
          </a>
        ))}
      </nav>
      <p>© 2024 Aria+, Inc.</p>
    </footer>
  );
}
