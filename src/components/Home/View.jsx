import m from 'mithril';
import Auth from '../Auth';
import User from '../User';
import Storage from '../Storage';



export default {
  view: vnode => [
    , <h1>Hello, World!</h1>
    , <button className="ui button" onclick={() => console.log(Auth)}>Auth</button>
    , <button className="ui button" onclick={() => console.log(User)}>User</button>
    , <button className="ui button" onclick={() => console.log(Storage)}>Storage</button>
    , <div className="ui horizontal divider"></div>
    , <button className="ui button" onclick={() => User.create_user({ uname: 'test', pass: 'test' })}>Create User</button>
    , <button className="ui button" onclick={() => Auth.sign_in('test', 'test')}>Sign In</button>
    , <button className="ui button" onclick={() => Auth.sign_out()}>Sign Out</button>
  ]
}