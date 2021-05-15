import { useEffect, useState } from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);
  
    const fetchingInitialData = async () => {
      setLoading(true);
      const respone = await fetch(url);
      const initalData = await respone.json();
      callback(initalData);
      console.log(initalData);
      setLoading(false);
    }
    useEffect(() => {
      fetchingInitialData();
    }, []);
  
    
    return loading;
  }

  export default useFetch;