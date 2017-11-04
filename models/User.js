const defaultUsersList = [
  {id: 1, name: 'The Good'},
  {id: 2, name: 'The Bad'},
  {id: 3, name: 'The Ugly'}
];

class User {
  constructor() {
    this.usersList = defaultUsersList;
  }

  getUsers() {
    return this.usersList;
  }
}

export default User;
