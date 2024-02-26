import React from 'react';
import { useParams } from 'react-router-dom';

const VideoCard = ({ item }) => {
  const { title, thumbnails, channelTitle } = item.snippet;
  const thumbnail = thumbnails.medium.url;

  const { viewCount } = item.statistics;

  return (
    <div className='w-72 p-4 shadow-lg rounded-lg'>
      {/* image  */}
      <img src={thumbnail} alt='video' className='rounded-lg' />
      <div>
        {/* video title */}
        <p className='font-bold text-sm'>{title}</p>
        {/* owner of videos */}
        <p>{channelTitle}</p>
        <p>{viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
