import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/node_test');

let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to mongoDB');
});

export default mongoose;
