import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

export const query = graphql`
  query Categories($category: String!) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          category
          readTime
          date(formatString: "MMMM Do, YYYY")
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

const CategoryTemplate = ({
  pageContext: { category },
  data: {
    categories: { nodes: posts }
  }
}) => (
  <Layout>
    <Hero />
    <Posts posts={posts} title={`category / ${category}`} />
  </Layout>
);

export default CategoryTemplate;
