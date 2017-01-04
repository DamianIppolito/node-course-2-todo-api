//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("586cd590d23b82138f9b76c1")
  // },{
  //   $set :{
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("586a837d5b76f11b0caaea2a")
  },{
    $set :{name : 'Damian'},
    $inc: { age : 1}
  },{
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
