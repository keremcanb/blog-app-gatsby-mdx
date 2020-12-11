import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          readTime
          category
          date(formatString: "MMMM Do, YYYY")
          author
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`;

const PostsPage = ({
  data: {
    allMdx: { nodes: posts }
  }
}) => (
  <Layout>
    <SEO title="Posts" />
    <Hero />
    <Posts posts={posts} title="all posts" />
  </Layout>
);

export default PostsPage;
