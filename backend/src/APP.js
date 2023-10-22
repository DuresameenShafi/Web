require('dotenv').config(); 
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require ('./routes/users');
const authRoutes = require ('./routes/auth');

//database connection
require("./db/CONN");

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());  

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

app.get('/', (req, res) => {
  res.send('hellooo');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
