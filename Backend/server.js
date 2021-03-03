const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js') 
const roleRouter = require('./routes/RoleRoutes.js')
const userRoleRouter = require('./routes/UserRoleRoutes.js')

const app = express();

app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
//ex 'mongodb+srv://sa:s3cr3t@cluster0.qa3t4.mongodb.net/gbc-fall2020?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://KevinUfkes:harpoonharpoon12345!@cluster0.gmis5.mongodb.net/groupmakerPrototype1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now... ', err);
  process.exit();
});

app.use(userRoleRouter)
app.use(userRouter);
app.use(roleRouter)
app.listen(8081, () => { console.log('Server is running on port 8081') });