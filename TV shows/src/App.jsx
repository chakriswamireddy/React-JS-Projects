<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import BookingForm from './BookingForm';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(res => {
        setShows(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <ShowList shows={shows} />}>
           
          </Route>
          <Route path="/details/:id">
            <ShowDetails />
          </Route>
          <Route path="/booking/:id">
            <BookingForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import BookingForm from './BookingForm';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(res => {
        setShows(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <ShowList shows={shows} />}>
           
          </Route>
          <Route path="/details/:id">
            <ShowDetails />
          </Route>
          <Route path="/booking/:id">
            <BookingForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
