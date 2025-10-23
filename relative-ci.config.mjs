/**
 * @type {import('@relative-ci/cli').Config}
 */
export default {
  // Read commit message from the git logs, GitHub Action event data or GitHub API
  includeCommitMessage: true,
  // Save agent payload to disk for debugging
  // @example './relative-ci-payload.json',
  payloadFilepath: undefined,
  webpack: {
    // Path to Webpack stats JSON file
    stats: './.next/server/webpack-stats.json'
  }
};
