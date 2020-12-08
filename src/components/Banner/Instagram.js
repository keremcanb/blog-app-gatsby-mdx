import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Title from './Title';
// ...GatsbyImageSharpFluid

const Instagram = () => {
  return <Wrapper>Banner Instagram</Wrapper>;
};

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export default Instagram;
