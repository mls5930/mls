const userList = require('./list.js');
const create = require('./create.js');
const modify = require('./modify.js');
const deleteuser = require('./delete.js');

const express = require('express');
const app = express()

module.exports = {userList,create,modify,deleteuser}


app.get("/delete",(req,res) => {
    const userId = req.query.userId
    for (let a = 0; a <= userList.length; a++ ){
       if(userList[a].userId === userId){ 
           userList.splice(a,1); 
       }
    }
   res.json(userList)
});