import React, { useState, useEffect } from "react";
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaShoppingBag, FaThList } from "react-icons/fa";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import DisplayEvent from "./EventAdmin/DisplayEvent";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
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
    { path: "/side", name: "Dashboard", icon: <FaTh /> },
    { path: "/admin/save", name: "Add Event", icon: <IoMdAddCircle /> },
    { path: "/display", name: "Events", icon: <FaRegChartBar /> },
    { path: "/book", name: "Book", icon: <FaShoppingBag /> },
    { path: "/list", name: "Event List", icon: <FaThList /> },
    { path: "https://immensphere.com/", name: "About", icon: <FaUserAlt /> },
    { path: "/", name: "Logout", icon: <HiOutlineLogout />},
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
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"></h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
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
              <div style={{ display: isOpen ? "block" : "none" }} className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                {item.name}
              </div>
            </NavLink>
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


 