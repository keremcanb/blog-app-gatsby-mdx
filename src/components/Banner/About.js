import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Title from './Title';
import SocialLinks from '../../constants/socialLinks';
import { AboutWrapper } from './styles';

// ...GatsbyImageSharpFixed
const About = () => {
  return <AboutWrapper>Banner About</AboutWrapper>;
};

export default About;
