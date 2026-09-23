import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://mern-stack-example-up0q.onrender.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
