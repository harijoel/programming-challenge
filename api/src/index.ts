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
    path: '/insert-task',
    handler: async (r, h) => {
      try {
        console.log("index.ts arrived")
        const content = r.payload; // Extracting 'content' from the payload
  
        // Assuming db is the database connection
        await db('tasks').insert(content);
  
        return h.response({ message: 'Task inserted successfully' }).code(200);
      } catch (error) {
        console.error(error);
        return h.response({ error: 'Internal server error' }).code(500);        
      }
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
