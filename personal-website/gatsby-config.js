/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "render-blocking",
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Space Grotesk",
            file: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap",
          },
          {
            name: "Noto Sans",
            file: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
          },
        ],
      },
    },
  ],
};
