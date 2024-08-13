import React, { useState, useEffect } from "react";
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaShoppingBag, FaThList, FaUserClock } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import DisplayEvent from "./EventAdmin/DisplayEvent";
import "./Sidebar.css";
import { SiGooglechat } from "react-icons/si";
import GeminiChatSupport from "./ChatSupport/GeminiChatSupport";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [isChatBoxOpen, setChatBoxOpen] = useState(false);
  const userName1 = localStorage.getItem('username');
  const Navigate = useNavigate();

  useEffect(() => {
    if (userName1) {
      const fetchEvents = async () => {
        try {
          const response = await axios.get("http://localhost:3000/admin/event");
          setEvents(response.data.data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }

      fetchEvents();
    } else {
      alert('You have to login first to access this page');
      Navigate('/login');
    }
  }, [userName1, Navigate]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleChatBox = () => setChatBoxOpen(!isChatBoxOpen);

  const menuItem = [
    { path: "/side", name: "Dashboard", icon: <FaTh /> },
    { path: "/admin/save", name: "Add Event", icon: <IoMdAddCircle /> },
    { path: "/display", name: "Events", icon: <FaRegChartBar /> },
    { path: "/book", name: "Book", icon: <FaShoppingBag /> },
    { path: "/list", name: "Event List", icon: <FaThList /> },
    { path: "https://immensphere.com/", name: "About", icon: <FaUserAlt /> },
    { path: "/", name: "Logout", icon: <HiOutlineLogout /> },
  ];

  return (
    <div className="container">
      <div className="top_nav">
        <button className="login_btn" title={userName1}>
          <FaUserClock title={userName1} size={20} />
        </button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}></h1>
        </div>
        {isOpen && menuItem.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="link"
            activeClassName="active"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="bars" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <main className={`main ${isOpen ? "" : "expanded"}`}>
        <DisplayEvent events={events} />
      </main>
      {isChatBoxOpen && (
        <div className="right-corner">
          <GeminiChatSupport onClose={toggleChatBox} />
        </div>
      )}
      {!isChatBoxOpen && (
        <div className="right-corner" onClick={toggleChatBox}>
          <div className="icon-chat"><SiGooglechat /></div>  
        </div>
      )}
    </div>
  );
};

export default Sidebar;
