import React from 'react';
import Image from 'gatsby-image';
import { FaRegClock } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'gatsby';
import { Wrapper } from './styles';

const Post = ({
  excerpt,
  frontmatter: {
    title,
    slug,
    date,
    category,
    readTime,
    image: {
      childImageSharp: { fluid }
    }
  }
}) => (
  <Wrapper>
    <Image fluid={fluid} className="img" />

    <div className="info">
      <span className="category">{category}</span>
      <h3>{title}</h3>
      <div className="underline" />
      <p>{excerpt}</p>

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
