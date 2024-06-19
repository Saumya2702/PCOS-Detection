import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/selfdiagnosis"}>SelfDiagnosis</Link>
            </li>
            <li>
              <Link to={"/dietplanner"}>DietPlanner</Link>
            </li>
            <li>
              <Link to={"/yogaplanner"}>YogaPlanner</Link>
            </li>
            <li>
              <Link to={"/cycletracker"}>CycleTracker</Link>
            </li>
            <li>
              <Link to={"/lifestylesuggestion"}>LifestyleSuggestion</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;


