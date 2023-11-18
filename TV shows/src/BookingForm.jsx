<<<<<<< HEAD
import React, { useState } from "react";

const BookingForm = ({ showName, onBookingSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // save the booking data to local storage
    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        name,
        email,
        phone,
        showName,
      })
    );
    // navigate back to the ShowDetail screen
    onBookingSubmit();
  };

  return (
    <div>
      <h2>Book {showName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
=======
<<<<<<< HEAD
import React, { useState } from "react";

const BookingForm = ({ showName, onBookingSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // save the booking data to local storage
    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        name,
        email,
        phone,
        showName,
      })
    );
    // navigate back to the ShowDetail screen
    onBookingSubmit();
  };

  return (
    <div>
      <h2>Book {showName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
=======
import React, { useState } from "react";

const BookingForm = ({ showName, onBookingSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // save the booking data to local storage
    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        name,
        email,
        phone,
        showName,
      })
    );
    // navigate back to the ShowDetail screen
    onBookingSubmit();
  };

  return (
    <div>
      <h2>Book {showName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
>>>>>>> 60b54414feb6faf232c7d518adce18b5d35b312f
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
