/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {



  /* Your site config here */
  siteMetadata : {
    title : 'In the Middle of the Code',
    author: 'Yeshna'
    },
    plugins: [
    

    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
              path: `${__dirname}/src/`
          }
      },
     
      'gatsby-plugin-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      },
      'gatsby-transformer-sharp',
      

   
      
  ]
}