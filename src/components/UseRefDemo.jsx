import React, { useRef, useState } from 'react';

const UseRefDemo = () => {
  let x = 0;
  const [y, setY] = useState(0);

  const z = useRef(0);


  const handleX = () => {
    x = x + 1;
    console.log(x);
  }

  const handleY = () => {
    setY(y+1);
  }

  const handleZ = () => {
    z.current = z.current + 1;
    console.log(z.current);
  }

  return (
    <div className='flex items-center justify-center flex-col border w-full'>
      <div className='flex gap-4 p-4 border items-center mb-4'>
        <button className='bg-green-600 text-white p-2 rounded-sm' onClick={handleX}>Increase X</button>
        <p>Let x = {x}</p>
      </div>

      <div className='flex gap-4 p-4 border items-center mb-4'>
      <button className='bg-green-600 text-white p-2 rounded-sm' onClick={handleY}>Increase Y</button>
        <p>State y = {y}</p>
      </div>

      <div className='flex gap-4 p-4 border items-center mb-4'>
      <button className='bg-green-600 text-white p-2 rounded-sm' onClick={handleZ}>Increase Z</button>
        <p>Ref z = {z.current}</p>
      </div>
    </div>
  );
};

export default UseRefDemo;
