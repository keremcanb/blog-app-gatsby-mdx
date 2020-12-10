import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import Title from './Title';
import { RecentWrapper } from './styles';

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;

const Recent = () => {
  const data = useStaticQuery(query);
  const {
    allMdx: { nodes: posts }
  } = data;

  return (
    <RecentWrapper>
      <Title title="Recent" />

      {posts.map((post) => {
        const {
          title,
          slug,
          date,
          image: {
            childImageSharp: { fluid }
          }
        } = post.frontmatter;

        return (
          <Link to={`/posts/${slug}`} key={post.id} className="post">
            <Image fluid={fluid} className="img" />

            <div>
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </Link>
        );
      })}
    </RecentWrapper>
  );
};

export default Recent;
