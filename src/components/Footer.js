import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="text-cyan-400 bg-warm-grey-050 font-thin flex flex-col">
            <div className=" flex flex-col sm:flex-row justify-around pb-5 px-16 ">
              <div className="flex flex-col justify-center items-center">
                <div className="text-warm-grey-900 text-center tracking-loose leading-none uppercase border-l-2 border-cyan-500 pl-1">
                  Amanda Sells <br />
                  The Gulf Coast
                </div>
                <div className="pt-2">
                  <Link
                    className="border-r border-warm-grey-500 px-1 hover:bg-warm-grey-100"
                    to="/contact"
                  >
                    Email Me
                  </Link>
                  <a
                    className="px-1 hover:bg-warm-grey-100"
                    href="tel:+12519797743"
                  >
                    251-979-7743
                  </a>
                </div>
              </div>

              <div className="flex justify-center py-5">
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
              </div>
            </div>

        <div className="flex justify-center text-center text-warm-grey-050 bg-cyan-400">
          <div className="inline-block py-4">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Amanda Landry
            </div>
            <div>
              Built by{" "}
              <a
                className="font-semibold text-warm-grey-700 hover:text-cyan-400 hover:bg-warm-grey-100 px-1 py-1"
                href="https://www.forgecs.com/"
              >
                Forge Creative Systems
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
