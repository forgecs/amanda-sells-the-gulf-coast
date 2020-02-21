import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex justify-center flex-wrap max-w-4xl pb-12">
    {gridItems.map(item => (
      <div
        key={item.text}
        className="w-11/12 sm:w-5/12 border-b-2 border-cyan-400 shadow-lg hover:shadow-2xl mt-10 mx-5"
      >
        <div>
          <div
            className="h-56 object-contain overflow-hidden"
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-baseline">
            <span className="inline-block bg-cyan-200 text-cyan-800 text-xs uppercase tracking-wide rounded-full px-2 ">
              New
            </span>
            <div className="font-thin text-warm-grey-800 text-xs tracking-wide uppercase ml-2">
              {" "}
              {item.beds} beds &bull; {item.baths} baths
            </div>
          </div>
          <h4 className="text-lg mt-1">{item.address}</h4>
          <div className="text-warm-grey-600 text-sm tracking-wide uppercase">
            {" "}
             {/* Town, State - Gulf Shores, AL */}
          </div>
          <div className="font-thin mt-1">${item.price}</div>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      // address: PropTypes.string,
      beds: PropTypes.string,
      baths: PropTypes.string,
      price: PropTypes.string
    })
  )
};

export default FeatureGrid;
