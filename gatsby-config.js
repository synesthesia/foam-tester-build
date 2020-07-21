const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `Foam/Gatsby build test with added embeds`,
  },
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/notes`,
        roamUrl: process.env.ROAM_URL,
        roamEmail: process.env.ROAM_EMAIL,
        roamPassword: process.env.ROAM_PASSWORD,
        ignore: [
            "**/_layouts/**",
            "**/.git/**",
            "**/.github/**",
            "**/.vscode/**",
        ]
      },
    },
  ],
};