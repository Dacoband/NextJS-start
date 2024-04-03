const path = require("path");

module.exports = {
  // Define your Next.js configuration here
  webpack: (config, { dev, isServer }) => {
    // Add support for Sass
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    return config;
  },
};
