// const list =document.querySelector(`.list`)
const express = require('express');
const app = express()

const create = require('./create.js');
const modify = require('./modify.js');
const deleteuser = require('./delete.js');

const userList = [

    {
        userId:`asdasdas`,
        name:`dasd`
    }
]

 console.log(userList);
app.get("/list",(req,res) => {
    res.json(userList)
}) 

app.listen(3000, () => {
    console.log("서버가 열렸습니다!");
})

module.exports = {userList,create,modify,deleteuser}

