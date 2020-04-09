var express = require('express');
var router = express.Router();
const {
  getArticles,
  addArticle
} = require('../data/articles');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/articles', async function(req, res, next) {
  try{
    const data = await getArticles();
    res.render('articles', {title: 'Articles', data: data});
}catch(err){
    console.log(err);
    res.send(500, 'Internal Server Issue, check logs');
}

})
module.exports = router;
