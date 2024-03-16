import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isMenuOpen } from '../redux/slices/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import UseMemoDemo from './UseMemoDemo';

const Watch = () => {
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
      
      <LiveChat/>
      <UseMemoDemo/>
    </div>
  );
};

export default Watch;
