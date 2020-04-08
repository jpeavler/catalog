const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = process.env.DB_URL;

// Database Name
const dbName = 'wiki';
const colName = 'articles';
 
// Database Settings
const settings = { useUnifiedTopology: true }

// Article Validator Function (Title & Link required fields, Link needs proper format)
const validArticle = (article) => {
    let result;
    if(!article.title){
        result = 'Articles require a Title';
    }else if(!article.link){
        result = 'Articles require a Link';
    }else if(validURL(article.link)){
        result = 'Link not valid';
    }
    return result;  //If the article is valid, result will return undefined
}
const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

const getArticles = () => {
    const iou = new Promise((resolve, reject) =>{
    // Use connect method to connect to the server
        MongoClient.connect(url, settings, function(err, client) {
            if(err){
               reject(err);
            } else{
                console.log("Connected successfully to server to GET Articles");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                collection.find({}).toArray(function(err, docs) {
                    if(err){
                        reject(err);
                     } else{ 
                    console.log("Found the following articles");
                    console.log(docs)
                    resolve(docs);
                    client.close();
                    }
                });
            }
        });
    });
    return iou;
}

const addArticle = (articles) => {
    //const invalidArticles = articles.filer()
    const iou = new Promise ((resolve, reject) => {
        if(!Array.isArray(articles)){
            reject({msg:'Need to send an Array of Articles'})
        } else {
            MongoClient.connect(url, settings, async function(err, client){
                if(err){
                    reject(err);
                }else{
                    console.log('Connected succesfully to server to POST an Article');
                    const db = client.db(dbName);
                    const collection = db.collection(colName);
                    const results = await collection.insertMany(articles); //insertMany() returns a promise
                    resolve(results.ops);
                }
            });
        }
        
    });
    return iou;
}


module.exports = {
    getArticles,
    addArticle
}