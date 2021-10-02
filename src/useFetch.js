import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortContr = new AbortController();
        
        setTimeout(() => {
                fetch(url, { signal: abortContr.signal })
                .then(res => {
                    console.log(res);
                    if (!res.ok){
                        throw Error('Failed to fetch');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }else{
                        console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 500);
        return () => abortContr.abort();
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;
 
