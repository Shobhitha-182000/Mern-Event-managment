import React, { useState, useEffect } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import DisplayEvent from "./EventAdmin/DisplayEvent.jsx";  
import { IoMdAddCircle } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/event");
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin/save",
      name: "Add Event",
      icon: <IoMdAddCircle />,
    }
     ,
    {
      path: "/display",
      name: "Events",
      icon: <FaRegChartBar />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/display",
      name: "Book",
      icon: <FaShoppingBag />,
    },
    {
      path: "/display",
      name: "Event List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div className="top_nav">
        <form>
          <input type="text" />
          <button className="search_btn">Search</button>
        </form>

        <button className="signup_btn">Sign Up</button>
        <button className="login_btn">Login</button>
      </div>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link"
              activeClassName="active"
              onClick={() => setIsOpen(false)}  
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
            {item.dropdown && isOpen && (
              <div className="dropdown">
                {item.dropdown.map((subitem, subindex) => (
                  <NavLink
                    key={subindex}
                    to={subitem.path}
                    className="sublink"
                    activeClassName="active"
                    onClick={() => setIsOpen(false)}  
                  >
                    {subitem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}

        
      </div>
      <main>
      
        <DisplayEvent events={events} />
      </main>
    </div>
  );
};

export default Sidebar;
