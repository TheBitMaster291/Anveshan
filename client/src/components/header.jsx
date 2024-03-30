import React, { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaBars, FaCalendarAlt, FaHeadset, FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const sideMenuRef = useRef(null);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  useEffect(() => {
    // The handleOutsideClick function checks
    // if the event.target (the element that triggered the event)
    // is not inside the sideMenuRef.current element. If the click is outside the side menu,
    // setShowSideMenu(false) is called to close the side menu.
    const handleOutsideClick = (e) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
        setShowSideMenu(false);
      }
    };
    if (showSideMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // The return statement inside the useEffect hook specifies a cleanup function.
    // This function removes the event listener when the component unmounts or when showSideMenu changes.
    // This is important to prevent memory leaks and ensure that the event listener is properly cleaned up.
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSideMenu]); //Dependency array [showSideMenu] shows useEffect will run only when showSideMenu changes.

  return (
    <header>
      <div className="flex justify-between items-center bg-black py-4 px-8 md:px-16">
        {" "}
        {/* Added padding and adjusted for medium screens */}
        {/* Hamburger Menu Icon (for mobile) */}
        <div className="block md:hidden" onClick={toggleSideMenu}>
          <FaBars
            className="h-6 w-6 fill-current"
            style={{ color: "#E17343" }}
          />
        </div>
        {/* Side Menu */}
        {showSideMenu && (
          <div
            ref={sideMenuRef}
            className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4"
          >
            {/* User details */}
            <div className="mb-4">
              {/* Display user details here */}
              <p>User Details</p>
            </div>
            {/* Navigation Links */}
            <ul>
              <div className="flex flex-col justify-between items-center">
                <Link
                  to="/"
                  onClick={() => setShowSideMenu(false)}
                  className="flex items-center gap-12"
                >
                  <FaHome
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                  <span className="py-2">Home</span>
                  <FaAngleRight
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                </Link>
                <div
                  style={{ borderBottom: "2px solid #E17343", width: "100%" }}
                ></div>
                {/* Horizontal line */}
              </div>
              <div className="flex flex-col justify-between items-center">
                <Link
                  to="/events"
                  onClick={() => setShowSideMenu(false)}
                  className="flex items-center gap-12"
                >
                  <FaCalendarAlt
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                  <span className="py-2">Events</span>
                  <FaAngleRight
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                </Link>
                <div
                  style={{ borderBottom: "2px solid #E17343", width: "100%" }}
                ></div>
                {/* Horizontal line */}
              </div>
              <div className="flex flex-col justify-between items-center">
                <Link
                  to="/about-us"
                  onClick={() => setShowSideMenu(false)}
                  className="flex items-center gap-9"
                >
                  <FaInfoCircle
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                  <span className="py-2">About us</span>
                  <FaAngleRight
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                </Link>
                <div
                  style={{ borderBottom: "2px solid #E17343", width: "100%" }}
                ></div>
                {/* Horizontal line */}
              </div>
              <div className="flex flex-col justify-between items-center">
                <Link
                  to="/contact-us"
                  onClick={() => setShowSideMenu(false)}
                  className="flex items-center gap-10"
                >
                  <FaHeadset
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                  <span className="py-2">Support</span>
                  <FaAngleRight
                    className="h-6 w-6 fill-current"
                    style={{ color: "#E17343" }}
                  />
                </Link>
                <div
                  style={{ borderBottom: "2px solid #E17343", width: "100%" }}
                ></div>
                {/* Horizontal line */}
              </div>
            </ul>
          </div>
        )}
        {/* Logo */}
        <div className="text-center md:text-left">
          {" "}
          {/* Centered for mobile, left-aligned for desktop */}
          <h1 className="hidden md:block">
            <img src="/AnvLogo.svg" alt="logo" className="h-10 md:h-12" />{" "}
            {/* Adjusted height for different screen sizes */}
          </h1>
          <h1 className="block md:hidden">
            {" "}
            {/* Show for mobile */}
            <img
              src="/anvLogoTypo 1.png"
              alt="mobile-logo"
              className="h-10"
            />{" "}
            {/* Use provided image */}
          </h1>
        </div>
        {/* Navigation Links (hidden for desktop, shown in hamburger menu for mobile) */}
        <ul className="hidden md:flex justify-center items-center gap-4  md:bg-gray-800 md:gap-8 md:rounded-full md:px-6">
          <Link to="/">
            <li className="text-white md:bg-gray-800 md:rounded-full px-4 py-1">
              Home
            </li>
          </Link>
          <Link to="/events">
            <li className="text-white md:bg-gray-800 md:rounded-full px-2 py-1">
              Events
            </li>
          </Link>
          <Link to="/about-us">
            <li className="text-white md:bg-gray-800 md:rounded-full px-2 py-1">
              About us
            </li>
          </Link>
          <Link to="contact-us">
            <li className="text-white md:bg-gray-800 md:rounded-full px-4 py-1">
              Contact us
            </li>
          </Link>
        </ul>
        {/* Get Started Button */}
        <button className="hidden md:block bg-white rounded-full text-black px-4 py-2 md:py-1 md:h-12 mr-8 font-semibold">
          get started
        </button>
        {/* Signup/Signin Icon (for mobile) */}
        <div className="block md:hidden">
          <FaUser
            className="h-6 w-6 fill-current"
            style={{ color: "#E17343" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
