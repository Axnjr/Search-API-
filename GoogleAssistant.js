import React, { useEffect, useState } from 'react';
const GoogleAssistant = () => {
    const [data, setData] = useState([]);
    const [isFetchingBooks, setIsFetchingBooks] = useState(false);
    let author = prompt("what you want to search ? ")
    const fetchAPI = () => {
        setIsFetchingBooks(true);
        fetch('http://api.serpstack.com/search?access_key=6a7e9b8acef8fafa701e217b9edc3ada&query='+author+'&num=10')
        .then(res => res.json())
        .then(res => {
            console.log(res.search_information)
            setData(res)
            setIsFetchingBooks(false);
        });}
    useEffect(()=>{fetchAPI();}, []);
    return(
        <>
            <div>
                what ever you want to do here ..
            </div>
        </>
    )
}

export {GoogleAssistant}