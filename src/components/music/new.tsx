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
          <h2 className='text-xs w-40 font-bold mt-[150px] opacity-100 '>{title}</h2>
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
      title: 'Single Soon (Selena Gomez)',
      image: 'https://m.media-amazon.com/images/I/51yXKzg19-L._UX250_FMwebp_QL85_.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/songs/season1/episode1'
    },
    {
      title: 'Lose You to Love Me',
      image: 'https://m.media-amazon.com/images/I/51U37LpKVSL._UX250_FMwebp_QL85_.jpg',
      description: 'A disaster on board the International Space Station becomes a fight for survival.',
      href: '/songs/season1/episode1'
    },
    {
      title: 'Hands To Myself (Remixes) Selena Gomez',
      image: 'https://m.media-amazon.com/images/I/51R+KpJ1S1L._UX250_FMwebp_QL85_.jpg',
      description: 'Jo races to find a way back to Earth before her life support runs out. Henry is concerned about his experiment.',
      href: '/songs/season1/episode2'
    },
    {
      title: 'Good For You Selena Gomez [feat. A$AP Rocky]',
      image: 'https://m.media-amazon.com/images/I/61M0jgA4w7L._UX250_FMwebp_QL85_.jpg',
      description: 'The space agencies begin their investigation into the ISS collision. Jo struggles to reconnect.',
      href: '/songs/season1/episode3'
    },
    {
      title: 'For You (Selena Gomez)',
      image: 'https://m.media-amazon.com/images/I/41gTW2MhVGL._UX250_FMwebp_QL85_.jpg',
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
