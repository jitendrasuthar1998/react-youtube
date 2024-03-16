import React, { useMemo, useState } from 'react';
import {  findNthPrime } from '../helper/helper';

const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);

  const nthPrime = useMemo(()=> findNthPrime(number),[number]);

  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <div className={`${toggleTheme ? 'bg-white' : 'bg-black'}`}>
      <button onClick={() => setToggleTheme(!toggleTheme)} className='bg-green-400 mr-4'>Toggle</button>
      
      <input
        type='number'
        value={number}
        className={"border"}
        onChange={(e) => setNumber(e.target.value)}
      />

      <div className={`${toggleTheme ? 'text-black' : 'text-white'}`}>
        nth factorial is = {nthPrime}
      </div>
    </div>
  );
};

export default UseMemoDemo;
