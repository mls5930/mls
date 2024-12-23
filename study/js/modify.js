const userList = require('./list.js');
const create = require('./create.js');
const modify = require('./modify.js');
const deleteuser = require('./delete.js');

const express = require('express');
const app = express()

module.exports = {userList,create,modify,deleteuser}


app.get("/modify",(req,res) => {
    const {userId,name} = req.query
    for (let a = 0; a <= userList.length; a++ ){
       if(userList[a].userId === userId){ 
        userList[a].name = name
           break;
       }
    }
   res.json(req.query)
});
