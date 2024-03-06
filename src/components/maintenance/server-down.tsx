import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className='bg-black rounded-lg shadow-md p-2.5 w-full mx-auto border'>
      <div className='p-4'>
        <h2 className='text-xl text-center font-semibold mb-2'>{title}</h2>
        <p className='text-gray-700 text-center mb-4'>{description}</p>
      </div>
    </div>
  );
};

export function ServerDown() {
  return (
    <div className='container mx-auto p-4'>
      <Card
        title='Aria+ Will Be Back Soon'
        description="Aria+ is down for required maintenance right now but you should be able to get back on within a few minuites In the meantime read more about why you're seeing this message Thanks for your patience as we improve the platform "
      />
    </div>
  );
}
