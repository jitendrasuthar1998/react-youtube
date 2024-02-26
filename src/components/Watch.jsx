import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isMenuOpen } from '../redux/slices/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const Watch = () => {
  const dispatch = useDispatch();

  const [params] = useSearchParams();

  const videoId = params.get('v');

  useEffect(() => {
    dispatch(isMenuOpen());
  }, []);
  
  return (
    <div className='w-full h-screen p-2'>
      <iframe
        width='70%'
        height={"60%"}
        className='rounded-lg object-cover'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; picture-in-picture;'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
