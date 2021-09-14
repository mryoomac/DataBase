

const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://MongoClient:haslobezcyfrjestdobre@cluster0.g9ws1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 
const client = new MongoClient(uri);
const dbname = 'Cluster0'

MongoClient.connect(uri, {}, (error, client) => {
    if (error)
        console.log("brak połaczenia")

        const db = client.db(dbname)

    console.log('Database connection is OK')

    // Adding 5 users 
/*
    db.collection('users').insertMany([  
        {
            name: 'Jacek',
            age: 22 
        },
        {
            name: 'Karol',
            age: 23 
        }, 
        {
            name: 'Adam',
            age: 24 
        }, 
        {
            name: 'Zbyszek',
            age: 24 
        }, 
        {
            name: 'Marek',
            age: 22 
        }],  
        
            (error, users) => {
            if(error)
                console.log('Error', error)

            console.log(users)
             }
            )
*/

        db.collection('users').find({}).count((error, result) => {
            console.log('Number of users:')
            console.log(result)
        })
        
        db.collection('users').find({
            age:22
        }).toArray((error, result) => {
            console.log('Users 22 years old:')
            console.log(result)
        }) 

        db.collection('users').find({
            age:{$gt: 23}
        }).toArray((error, result) => {
            console.log('Users older than 23 years:')
            console.log(result)
        }) 


})

