module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/malaynayak/react-gh-workflow",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Test Coverage" },
        ],
      },
    ],
  ],
};
