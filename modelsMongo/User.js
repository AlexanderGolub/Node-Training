import mongoose from './dbConnection';

let Schema = mongoose.Schema;
let userSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  email: String,
  password: {
    type: String,
    required: true
  },
  lastModifiedDate: Date
});

let User = mongoose.model('User', userSchema);

const defaultUsersList = [
  {id: 1, name: 'The Good', login: 'user1', email: 'someGood@body.com', password: '12345', lastModifiedDate: new Date()},
  {id: 2, name: 'The Bad', login: 'user2', email: 'someBad@body.com', password: '12345', lastModifiedDate: new Date()},
  {id: 3, name: 'The Ugly', login: 'user3', email: 'someUgly@body.com', password: '12345', lastModifiedDate: new Date()},
];

mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections().toArray((err, list) => {
    if (list.length) {
      if (!list.find(collection => collection.name === 'users')) {
        console.log('no user');
        User.create(defaultUsersList);
      }
      console.log('user');
    } else {
      console.log('no user');
      User.create(defaultUsersList);
    }
  });
});

export default User;
