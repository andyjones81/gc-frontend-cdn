const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: process.env.space,
//   accessToken: process.env.spaceapi
// })

router.get('/', function (req, res) {
    // var news;
  
    // Promise.all([
      
    //     client.getEntries({
    //       'content_type': 'publicationNews'
    //     })
    //   ])
    //   .then(([n]) => {
  
    //     news = n
  
    //     res.render('index', {
    //       news
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    res.render('index', {
      //       news
          });
})



module.exports = router
