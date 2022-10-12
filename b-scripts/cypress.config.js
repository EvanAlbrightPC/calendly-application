const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
	baseUrl: 'https://roomy-fire-houseboat.glitch.me/'
  },
  env: {
	  boardSize: 3,
	  boardCount: 3,
  },
});
