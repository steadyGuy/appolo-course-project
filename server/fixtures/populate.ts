import connection from '../libs/db';
import fakeDb from './portfolios';

connection.once('open', async () => {
  console.log('Successful connected to db for populating mock data');
  console.log('Populating started: ');
  await fakeDb.populate();
  await connection.close();
  console.log('Populating ended.');
});
