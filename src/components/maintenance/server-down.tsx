import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className='bg-black rounded-lg shadow-md p-4 w-full mx-auto'>
      <img src={image} alt={title} className='w-full h-40 object-cover rounded-t-lg' />
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{description}</p>
      </div>
    </div>
  );
};

export function ServerDown() {
  return (
    <div className='container mx-auto p-4'>
      <Card
        title='BBMzansi'
        description='Entertainment - Trending #BBMzansi 180K posts'
        image='https://example.com/path/to/image.jpg'
      />
    </div>
  );
}
