import React, { useState, useCallback } from 'react';
import List from './list';

const UseCallBackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div
      style={{
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h1>UseCallBackHook Example</h1>
      <br />
      <input
        type='number'
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <br />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallBackHook;
