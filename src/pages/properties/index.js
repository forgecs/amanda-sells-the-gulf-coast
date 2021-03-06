import React from "react";

import Layout from "../../components/Layout";
import PropertyRoll from "../../components/PropertyRoll";

export default () => (
  <Layout>
    <section className="bg-warm-grey-050 px-4">
      <div className="flex flex-col items-center mt-20">
        <h1 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
          Browse <br /> Properties
        </h1>
        <h2 className="leading-tight text-xl font-thin text-center text-warm-grey-900 capitalize mb-2 mt-10">
          Check out some amazing Gulf Coast Properties
        </h2>
      </div>
    </section>

    <section className="flex flex-col items-center py-10">
      <PropertyRoll />
    </section>
  </Layout>
);
