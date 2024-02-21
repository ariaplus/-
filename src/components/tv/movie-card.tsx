// components/ForestWitch.tsx

import { ReactElement } from 'react';

interface MovieCardProps {
  title: string
  description: string
  director: string
  ageRating: string
  caution: string
}

const MovieCard = ({
  title,
  description,
  director,
  ageRating,
  caution
}: MovieCardProps): ReactElement => {
  return (
    <div className='bg-white shadow-md rounded-md p-8'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <p className='text-gray-700 mb-4'>{description}</p>
      <p className='text-gray-700 mb-4'>
        Directed by <span className='font-bold'>{director}</span>
      </p>
      <p className='text-gray-700 mb-4'>
        Age Rating: <span className='font-bold'>{ageRating}</span>
      </p>
      <p className='text-gray-700'>
        {caution}
      </p>
    </div>
  );
};

export { MovieCard };
