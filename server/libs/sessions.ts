import { initSessionStore } from './db';

const sess = {
  name: 'portfolio-session',
  secret: `${process.env.SESSION_SECRET}`,
  cookie: {
    maxAge: 2 * 3600 * 1000,
  },
  resave: false,
  saveUninitialized: false,
  store: initSessionStore(),
};

export default sess;
