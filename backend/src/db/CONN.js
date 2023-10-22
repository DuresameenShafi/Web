const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://alizaarshad123:P9JGmIzSj77kzjho@cluster1.xzfdokh.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,

  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error:', error);
});
