module.exports = {
  siteMetadata: {
    siteUrl: "https://oprec.omahti.web.id",
    title: "Open Recruitment OmahTI 2021",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Open Recruitment OmahTI 2021',
        short_name: 'OpRec OmahTI 2021',
        start_url: '/',
        display: 'standalone',
        icon: 'src/assets/favicon.ico',
      }
    }
  ],
};
