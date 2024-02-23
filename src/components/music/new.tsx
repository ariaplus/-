import Link from 'next/link';

interface EpisodeProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

const Music = ({ title, image, description, href }: EpisodeProps) => {
  return (
    <Link href={href}>
      <div className='group relative rounded-lg overflow-visible'>
        <div className='aspect-w-1 aspect-h-1 group-hover:opacity-75'>
          <img src={image} alt={title} className='object-cover object-center w-full h-full' />
        </div>
        <div className='absolute inset-0 flex flex-col p-4 mt-2'>
          <h2 className='text-white truncate'>{title}</h2>
          <p className='text-gray-300 mt-2'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export function NewMusicSlide() {
  const songs = [
    {
      title: 'The Wounded Angel',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/tv/strangecriminals/episode/thewoundedangel'
    },
    {
      title: 'Live And Let Die',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'Jo races to find a way back to Earth before her life support runs out. Henry is concerned about his experiment.',
      href: '/songs/season1/episode2'
    },
    {
      title: 'Somewhere in Space Hangs My Heart',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'The space agencies begin their investigation into the ISS collision. Jo struggles to reconnect.',
      href: '/songs/season1/episode3'
    },
    {
      title: 'The Left Hand of God',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: "Jo's life back home is not how she remembers it, and growing tension with Magnus adds to her feelings of alienation.",
      href: '/songs/season1/episode4'
    }
  ];

  return (
    <div className='flex overflow-x-scroll no-scrollbar space-x-4 p-4'>
      {songs.map((music) => (
        <Music key={music.href} {...music} />
      ))}
    </div>
  );
}
