import Link from 'next/link';
import Image from 'next/image';

interface Episode {
  id: string;
  title: string;
  airDate: string;
  runtime: string;
  image: string;
  description: string;
}

const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Wounded Angel',
    airDate: 'Feb 21, 2024',
    runtime: '58 min',
    image: '/episodes/season1/episode1.jpg',
    description: 'A disaster on board the International Space Station becomes a fight for survival.'
  },
  {
    id: '2',
    title: 'Live And Let Die',
    airDate: 'Feb 21, 2024',
    runtime: '54 min',
    image: '/episodes/season1/episode2.jpg',
    description: 'Jo races to find a way back to Earth before her life support runs out. Henry is concerned about his experiment.'
  },
  {
    id: '3',
    title: 'Somewhere in Space Hangs My Heart',
    airDate: 'Feb 21, 2024',
    runtime: '50 min',
    image: '/episodes/season1/episode3.jpg',
    description: 'The space agencies begin their investigation into the ISS collision. Jo struggles to reconnect with Magnus and Alice.'
  },
  {
    id: '4',
    title: 'The Left Hand of God',
    airDate: 'Feb 28, 2024',
    runtime: '52 min',
    image: '/episodes/season1/episode4.jpg',
    description: "Jo's life back home is not how she remembers it, and growing tension with Magnus adds to her feelings of alienation."
  }
];

export function StrangeCriminalsSeason1() {
  return (
    <div className='flex overflow-x-scroll space-x-4 p-4'>
      {episodes.map((episode) => (
        <Link key={episode.id} href={'/episodes/season1/${episode.id}'}>
          <a className='group relative flex w-64 flex-col items-center overflow-hidden rounded-md border-2 border-gray-300 p-4 transition duration-300 ease-in-out hover:border-gray-500'>
            <Image
              src={episode.image}
              alt={episode.title}
              layout='responsive'
              width={256}
              height={144}
              className='object-cover'
            />
            <h3 className='mt-4 text-lg font-medium text-gray-800 group-hover:text-gray-900'>
              {episode.title}
            </h3>
            <p className='mt-2 text-sm text-gray-600 group-hover:text-gray-700'>
              {episode.airDate} | {episode.runtime}
            </p>
            <p className='mt-4 text-sm text-gray-600 group-hover:text-gray-700'>
              {episode.description}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
}
