import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="flex justify-center flex-wrap max-w-4xl pb-12">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="flex-grow max-w-sm shadow-lg mt-10 mx-5"
              key={post.id}
            >
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="flex items-start flex-col px-4 py-6">
                    <Link
                      className="text-cyan-400 uppercase hover:bg-warm-grey-100 px-2 py-1"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    {/* <span> &bull; </span> */}
                    <span className="text-warm-grey-800 px-2">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p className="text-warm-grey-800 px-4 pb-8">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link
                    className="font-thin text-cyan-700 px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-warm-grey-050"
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 375, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
