// import React from 'react';
// import Image from 'gatsby-image';
// import { graphql } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import Banner from '../components/Banner';
// import Hero from '../components/Hero';
// import Layout from '../components/Layout/Layout';
// import { Wrapper } from './styles';

// export const query = graphql`
//   query GetSinglePost($slug: String) {
//     mdx(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         category
//         date(formatString: "MMMM Do, YYYY")
//         image {
//           childImageSharp {
//             fluid {
//               src
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       body
//     }
//   }
// `;

// const PostTemplate = ({
//   data: {
//     mdx: {
//       frontmatter: { title, category, image, date },
//       body
//     }
//   }
// }) => (
//   <Layout>
//     <Hero />

//     <Wrapper>
//       <article>
//         <Image fluid={image.childImageSharp.fluid} />

//         <div className="post-info">
//           <span>{category}</span>
//           <h2>{title}</h2>
//           <p>{date}</p>
//           <div className="underline" />
//         </div>

//         <MDXRenderer>{body}</MDXRenderer>
//       </article>

//       <article>
//         <Banner />
//       </article>
//     </Wrapper>
//   </Layout>
// );

// export default PostTemplate;
