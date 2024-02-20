import Hapi from '@hapi/hapi';
import { makeDb, startDatabase } from './database';
import dotenv from 'dotenv';

const init = async () => {
  dotenv.config();
  const db = makeDb();

  const server = Hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/tasks',
    handler: async (r, h) => {
      try {
        const { rows } = await db.raw('select * from tasks');
        return h.response(rows).code(200)
      } catch (error) {
        console.error(error);
        return h.response().code(500)        
      }
    } 
  });

  server.route({
    method: 'POST',
    path: '/mission-two', // Bonus points if you give it a sensical name ;)
    handler: async (r, h) => {
      /**
       * Mission Two: Insert a task into the database.
       * 
       * Receive a post request from the front end
       * and insert it into the database.details, too
       * 
       * Definition of done:
       * [ ] the record is inserted into the database
       * [ ] a success response is returned
       * 
       * Your submission will be judged out of 10 points based on
       * the following criteria:
       * 
       * - Works as expected - 5 points
       * - Code quality - 5 points
       *   - Is the code clean and easy to read?
       *   - Are there any obvious bugs?
       *   - Are there any obvious performance issues?
       *   - Are there comments where necessary?
       */
    } 
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
startDatabase();
