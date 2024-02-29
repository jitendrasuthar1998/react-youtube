import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import YtIcon from '../icons/yt-icon.svg';
import { CiSearch } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/slices/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../constants/constants';
import axios from 'axios';
import { cachedResults } from '../redux/slices/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState();

  const searchCache = useSelector((state)=> state.search);
  console.log("searchCache from redux store is == ", searchCache);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  /*
  searchCache = {
    "iphone":["iphone","iphone1","iphone2","iphone3","iphone4"]
  }

  searchQuery = iphone
  */ 

  useEffect(() => {

    const timer = setTimeout(()=>{
      console.log("query is == ", query);
      console.log("searchCache == ", searchCache);
      if(searchCache[query]){
        setSuggestions(searchCache[query]);
      }else{
        getSuggestions();
      }  
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSuggestions = async () => {
    const result = await axios.get(YOUTUBE_SUGGESTION_API + query);
    console.log("query in getSuggestions",query)
    // const cacheResults = {
    //   query: result.data[1],
    // };
    dispatch(cachedResults({
      [query]: result.data[1],
    }));
    setSuggestions(result.data[1]);
    
  };

  // without debounce, api will be called on each key press
  /*
 1. key = h
    component will re-render
    useEffect() will be called
    in useEffect() call searchApi

  2. key = he
    on new key press, react destroy previous component and re-render new component.
    on destroy, react cleanup timers.
    render() will be called
    useEffect() will be called, and searchApi will be called
  
  
  */

  // with timeout, api will only be called when user stops typing for a while, or when the delay between two key press is more than 200ms

  return (
    <div className='grid grid-flow-col p-2 shadow-lg'>
      <div className='left flex col-span-2 items-center justify-start'>
        <RxHamburgerMenu
          onClick={() => handleToggleMenu()}
          className='cursor-pointer'
        />
        <img src={YtIcon} className='w-[90px] ml-4' alt='logo' />
      </div>
      <div className='center col-span-8  flex items-center justify-center relative'>
        <div className='w-1/3 border-2 rounded-3xl h-10 flex items-center'>
          <input
            type='text'
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search'
            className='w-5/6 h-full rounded-l-3xl p-4'
          />
          <span className='w-1/6 h-full bg-gray-200 rounded-r-3xl flex items-center justify-center'>
            <CiSearch size={28} />
          </span>
        </div>
        {showSuggestions && (
          <>
            {suggestions.length > 0 && (
              <div className='w-1/3 bg-slate-50 rounded-md shadow-sm z-10 absolute top-12 border-t-2'>
                {suggestions.map((item) => (
                  <SuggestionItem item={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className='col-span-2 flex items-center justify-end'>
        <RxAvatar size={28} />
      </div>
    </div>
  );
};

const SuggestionItem = ({ item }) => {
  return (
    <div className='px-4 py-2 w-full border-b-2 cursor-pointer rounded-md flex items-center hover:bg-gray-100'>
      <span>
        <CiSearch size={18} className='mr-2' />
      </span>
      <span className='text-sm'>{item}</span>
    </div>
  );
};

export default Head;
