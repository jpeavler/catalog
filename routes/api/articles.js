const express = require('express');
const router = express.Router();
const {
     getArticles,
     addArticle,
     updateArticle,
     deleteArticle
} = require('../../data/articles');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try{
        const data = await getArticles();
        res.send(data);
    }catch(err){
        console.log(err);
        res.send(500, 'Internal Server Issue, check logs');
    }
});

/* POST article creation */
router.post('/', async function( req, res, next) {
    try{
        const data = await addArticle(req.body);
        res.send(data);
    } catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.status(500).send('Internal Server Issue, check logs'); 
        }
    }
});

/* PATCH article Update */
router.patch('/:id', async function(req, res, next) {
    try{
        const data = await updateArticle(req.params.id, req.body);
        res.send(data);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.status(500).send('Internal Server Issue, check logs');
        }
    }
})

/* DELETE article Deletion */
router.delete('/:id', async function(req, res, next){
    try{
        const data = await deleteArticle(req.params.id);
        res.send(data);
    }catch(err){
        if(err.error){
            res.status(400).send(err);
        }else{
            console.log(err);
            res.status(500).send('Internal Server Issue, check log');
        }
    }
});

module.exports = router;
