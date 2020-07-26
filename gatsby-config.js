/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, '500', `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.join(__dirname, 'src/icons'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.[t|j]sx$|\.[t|j]s$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
  ],
}
