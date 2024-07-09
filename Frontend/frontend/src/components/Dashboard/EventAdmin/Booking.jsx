import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Booking.css'; // Import the CSS file

const Booking = ({ closeModal }) => {
  const [date, setDate] = useState();
  const navigate = useNavigate();

  const bookingHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/book", { date });
      navigate('/success');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={bookingHandler}>
        <div className="booking-date">
          <label>Select a booking date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
