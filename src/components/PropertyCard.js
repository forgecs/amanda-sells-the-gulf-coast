import React from "react";
// import { Link } from "gatsby";

import beachHome from "../img/beach-home-1.jpg";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function PropertyCard({ address, baths, beds, image, price, slug }) {
  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-xs relative">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current text-warm-grey-050 hover:text-cyan-500 absolute top-0 right-0"
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
      </svg>
      <img
        className="h-48 w-full object-cover"
        src={beachHome}
        alt="Beach Home"
      />

      {/* {image ? (
        <div>
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for post`
            }}
          />
        </div>
      ) : null} */}

      <div className="p-6 border-b-2 border-cyan-400">
        <div className="flex items-baseline">
          <span className="inline-block bg-cyan-200 text-cyan-800 text-xs uppercase tracking-wide rounded-full px-2 ">
            New
          </span>
          <div className="font-thin text-warm-grey-800 text-xs tracking-wide uppercase ml-2">
            {" "}
            {beds} beds &bull; {baths} baths
          </div>
        </div>
        {/* <Link className="hover:text-cyan-500" to={slug}>
          <h4 className="text-lg mt-1">{address}</h4>
        </Link> */}
        <div className="font-thin mt-1">${price}</div>
        <div className="font-thin mt-1">{slug}</div>
      </div>
    </div>
  );
}

export default PropertyCard;
