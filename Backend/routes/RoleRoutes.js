const express = require('express');
const userModel = require('../models/UserModel')
const roleModel = require('../models/RoleModel');
const app = express();


// Create
app.post('/role', async (req, res) => {
  const role = new roleModel(req.body);
  try {
    await role.save();
    res.send(role);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

// Retrieve
app.get('/roles', async (req, res) => {
  const users = await userModel.find({});
  const roles = await roleModel.find({});
  try {
    res.append('Access-Control-Allow-Origin', ['*']);
    var data = {
      "userList" : users, 
      "roleList" : roles
    }
    res.send(data);
  } 
  catch (err) {
    res.status(500).send(err);
  }
});

// Update (use patch instead of put so you only have to send the data you want to change)
app.patch('/role/:id', async (req, res) => {
    try {
      await roleModel.findByIdAndUpdate(req.params.id, req.body)
      await roleModel.save()
      res.send({result:"edit success"})
      res.end()
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })

//Delete
// localhost:8081/user/5d1f6c3e4b0b88fb1d257237
app.delete('/role/:id', async (req, res) => {
    try {
      const role = await roleModel.findByIdAndDelete(req.params.id)
      if (!role) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app