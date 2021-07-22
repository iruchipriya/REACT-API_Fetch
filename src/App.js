import React, { useState, useEffect } from 'react';
import './style.css';
import Axios from 'axios';

export default function App() {
  //IF WE WANT TO CALL API ONCE WHEN PAGE LOADS, THEN WE WILL USE USEeffect  & USEsTATE TO set the data.
  const [joke, setJoke] = useState('');
  // useEffect(() => {
  //   getJokefromAPI();
  // }, []);

  // USING AXIOS
  const getJokefromAPI = () => {
    Axios.get('https://official-joke-api.appspot.com/random_joke').then(
      response => {
        console.log(response.data);
        setJoke(response.data.setup + ' ' + response.data.punchline);
      }
    );
  };

  //USING FETCH
  // this is not working
  const getJokefromAPIFetch = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        response.json();
      })
      .then(data => {
        setJoke(response.data.setup + ' ' + response.data.punchline);
      });
  };

  return (
    <div>
      <h1>Joke</h1>
      {/* button click pe api call */}
      <button onClick={getJokefromAPI}> Get Joke</button>
      <button onClick={getJokefromAPIFetch}> Get Joke from FETCH</button>

      {joke}
    </div>
  );
}
