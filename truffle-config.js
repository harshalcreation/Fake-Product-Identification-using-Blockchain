module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Correct hostname
      port: 8545,            // Match with Ganache
      network_id: "*"        // Accept any network ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.12"
    }
  }
};
