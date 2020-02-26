import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PropertyTemplate = ({
  description,
  tags,
  title,
  address,
  baths,
  beds,
  featuredImage,
  price,
  helmet
}) => {
  return (
    <section>
      {helmet || ""}
      <div className="max-w-4xl text-warm-grey-900 bg-warm-grey-050 mx-auto">
        <section
          className="bg-center bg-cover flex justify-center items-center"
          style={{
            backgroundImage: `url(${
              !!featuredImage.childImageSharp
                ? featuredImage.childImageSharp.fluid.src
                : featuredImage
            })`,
            height: `28rem`
          }}
        >
          <div
            className="mx-4 px-4 py-10"
            style={{
              backgroundImage: `linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7))`
            }}
          >
            <h1 className="font-thin text-2xl text-center leading-tight tracking-wide uppercase border-b border-cyan-500 px-4 py-4">
              {address}
            </h1>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row">
          <section className="flex flex-col items-center font-thin px-4 mx-auto py-10">
            <h2 className="font-thin text-xl sm:text-2xl text-center leading-tight tracking-wide uppercase px-4 py-4">
              Property Information
            </h2>
            <div className="flex flex-col items-center">
              <p className="mt-4">{beds} Bedrooms</p>
              <p className="mt-4">{baths} Bathrooms</p>
              <p className="mt-4">${price}</p>
            </div>
          </section>

          <section className="flex flex-col items-center font-thin px-4 mx-auto py-10">
            <h2 className="font-thin text-xl sm:text-2xl text-center leading-tight tracking-wide uppercase px-4 py-4">
              Property Features
            </h2>
            <div className="flex flex-col items-center">
              <p className="mt-4">Floors: 2</p>
              <p className="mt-4">Year Built: 2005</p>
              <p className="mt-4">Flooring: Wood</p>
            </div>
          </section>
        </div>

        <section className="flex flex-col items-center font-thin px-4 mx-auto py-10">
          <h2 className="font-thin text-xl sm:text-2xl text-center leading-tight tracking-wide uppercase px-4 py-4">
            Description
          </h2>
          <p className="italic leading-loose max-w-xl text-sm sm:text-base">
            {description}
          </p>
        </section>

        {/* {tags && tags.length ? (
              <div className="tags mt-8">
                <h4 className="font-semibold">Tags</h4>
                <ul className="flex flex-wrap mt-0">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link className="font-semibold text-blue-700 pl-4" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
      </div>
    </section>
  );
};

PropertyTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  address: PropTypes.string,
  beds: PropTypes.number,
  baths: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number
};

const Property = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PropertyTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Properties">
            <title>{`${post.frontmatter.address}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        address={post.frontmatter.address}
        beds={post.frontmatter.beds}
        baths={post.frontmatter.baths}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredImage}
        price={post.frontmatter.price}
      />
    </Layout>
  );
};

Property.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Property;

export const pageQuery = graphql`
  query PropertyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")

        description
        tags

        address
        baths
        beds
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        price
      }
    }
  }
`;
