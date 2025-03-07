import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* Banner Text Section */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chichago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="banner-img">
            <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
