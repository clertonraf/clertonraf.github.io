module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"/Users/clerton/Projects/clertonraf.github.io/src/intl","languages":["en","pt-BR","de"],"defaultLanguage":"en","redirect":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Clerton's Personal Web Site","short_name":"Clerton","start_url":"/","background_color":"#000","theme_color":"#000","display":"minimal-ui","icon":"src/images/favicon-32x32.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
