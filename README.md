# Resource Catalog
**Wiki of Tech Info used as a reference**

### To-Do Tasks

- HTTP Verbs using Express Router per Resource Type
    - GET
    - POST
    - PUT
    - PATCH
    - DELETE
- Simple Views with EJS
    - Home/Directory (Maybe Have Search)
    - Page per Resource Type
        - Articles as Links
        - Vocab (Eventually)
        - Concepts (Eventually)
    - Details Page for Resources Types
        - Individual Page showing more details
        - With Edit & Delete
    - Create Page for Resource Types
- Create Database in MongoDB Atlas
- Build Data Access Layer per Resource Type
    - Connected to Mongo
        - InsertOne/InsertMany (CREATE)
        - Find (READ)
        - Upsert (UPDATE/PUT)
        - UpdateOne/UpdateMany (UPDATE/PATCH)
        - Remove (DELETE)

### Data Model

ARTICLE
```
{
    "title": STRING,
    "author": STRING,
    "link": URL as a STRING,
    "desc": STRING,
    "topics": ARRAY os STRING,
    "dateAdded": DATE
}
```
