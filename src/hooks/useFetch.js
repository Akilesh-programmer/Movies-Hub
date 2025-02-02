import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_API_AUTHORIZATION
            }
          };
    
          const response = await fetch(url, options);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
    }, [url])

    return { data }
}
