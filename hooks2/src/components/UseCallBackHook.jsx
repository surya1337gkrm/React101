import React, { useState, useCallback, useMemo } from 'react';
import { useEffect } from 'react/cjs/react.development';
import List from './list';

const UseCallBackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? '#333' : '#fff',
      color: dark ? '#fff' : '#333',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme Changed');
  }, [theme]);

  return (
    <div style={theme}>
      <h1>UseCallBackHook Example</h1>
      <br />
      <input
        type='number'
        value={number}
        onChange={(e) => {
          if (e.target.valueAsNumber) {
            setNumber(e.target.valueAsNumber);
          }
        }}
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
