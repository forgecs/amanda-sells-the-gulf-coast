import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

import PreviewCompatibleImage from "./PreviewCompatibleImage";
// import PropertyCard from "./PropertyCard";

class PropertyRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="flex justify-center flex-wrap max-w-4xl pb-12">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="w-11/12 sm:w-5/12 shadow-lg hover:shadow-2xl mt-10 sm:mx-5"
              key={post.id}
            >
              <div className="bg-white shadow-lg overflow-hidden">
                {post.frontmatter.featuredImage ? (
                  <div>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredImage,
                        alt: `featured image thumbnail for post ${post.frontmatter.address}`
                      }}
                    />
                  </div>
                ) : null}

                <div className="p-6 border-b-2 border-cyan-400">
                  <div className="flex items-baseline mb-1">
                    <span className="inline-block bg-cyan-200 text-cyan-800 text-xs uppercase tracking-wide rounded-full px-2">
                      New
                    </span>
                    <div className="font-thin text-warm-grey-800 text-xs tracking-wide uppercase ml-2">
                      {" "}
                      {post.frontmatter.beds} beds &bull;{" "}
                      {post.frontmatter.baths} baths
                    </div>
                  </div>
                  <Link
                    className="text-lg mt-1 hover:text-cyan-500"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.address}
                  </Link>
                  <div className="font-thin mt-1">
                    ${post.frontmatter.price}
                  </div>
                </div>
              </div>

              {/* <PropertyCard
                address={post.frontmatter.address}
                baths={post.frontmatter.baths}
                beds={post.frontmatter.beds}
                // image={post.frontmatter.image}
                price={post.frontmatter.price}
                slug={post.fields.slug}
              /> */}
            </div>
          ))}
      </div>
    );
  }
}

PropertyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query PropertyRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "property" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                address
                baths
                beds
                
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 375, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                price
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PropertyRoll data={data} count={count} />}
  />
);
