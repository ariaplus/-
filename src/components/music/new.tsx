import Link from 'next/link';

interface EpisodeProps {
  title: string;
  image: string;
  description: string;
  href: string;
}

const Music = ({ title, image, description, href }: EpisodeProps) => {
  const backgroundImage = `url(${image})`;

  return (
    <Link href={href}>
      <a className='w-40 h-80 rounded-lg border-solid border-white bg-opacity-50 overflow-visible'>
        <div className='bg-cover bg-center p-4 m-2 w-40 h-40 opacity-100 rounded-lg border-solid border-white bg-opacity-50' style={{ backgroundImage }}>
          <h2 className='text-xs w-28 font-bold mt-40 opacity-100 '>{title}</h2>
        </div>
      </a>
    </Link>
  );
};

export function NewMusicSlide() {
  const songs = [
    {
      title: 'Good For You (Selena Gomez)',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/33/76/233376bf-d737-9438-e563-12c927c9cb7f/15UMGIM48241.rgb.jpg/316x316bb.webp',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/music/listen/goodforyou'
    },
    {
      title: 'The Wounded Angel',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/songs/season1/episode1'
    },
    {
      title: 'The Wounded Angel',
      image: '/assets/tv/movie/data/persuasion/persuasion-cover.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/songs/season1/episode1'
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
      description: 'Jo\'s life back home is not how she remembers it, and growing tension with Magnus adds to her feelings of alienation.',
      href: '/songs/season1/episode4'
    }
  ];

  return (
    <div className='flex overflow-x-scroll no-scrollbar space-x-4 p-4'>
      {songs.map((song) => (
        <Music key={song.href} {...song} />
      ))}
    </div>
  );
}
