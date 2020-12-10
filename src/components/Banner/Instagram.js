import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Title from './Title';
import { InstagramWrapper } from './styles';

const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Instagram = () => {
  const data = useStaticQuery(query);
  const {
    allInstaNode: { nodes }
  } = data;

  return (
    <InstagramWrapper>
      <Title title="Instagram" />

      <div className="images">
        {nodes.map((item, index) => {
          const {
            localFile: {
              childImageSharp: { fluid }
            }
          } = item;

          return <Image fluid={fluid} key={index} />;
        })}
      </div>
    </InstagramWrapper>
  );
};

export default Instagram;
