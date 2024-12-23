
const List = require('./list.js');
// const create = require('./create.js');
// const modify = require('./modify.js');
// const deleteuser = require('./delete.js');

const express = require('express');
const app = express()


app.get("/create",(req,res) => {
    const {userId, name} = req.query;
    userList.push({userId,name})
    res.json(req.query)
 }) 
 module.exports = {List}