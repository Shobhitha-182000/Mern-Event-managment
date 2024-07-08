import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './DisplayEvent.css'

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/event");
        setEvents(response.data.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const editHandler = (id) => {
    navigate(`/edit/${id}`); 
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      axios.delete(`http://localhost:3000/admin/event/${id}`)
        .then(response => {
          navigate('/display');
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className="display-container">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div className="display-event" key={index}>
            <img
              src={`images/${event.image}`}
              alt={event.title}
              height={100}
              width={100}
            />
            <h3>{event.title}</h3>
            <h5>{event.description}</h5>
            <h5>{event.location}</h5>
            <h4>{event.price}</h4>
            <button className="edit" onClick={() => editHandler(event._id)}>
              <BiSolidEdit />
            </button>
            <button className="delete" onClick={() => deleteHandler(event._id)}>
              <MdDelete />
            </button>
            <span className="book-btn">
              <button className="booknow">Book Now</button>
            </span>
          </div>
        ))
      ) : (
        <p>No events to display</p>
      )}
    </div>
  );
};

export default DisplayEvent;
