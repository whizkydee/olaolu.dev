// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const { SHELF_PORT, ANALYTICS_ID } = require('../config')

module.exports = {
  port: SHELF_PORT,
  pathPrefix: '/shelf',
  siteName: `Olaolu's shelf`,

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ANALYTICS_ID,
      },
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: `Olaolu's shelf`,
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: true,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: `Olaolu's shelf`,
        themeColor: '#4831D8',
        backgroundColor: '#4831d4',
        icon: 'src/favicon.png',
        msTileImage: 'src/favicon.png',
        // msTileColor: '#666600',
      },
    },
  ],

  configureWebpack: {
    resolve: {
      alias: {
        // Use the version of vue installed in the root directory
        // to avoid duplication and conflicts with the copy gridsome uses.
        vue: path.resolve(__dirname, '../node_modules/vue'),
      },
    },
  },

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      autolinkHeadings: false,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
