import React, { useEffect, useState } from 'react'

const Summary = () => {
    const [img, setImg] = useState('');
    useEffect(() => {
        const summary = localStorage.getItem('summary');
        setImg(localStorage.getItem('image'));
        document.getElementById('result').innerHTML = summary;
    }, [])
    return (
        <div className="summary">
            <div className="header">
                Summary
            </div>
            <div className="flex">
                <img src={img} className="poster" />
                <div id="result"></div>
            </div>
        </div>
    )
}

export default Summary
