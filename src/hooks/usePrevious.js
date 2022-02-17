import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
  console.log(value, 'start');

  const ref = useRef();

  useEffect(() => {
    console.log(value, 'useEffect');
    ref.current = value;
  }, [value]);

  console.log(value, 'return');

  return ref.current;
};

export default usePrevious;
