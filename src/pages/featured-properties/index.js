import React from "react";

import Layout from "../../components/Layout";
import PropertyCard from "../../components/PropertyCard";
import beachHome from "../../img/beach-home-1.jpg";

export default () => (
  <Layout>
    <section className="bg-warm-grey-050 px-4">
      <div className="flex flex-col items-center mt-20">
        <h1 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
          Featured <br /> Properties
        </h1>
        <h2 className="leading-tight text-xl font-thin text-warm-grey-900 capitalize mb-2 mt-10">
          Check out some amazing Gulf Coast Properties
        </h2>
      </div>
    </section>

    <section className="flex flex-col items-center px-4 py-10">
      <PropertyCard />
    </section>
  </Layout>
);
