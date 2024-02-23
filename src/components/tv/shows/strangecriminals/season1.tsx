import Link from 'next/link';

interface EpisodeProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

const Episode = ({ title, image, description, href }: EpisodeProps) => {
  return (
    <div className='bg-cover bg-center p-4 m-2 w-64 h-80' style={{ backgroundImage: 'url(${image})' }}>
      <Link href={href}>
        <a>
          <h2 className='text-xl font-bold mt-4'>{title}</h2>
          <p className='text-gray-600 mt-2'>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export function StrangeCriminalsSeason1() {
  const episodes = [
    {
      title: 'The Wounded Angel',
      image: '/episodes/season1/episode1.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/episodes/season1/episode1',
    },
    {
      title: 'Live And Let Die',
      image: '/episodes/season1/episode2.jpg',
      description: 'Jo races to find a way back to Earth before her life support runs out. Henry is concerned about his experiment.',
      href: '/episodes/season1/episode2',
    },
    {
      title: 'Somewhere in Space Hangs My Heart',
      image: '/episodes/season1/episode3.jpg',
      description: 'The space agencies begin their investigation into the ISS collision. Jo struggles to reconnect with Magnus and Alice.',
      href: '/episodes/season1/episode3',
    },
    {
      title: 'The Left Hand of God',
      image: '/episodes/season1/episode4.jpg',
      description: 'Jo\'s life back home is not how she remembers it, and growing tension with Magnus adds to her feelings of alienation.',
      href: '/episodes/season1/episode4',
    }
  ];

  return (
    <div className='flex overflow-x-scroll space-x-4 p-4'>
      {episodes.map((episode) => (
        <Episode key={episode.href} {...episode} />
      ))}
    </div>
  );
}
