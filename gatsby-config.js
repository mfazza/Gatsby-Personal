module.exports = {
  siteMetadata: {
    title: "Matt Fazza - Software Engineer",
    author: "Customization by Matt Fazza - Theme by Hunter Chang",
    description: "This website was made using a Gatsby.js V2 Starter based on Dimension by HTML5 UP written by Hunter Chang.  Its name is Dimension V2."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
