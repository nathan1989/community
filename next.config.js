module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config;
  },
};
