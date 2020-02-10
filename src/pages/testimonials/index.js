import React from "react";
import Layout from "../../components/Layout";

import amandaLandry from "../../img/amanda-landry-1.jpg";

export default () => (
  <Layout>
    <section className="bg-warm-grey-050 px-4">
      <div className="flex flex-col items-center mt-20">
      <h1 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
          Client<br /> Stories
        </h1>
        <h2 className="leading-tight text-xl font-thin text-warm-grey-900 capitalize mb-2 mt-10">
          See what people have to say about Amanda
        </h2>
      </div>
    </section>

    <section className="flex flex-col items-center pb-10 px-4">
      <div className="flex flex-col bg-white max-w-xm sm:max-w-sm border-l-2 sm:border-t-0 border-cyan-300 shadow-xl p-4 mt-10">
        <blockquote className="font-thin pb-4">She did a great job of connecting me to the home of my dreams! A true pleasure to work with!</blockquote>

        <div className="flex flex-row justify-start items-center font-thin text-warm-grey-900">
          <img
            src={amandaLandry}
            className="h-16 w-16 rounded-full shadow-inner"
            alt="Amanda Landry"
            title="Amanda Landry"
          />
          <div className="text-xl pl-4">-Amanda Landry</div>
        </div>
      </div>
    </section>
  </Layout>
);
