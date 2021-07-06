import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';
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

export const initSessionStore = () => {
  const _MongoDBStore = MongoDBStore(session);
  const store = new _MongoDBStore({
    uri: `${process.env.MONGODB_URI}`,
    collection: 'portfolioSessions',
  });

  return store;
}

export default connection;
