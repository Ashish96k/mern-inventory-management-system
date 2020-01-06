const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
const mongo_uri = process.env.ATLAS_URI;
mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('MongoDB connection success !!');
    }
  }
);

// Routes
const storeRouter = require('./routes/stores');
const userRouter = require('./routes/users');
const brandRouter = require('./routes/brands');
const categoryRouter = require('./routes/categories');
const productRouter = require('./routes/products');

app.use('/api/stores', storeRouter);
app.use('/api/users', userRouter);
app.use('/api/brands', brandRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listening Port
app.listen(port, () => console.log(`Server started on port ${port}`));
