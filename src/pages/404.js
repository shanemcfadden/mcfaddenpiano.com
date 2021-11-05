import { useEffect } from 'react';
import { navigate } from '@reach/router';

const Redirect404 = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default Redirect404;
