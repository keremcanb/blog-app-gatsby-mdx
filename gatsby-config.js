module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Awesome Blog built with Gatsby and MDX`,
    titleTemplate: `%s | MDX Blog`,
    url: `https://gatsby-mdx-blog-course-project.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@keremcan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `nomadic_sith`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,500,700`, `Open Sans`],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }]
      }
    }
  ]
};
