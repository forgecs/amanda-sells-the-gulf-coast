import React from "react";

import { Link  } from "gatsby";


function RealtorCard({ titleOne, titleTwo, button, image, to }) {
  return (
    <div className="sm:px-5 sm:w-1/2 py-10">
      <div
        className="bg-cover bg-center flex justify-center items-center shadow-xl p-4"
        style={{
          backgroundImage: `url(${image})`,
          height: `24rem`
        }}
      >
        <div
          className="w-64 flex flex-col justify-around items-center text-center uppercase p-5"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(255,255,255, 0.5), rgba(255,255,255, 0.5))`,
            height: `20rem`
          }}
        >
          <div className="font-thin text-2xl leading-none tracking-wide border-b border-cyan-300 pb-10">
            {titleOne} <br /> {titleTwo}
          </div>
          <Link to={`/${to}`}>
          <div className="bg-warm-grey-900 hover:bg-warm-grey-050 font-thin text-warm-grey-050 hover:text-warm-grey-900 text-xl tracking-tight px-8 py-2">
            {button}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RealtorCard;
