import { _emailit, _setServer } from 'gqemail'
import { _from } from "./user.js"


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
}

sendmail()