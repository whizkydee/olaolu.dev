// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const { SHELF_PORT } = require('../ports')

module.exports = {
  port: SHELF_PORT,
  pathPrefix: '/shelf',
  siteName: `Olaolu's shelf`,
  siteDescription:
    'Articles on web development and design by Olaolu, expert front end developer and UI Engineer',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
  },

  plugins: [
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
  ],

  configureWebpack: {
    resolve: {
      alias: {
        // Use the copy of vue installed in the root folder
        // to avoid duplication as a result of the one gridsome
        // depends on.
        vue: path.resolve(__dirname, '../node_modules/vue'),
      },
    },
  },

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
