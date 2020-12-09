import React from 'react';
import Image from 'gatsby-image';
import { FaRegClock } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'gatsby';
import { Wrapper } from './styles';

const Post = ({
  frontmatter: {
    title,
    slug,
    date,
    category,
    readTime,
    image: {
      childImageSharp: { fluid }
    }
  },
  excerpt
}) => (
  <Wrapper>
    <Image fluid={fluid} className="img" />

    <div className="info">
      <h3>{title}</h3>
      <div className="underline" />
      <p>{excerpt}</p>
      <span className="category">{category}</span>

      <Link to={`/posts/${slug}`} className="link">
        Continue Reading <IoMdArrowRoundForward />
      </Link>

      <footer>
        <span className="date">
          <FaRegClock className="icon" />
          {date}
        </span>

        <span>{readTime} min read</span>
      </footer>
    </div>
  </Wrapper>
);

export default Post;
