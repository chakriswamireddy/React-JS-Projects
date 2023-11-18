<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookingForm from "./BookingForm";

const ShowDetail = ({ match, history }) => {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShow = async () => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/shows/${match.params.id}`
      );
      setShow(data);
      setLoading(false);
    };
    fetchShow();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      <Link to="/">Back to Home</Link>
      <hr />
      <BookingForm
        showName={show.name}
        onBookingSubmit={() => {
          history.goBack();
        }}
      />
    </div>
  );
};

export default ShowDetail;
=======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookingForm from "./BookingForm";

const ShowDetail = ({ match, history }) => {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShow = async () => {
      const { data } = await axios.get(
        `https://api.tvmaze.com/shows/${match.params.id}`
      );
      setShow(data);
      setLoading(false);
    };
    fetchShow();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      <Link to="/">Back to Home</Link>
      <hr />
      <BookingForm
        showName={show.name}
        onBookingSubmit={() => {
          history.goBack();
        }}
      />
    </div>
  );
};

export default ShowDetail;
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
