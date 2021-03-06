import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
// import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import PropertyRoll from "../components/PropertyRoll";
import RealtorCard from "../components/RealtorCard";

import gulfShores from "../img/gulf-shores-1.jpg";
import gulfBreeze2 from "../img/gulf-breeze-2.jpg";
import sunset from "../img/sunset.jpg";
import amandaLandry from "../img/amanda-landry-1.jpg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <section
      className="bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(255,255,255, 0.2), rgba(255,255,255, 0.2)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: `28rem`
      }}
    >
      <div
        style={{ fontFamily: `'Dancing Script', cursive` }}
        className="h-full flex flex-col justify-center items-center max-w-xs lg:max-w-md text-center mx-auto"
      >
        <h1 className="text-warm-grey-700 text-5xl lg:text-6xl tracking-tight px-10 py-2">
          {title}
        </h1>
        <h3 className="text-warm-grey-700 text-2xl lg:text-3xl px-2 py-1 mt-5">
          {subheading}
        </h3>
      </div>
    </section>

    <section className="max-w-4xl bg-warm-grey-050 py-16 mx-auto">
      <div className="flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-thin text-warm-grey-900 text-2xl uppercase">
          {mainpitch.title}
        </h1>
        <h3 className="font-thin text-warm-grey-800 text-lg mt-2">
          {mainpitch.description}
        </h3>
      </div>

      <div className="flex flex-col items-center px-4 pb-10 mt-10">
        <h3 className="font-thin text-warm-grey-900 text-lg">{heading}</h3>
        <p className="italic font-thin leading-relaxed text-warm-grey-800 text-center max-w-lg mt-4">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-16">
        <RealtorCard
          titleOne="Browse"
          titleTwo="Properties"
          button="Search Now"
          image={gulfShores}
          to="properties"
        />

        <RealtorCard
          titleOne="List"
          titleTwo="Your Home"
          button="Contact Us"
          image={sunset}
          to="contact"
        />
      </div>

      <div className="flex flex-col items-center mt-20">
        <h3 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
          Featured <br /> Properties
        </h3>
        <PropertyRoll />
        {/* <Features gridItems={intro.properties} /> */}
      </div>

      <div className="flex flex-col items-center mt-20">
        <h3 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
          Latest <br /> Stories
        </h3>
        <BlogRoll />
        <Link
          className="font-thin text-gray-100 sm:text-lg bg-cyan-500 px-4 py-2 sm:px-5 sm:py-3 mt-5 hover:bg-cyan-600 focus:bg-cyan-600"
          to="/blog"
        >
          Read More
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-16">
        <RealtorCard
          titleOne="Client"
          titleTwo="Stories"
          button="View Here"
          image={gulfBreeze2}
          to="testimonials"
        />

        <RealtorCard
          titleOne="Meet"
          titleTwo="Amanda Landry"
          button="Learn More"
          image={amandaLandry}
          to="about"
        />
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    properties: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          properties {
            image {
              childImageSharp {
                fluid(maxWidth: 375, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            address
            beds
            baths
            price
          }
          heading
          description
        }
      }
    }
  }
`;
