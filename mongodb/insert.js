var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to database.")
    var dbo = db.db("openjs");
    var collection = dbo.collection("customers");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    collection.insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});