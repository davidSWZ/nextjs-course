const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "jakkadi",
        mongodb_password: "KmNDQkt4NyaEZ8z9",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "jakkadi",
      mongodb_password: "KmNDQkt4NyaEZ8z9",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
