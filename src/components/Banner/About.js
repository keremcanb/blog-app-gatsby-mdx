import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Title from './Title';
import SocialLinks from '../../constants/socialLinks';
// ...GatsbyImageSharpFixed

const About = () => {
  return <Wrapper>Banner About</Wrapper>;
};

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`;
export default About;
