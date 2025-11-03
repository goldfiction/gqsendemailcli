//import { _emailit, _setServer } from 'gqemail'
//import { _from } from "./user.js"

var _from;
var _emailit;
var _setServer;
var gqemail;

async function useESModule(done) {
  _from = await import('./user.js');
  _from = _from._from;
  gqemail = await import('gqemail');
  _emailit = gqemail._emailit;
  _setServer = gqemail._setServer;
  done()
}

useESModule(function(){
  var sendmail = function () {
    _setServer(_from);
    var _address = {
      from: _from.user,
      to: process.argv[2] || "test@gmail.com",
      title: process.argv[3] || "",
      text: process.argv[4] || ""
    }
    console.log(_address)
    _emailit(_address);
    console.log("Email sent.");
  }

  sendmail()
});

