import { useEffect, useRef, useState } from 'react';

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const body = useRef(_body);

    //we use useRef to change the memory address of object when we are passing it to the useEffect or useState where we detect change in value to reload the function. useRef helps to persist values across renders without causing re-renders.

    //How we use useRef for objects, we use useCallback for functions.
    //useCallback helps to memoize the function and only recreate it when its dependencies change.

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Error Found: ' + response.statusText);
                }
                console.log(body);
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch(error) {
                console.log(error.message)
            }
        }
        fetchData();
    }, [url, body]);

    return { data, loading };
}


// 💡 Mental Model for When to Use Each:
// useState: "I need to remember something that changes and show it to the user"

// Form inputs, toggle states, counters, fetched data
// useEffect: "I need to do something after React finishes rendering"

// API calls, setting up subscriptions, DOM manipulation, cleanup
// useCallback: "I'm passing this function around and want to avoid unnecessary work"

// Functions passed to child components, functions in dependency arrays