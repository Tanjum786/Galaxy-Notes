import React from "react";
import { Link } from "react-router-dom";
import { heroimage } from "../../Assets";

import "./home.css";

export const Home = () => {
  return (
    <>
      <main className="dis_flex home-container">
        <div className="dis_flex disc-container">
          <h1 className="home-titel">GalaxyNotes-notes and lists</h1>
          <p className="home-discription">
            Quickly capture what's on your mind and get a reminder later at the
            right place or time. GalaxyNotes makes it easy to capture a thought
            or manage your workflow.
          </p>
          <Link to="/signup">
            <button className="login_btn signup-btn">Join Now</button>
          </Link>
        </div>
        <div>
          <img src={heroimage} alt="heroimage" className="hero-img" />
        </div>
      </main>
    </>
  );
};
