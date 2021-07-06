import './config/dotenvConf';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sess from './libs/sessions';
import mySessionMiddleware from './middlewares/session';

import router from './router';
import connection, { initSessionStore } from './libs/db';
import createApolloServer from './_graphql';
import passport from './libs/passport';

// import connection from './config/db';

// Midlware connecting
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser());

// routes middleware
app.use('/api', router);

// turn on the server
const PORT = process.env.PORT || 3001;

createApolloServer().applyMiddleware({ app });

connection.once('open', () => {
  console.log('Mongodb connection established successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
