import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MOST_POPULAR } from '../constants/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const result = await axios.get(MOST_POPULAR);
    setVideos(result.data);
  };

  return (
    <div className='flex flex-wrap gap-1'>
      {videos?.items ? (
        <>
          {videos.items.map((item, i) => (
            <Link key={item.id} to={`/watch?v=${item.id}`}>
              <VideoCard item={item} />
            </Link>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default VideoContainer;
