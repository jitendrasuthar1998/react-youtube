import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import YtIcon from '../icons/yt-icon.svg';
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/slices/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const handleToggleMenu = () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
      <div className='left flex col-span-2 items-center justify-start'>
        <RxHamburgerMenu onClick={()=>handleToggleMenu()} className='cursor-pointer' />
        <img src={YtIcon} className='w-[90px] ml-4' />
      </div>
      <div className='center col-span-8  flex items-center justify-center'>
        <div className='w-1/3 border-2 rounded-3xl h-10 flex items-center'>
          <input
            type='text'
            placeholder='Search'
            className='w-5/6 h-full rounded-l-3xl p-4'
          />
          <span className='w-1/6 h-full bg-gray-200 rounded-r-3xl flex items-center justify-center'>
            <CiSearch size={28}/>
          </span>
        </div>
      </div>
      <div className='col-span-2 flex items-center justify-end'>
        <RxAvatar size={28}/>
      </div>
    </div>
  );
};

export default Head;
