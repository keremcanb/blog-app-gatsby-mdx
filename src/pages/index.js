import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
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

const IndexPage = ({
  data: {
    allMdx: { nodes: posts }
  }
}) => (
  <Layout>
    <SEO title="Home" />
    <Hero showPerson />
    <Posts posts={posts} title="Recently Published" />
  </Layout>
);

export default IndexPage;
