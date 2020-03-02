import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ResourcesPageTemplate = ({
  title,
  heading,
  schools,
  resources
}) => {
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

      {/* <section className="flex flex-col sm:flex-row justify-center items-stretch flex-wrap items-center max-w-4xl pb-10 px-4 mx-auto">
        {schools.map(school => (
          <div className="flex flex-col bg-white w-full sm:max-w-sm border-l-2 sm:border-t-0 border-cyan-300 shadow-xl p-4 mt-10 sm:mx-5">
            <a href={school.link}>{school.name}</a>
          </div>
        ))}
      </section> */}

      <section className="max-w-4xl pb-10 px-4 mx-auto">
        {resources.map(r => (
          <div className="flex flex-col sm:flex-row justify-around">
            {r.category.map(category => (
              <div className="flex flex-col  items-center mt-16">
                <h3 className="leading-tight text-xl font-thin text-warm-grey-900 capitalize">
                  {category.name}
                </h3>
                <div className="bg-white sm:max-w-sm border-l-2 border-cyan-300 text-center shadow-xl h-full w-full p-4 mt-5">
                  {category.resource.map(r => (
                    <div>
                      <a className="hover:text-cyan-500" href={r.link}>{r.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

const ResourcesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResourcesPageTemplate
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        testimonials={post.frontmatter.testimonials}
        schools={post.frontmatter.schools}
        resources={post.frontmatter.resources}
      />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResourcesPage;

export const resourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        testimonials {
          quote
          name
        }
        schools {
          name
          link
        }
        resources {
          category {
            name
            resource {
              link
              name
            }
          }
        }
      }
    }
  }
`;
