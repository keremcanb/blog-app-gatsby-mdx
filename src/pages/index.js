import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO';

// ...GatsbyImageSharpFluid
const IndexPage = () => (
  <Layout>
    <Hero showPerson />
  </Layout>
);

export default IndexPage;
