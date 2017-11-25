const defaultUsersList = [
  {id: 1, name: 'The Good', login: 'user1', email: 'someGood@body.com', password: '12345'},
  {id: 2, name: 'The Bad', login: 'user2', email: 'someBad@body.com', password: '12345'},
  {id: 3, name: 'The Ugly', login: 'user3', email: 'someUgly@body.com', password: '12345'}
];

class User {
  constructor() {
    this.usersList = defaultUsersList;
  }

  getUsers() {
    return this.usersList;
  }
}

export default new User();
