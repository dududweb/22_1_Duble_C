import { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash';

export default function useWindowDetect() {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth);

    const handleSize = useCallback(() => {
      setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
      window.addEventListener('resize', handleSize);

      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }, [handleSize]);

    return width;
  }
}
