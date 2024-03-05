import React from 'react';

type TrendingTopicProps = {
  topic: string;
  tweets: string;
  contributors: string;
};

const Trending: React.FC<TrendingTopicProps> = ({ topic, tweets, contributors }) => (
  <div>
    <h2>{topic}</h2>
    <p>Tweets: {tweets}</p>
    <p>Contributors: {contributors}</p>
  </div>
);

const NationalAuthorsDay = () => {
  return (
    <TrendingTopic
      topic="#NationalAuthorsDay"
      tweets="25K"
      contributors="Daniella and others"
    />
  );
};

export { Trending, NationalAuthorsDay };
