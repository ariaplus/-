import Link from 'next/link';

interface EpisodeProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

const Episode = ({ title, image, description, href }: EpisodeProps) => {
  const backgroundImage = `url(${image})`;

  return (
    <div className='bg-cover bg-center p-4 m-2 w-64 h-80' style={{ backgroundImage }}>
      <Link href={href}>
        <a>
          <h2 className='text-sm font-bold mt-4'>{title}</h2>
          <p className='text-gray-600 text-xs mt-2'>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export function StrangeCriminalsSeason1() {
  const episodes = [
    {
      title: 'The Wounded Angel',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/episodes/season1/episode1'
    },
    {
      title: 'Live And Let Die',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'Jo races to find a way back to Earth before her life support runs out. Henry is concerned about his experiment.',
      href: '/episodes/season1/episode2'
    },
    {
      title: 'Somewhere in Space Hangs My Heart',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'The space agencies begin their investigation into the ISS collision. Jo struggles to reconnect with Magnus and Alice.',
      href: '/episodes/season1/episode3'
    },
    {
      title: 'The Left Hand of God',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'Jo\'s life back home is not how she remembers it, and growing tension with Magnus adds to her feelings of alienation.',
      href: '/episodes/season1/episode4'
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
