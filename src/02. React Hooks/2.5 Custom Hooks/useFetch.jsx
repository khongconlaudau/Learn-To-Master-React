import { useEffect, useState } from "react"

const UseFetch = (url) =>{
    const [data, setData] = useState([]);
    useEffect( () =>{
        setTimeout(async () =>{
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        },1000)
    },[])

    return [data];
}

export default UseFetch;