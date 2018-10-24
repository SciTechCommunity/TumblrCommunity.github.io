import User from './User';
import Storage from './Storage';

var si = User.current_user ? true : false;

export default {
  signed_in: si,

  sign_in(username, password) {
    new Promise((resolve, reject) => {
      let id = User.get_id(username);
      let data = Storage[id];

      console.log(id, data);

      if (data) {
        data = User.from_string(data);
        if (0 == data.password.localeCompare(password)) {
          this.signed_in = true;
          User.current_user = data;
          Storage.current_user = id;
          resolve(data);
        } else reject('Error: Incorrect Password!');
      } else reject('Error: User not found!');
    });
  },

  sign_out() {
    this.signed_in = false;
    User.current_user = null;
    Storage.removeItem('current_user');
  }
}



/**
 * Auth Model
 * 
 * sign in
 * sign out
 * 
 * signed_in?
 */