import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isMenuOpen } from '../redux/slices/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const LiveWatchPage = () => {
  const dispatch = useDispatch();

  const [params] = useSearchParams();

  const videoId = params.get('v');

  useEffect(() => {
    dispatch(isMenuOpen());
  }, []);

  return (
    <div className='grid grid-flow-col flex-1'>
      <div className='col-span-10'>
        <iframe
          width='100%'
          className='rounded-lg object-cover h-[70vh]'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; picture-in-picture;'
          allowFullScreen
        ></iframe>
      <CommentsContainer/>
      </div>
      
      <div className='col-span-2 border-2 border-black h-1/3 ml-6'>
        <h1>Comments</h1>
      </div>
    </div>
  );
};

export default LiveWatchPage;
