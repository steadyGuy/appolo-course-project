import mongoose from 'mongoose';

const URI = `${process.env.MONGODB_URI}`;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connection = mongoose.createConnection(URI);

connection.on('error', (err) => {
  if (err) throw err;
  console.error.bind(console, 'connection error');
});

export default connection;