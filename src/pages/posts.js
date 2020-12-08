import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const PostsPage = ({
  data: {
    allMdx: { nodes: posts }
  }
}) => (
  <Layout>
    <Hero />
    <Posts posts={posts} title="all posts" />
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        id
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
      }
    }
  }
`;

export default PostsPage;
