import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Title from './Title';
import SocialLinks from '../../constants/socialLinks';
import { AboutWrapper } from './styles';

const query = graphql`
  {
    file(relativePath: { eq: "banner-about.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const {
    file: {
      childImageSharp: { fixed }
    }
  } = data;

  return (
    <AboutWrapper>
      <Title title="About Me" />

      <Image fixed={fixed} className="img" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi.
      </p>

      <SocialLinks styleClass="banner-icons" />
    </AboutWrapper>
  );
};

export default About;
