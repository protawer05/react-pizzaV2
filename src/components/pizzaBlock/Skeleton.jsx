import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="270" rx="11" ry="11" width="280" height="25" />
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="77" />
    <rect x="0" y="417" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="416" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default MyLoader;
