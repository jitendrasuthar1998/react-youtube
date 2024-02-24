import React from 'react';


const allButtons = ["All","JavaScript","Mixes","Data Structures","Music","Gaming","Text","Satsang","Sales","News","Chants","Podcast","Physics","Laptop","Gadgets","Videos","Programming"]

const ButtonList = () => {
  return (
    <div className='flex gap-2 flex-nowrap p-2 overflow-x-scroll scroll-smooth no-scrollbar items-center'>
     {
      allButtons.map((item)=>(
        <Button item={item} key={item}/>
      ))
     }
     {
      allButtons.map((item)=>(
        <Button item={item} key={item}/>
      ))
     }
    </div>
  );
};

const Button = ({item}) => {
  return <span className='px-2 py-1 bg-gray-200 text-black text-sm rounded-md cursor-pointer text-center'>{item}</span>;
};

export default ButtonList;
