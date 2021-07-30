var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to database.")
    var dbo = db.db("openjs");
    var collection = dbo.collection("customers");
    collection.find().toArray(function(err, res) {
        if (err) throw err;
        if (res.length) {
            console.log(res);
        } else {
            console.log("No matches found.")
        }
        db.close();
    });
});