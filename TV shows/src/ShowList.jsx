import React from 'react';
import { Link } from 'react-router-dom';

function ShowList({ shows }) {
  return (
    <div className="show-list">
      <h2>Show List</h2>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <Link to={`/details/${show.show.id}`}>
              <img src={show.show.image?.medium} alt={show.show.name} />
              <h3>{show.show.name}</h3>
              <p>{show.show.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
