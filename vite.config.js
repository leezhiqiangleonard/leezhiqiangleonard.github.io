export default {
  root: "./",
  server: {
    watch: {
      usePolling: true, // helpful for WSL, Docker, network shares
      interval: 100,
    },
  },
};
