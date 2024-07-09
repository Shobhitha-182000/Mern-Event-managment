import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import './EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const bookHandler = () => {
    navigate('/book')
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="eventlist-container">
      {events.length > 0 ? (
        events.map((event, index) => (
          <div className="eventlist-event" key={index}>
            <h3>
              {event.title}
              <IoIosArrowDropdownCircle 
                className="dropdown-icon"
                onClick={() => toggleDropdown(index)}
              />
            </h3>
            {activeDropdown === index && (
              <div className="eventlist-subevent">
                <p>{event.description}</p>
                <p>{event.location}</p>
                <button className="eventlist-booknow" onClick={bookHandler}>Free Book</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No events to display</p>
      )}
    </div>
  );
};

export default EventList;
