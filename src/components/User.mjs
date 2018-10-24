import Storage from './Storage';

function User(data) {
  this.username = data.uname;
  this.password = data.pass;

  this.to_string = function () {
    return JSON.stringify({
      uname: this.username,
      pass: this.password
    });
  }
}

const from_string = string_data => new User(JSON.parse(string_data));
const current_user = Storage.current_user ? from_string(Storage.current_user) : null;
const get_id = username => `user_${btoa(username)}`;


export default {
  current_user,
  from_string,
  get_id,

  create_user(data) {
    let id = get_id(data.uname);
    let user = new User(data);
    Storage[id] = user.to_string();
  },

  new_user: data => new User(data),
}