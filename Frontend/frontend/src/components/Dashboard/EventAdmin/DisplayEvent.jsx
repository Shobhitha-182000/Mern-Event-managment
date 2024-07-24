import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Booking from "./Booking";
import './DisplayEvent.css';
import { useNavigate } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          setEvents(events.filter(event => event._id !== id));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const bookHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="display-container">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div className="display-event" key={index}>
            {/* <img
              src={'./'+event.image}
              alt={event.title}
            /> */}
            <h3>{event.title}</h3>
            <h5>{event.description}</h5>
            <h5>{event.location}</h5>
            <h4>{event.date}</h4>
            {/* <h4><LiaRupeeSignSolid />{event.price}</h4> */}
            <div className="button-container">
              <button className="edit" onClick={() => editHandler(event._id)}>
                <BiSolidEdit />
              </button>
              <button className="delete" onClick={() => deleteHandler(event._id)}>
                <MdDelete />
              </button>
              <button className="booknow" onClick={bookHandler}>Free Book</button>
            </div>
          </div>
        ))
      ) : (
        <p>No events to display</p>
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Booking closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEvent;
