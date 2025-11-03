#import gqemail from "gqemail"
#import emailit from 'gqemail'
#import {_emailit,_setServer} from 'gqemail'
_emailit=require("gqemail")._emailit
_setServer=require("gqemail")._setServer
@abc="abc"

_from = require("./user.coffee")._from  

_setServer(_from)
_emailit({from:"gl2900213@gmail.com",to:"glidev5@gmail.com",text:"test 001"})