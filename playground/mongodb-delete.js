//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany method
  // db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne method
  // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name : 'Damian Ippolito'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('586a86d3666dbc2a6486f8be')
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
