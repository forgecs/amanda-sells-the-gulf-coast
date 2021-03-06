import React, { useState } from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import amanda from "../img/amanda-landry-1.jpg";

import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <nav
      className="text-cyan-500 bg-warm-grey-050 border-t-4 border-cyan-500 font-thin uppercase"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="lg:flex lg:justify-between lg:items-center lg:max-w-6xl mx-auto">
        <div className="container flex items-center justify-between px-5 py-5 lg:py-0">
          <div className="flex items-center">
            <img
              className="h-20 w-20 pr-1 hidden lg:block"
              src={amanda}
              alt="Amanda Landry"
              title="Amanda Landry"
            />

            <Link to="/" title="Amanda Sells the Gulf Coast">
              <div className="text-warm-grey-900 text-center tracking-loose leading-none uppercase border-l-2 border-cyan-500 pl-1">
                Amanda Sells <br />
                The Gulf Coast
              </div>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-cyan-500 hover:bg-warm-grey-100 focus:bg-warm-grey-100 focus:outline-none p-1"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navMenu"
          className={`px-5 pb-4 sm:pb-0 lg:flex ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/properties"
            >
              Properties
            </Link>
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="block px-2 mt-1 lg:mt-0 hover:bg-warm-grey-100 focus:outline-none focus:bg-warm-grey-100"
              to="/resources"
            >
              Resources
            </Link>

            <div className="px-2 py-1">
              <a
                title="facebook"
                className="h-8 w-8 flex justify-center items-center p-1 hover:bg-warm-grey-100 focus:bg-warm-grey-100 focus:outline-none"
                href="https://www.facebook.com/amandasellsthegulfcoast/"
              >
                <img src={facebook} alt="Facebook" className="h-8 w-8" />
              </a>
            </div>

            <div className="px-2 py-1">
              <a
                title="instagram"
                className="h-8 w-8 flex justify-center items-center p-1 hover:bg-warm-grey-100 focus:bg-warm-grey-100 focus:outline-none"
                href="https://www.instagram.com/amandasellsthebeach/"
              >
                <img src={instagram} alt="Instagram" className="h-8 w-8" />
              </a>
            </div>

            <div className="px-2 pt-1 pb-2 lg:pb-1">
              <a
                className="lg:px-1 h-8 w-8 text-warm-grey-900 hover:text-cyan-500"
                href="tel:+13375236994"
              >
                <FaPhone size="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
