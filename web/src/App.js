
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const [data, setData] = useState({ trips: [] });
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`api/trips?keyword=${query}`,);
      setData({ trips: result.data });
    };

    fetchData();
  }, [query]);

  return (
    <div className="App container">
      <div className="col">

        <div className="row justify-content-center"><h1 className="text-primary">เที่ยวไหนดี</h1></div>
        <div className="row"><input type="text" placeholder="" value={query} className="form-control text-center"
          onChange={event => setQuery(event.target.value)}></input></div>

        {data.trips.map(trip => (
          <div className="row mt-5" key={trip.id}>

            <div className="col-4 mt-2">{trip.photos.slice(0, 1).map((photo) => (
              <img src={photo} alt="" className="img-fluid rounded mx-auto d-block"></img>))}</div>

            <div className="col-8">
              <div className="row ml-3"><h5><a href={trip.url}>{trip.title}</a></h5></div>
              <div className="row ml-3"><ReactReadMoreReadLess charLimit={75} readMoreText={""} readLessText={""}>{trip.description}</ReactReadMoreReadLess>
                <a href={trip.url} className="ml-2">อ่านต่อ</a></div>
              <div className="row ml-3 mt-1">หมวด :{trip.tags.map(tag => (
                <button value={tag} onClick={event => setQuery(event.target.value)} className="btn btn-outline-primary btn-sm ml-1">{tag}</button>))}</div>
              <div className="row mt-3">{trip.photos.slice(1, 4).map((photo) => (
                <img src={photo} alt="" className="img-fluid rounded mx-auto d-block w-25"></img>))}</div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
