import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TestimonialsPageTemplate = ({ title, heading, testimonials }) => {
  return (
    <div>
      <section className="bg-warm-grey-050 text-center px-4">
        <div className="flex flex-col items-center mt-20">
          <h1 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-300 pb-2">
            {title}
          </h1>
          <h2 className="leading-tight text-xl font-thin text-warm-grey-900 capitalize mb-2 mt-10">
            {heading}
          </h2>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row justify-center items-stretch flex-wrap items-center max-w-4xl pb-10 px-4 mx-auto">
        {testimonials.map(testimonial => (
          <div className="flex flex-col bg-white w-full sm:max-w-sm border-l-2 sm:border-t-0 border-cyan-300 shadow-xl p-4 mt-10 sm:mx-5">
            <blockquote className="font-thin italic leading-loose py-4">
              {testimonial.quote}
            </blockquote>
            <div className="flex flex-row justify-start items-center font-thin text-warm-grey-900">
              <div className="text-xl pl-4">- {testimonial.name}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

TestimonialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

const TestimonialsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TestimonialsPageTemplate
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  );
};

TestimonialsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TestimonialsPage;

export const testimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        testimonials {
          quote
          name
        }
      }
    }
  }
`;
