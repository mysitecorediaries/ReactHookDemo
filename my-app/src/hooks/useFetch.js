import { useState,useEffect } from "react";

function useFetch(url) {

    const [data, setData] =useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;
        setLoading(true);  

        fetch(url)
        .then((res) => { if(!res.ok) { throw Error('Could not fetch the data for that resource'); }
         return res.json(); })
        .then((res =>{ 
            if(isMounted) {
            setData(res);
            setLoading(false);
            setError("");
        }}))
        .catch((err) => {
            if (isMounted) {
                setError(err.message);
                setLoading(false);
            }
        });

         }, [url]);

    return { data, loading, error };

 }
 
export default useFetch;