import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Api.css';

const Api = ({ Ongetsummary }) => {
    const [data, setData] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(data => { console.log(data); setData(data) })
            .catch(error => console.log(error))
    }, [])

    const summaryhandler = (i, j) => {
        history.push('/summary')
        localStorage.setItem('summary', i);
        localStorage.setItem('image', j);
    }


    return (
        <div className="api">
            <div className="header">
                show details
            </div>
            <div className="shows">
                {data.map((item, id) => <div className="show" key={item.show.id}>
                    <img src={item.show.image.medium} className="img" />
                    <p className="name">{item.show.name}</p>
                    <button className="btn" onClick={() => summaryhandler(item.show.summary, item.show.image.original)}>Summary</button>
                    {item.show && item.show.network && item.show.network.name && < p > {item.show.network.name}</p>}
                </div>)}
            </div>
        </div >)
}

export default Api
