import Link from 'next/link';
import { useRouter } from 'next/router';

type NavbarProps = {
  sections: { name: string; href: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const router = useRouter();

  return (
    <nav className='flex items-center justify-between py-4 px-6 shadow-md'>
      <Link href='/'>
        <a className='text-2xl font-bold text-gray-800'>Twitter</a>
      </Link>
      <ul className='flex space-x-4'>
        {sections.map((section) => (
          <li key={section.href}>
            <Link href={section.href}>
              <a
                className={`block py-2 px-4 rounded-md ${
                  router.pathname === section.href
                    ? 'bg-gray-200 text-gray-800'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {section.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
