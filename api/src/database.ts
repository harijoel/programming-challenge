import knex, { type Knex } from 'knex';

let cachedDb: Knex;
export const makeDb = () => {
  let connection:string | undefined = process.env.PG_CONNECTION_STRING;

  if (process.env.NODE_ENV === 'development') {
    connection = `postgres://${process.env.PGUSER}:${process.env.PGPASS}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDB}`;
  }

  if (!connection) {
    throw new Error('No PG_CONNECTION_STRING provided');
  }

  if (cachedDb) {
    return cachedDb;
  }

  cachedDb = knex({
    client: 'pg',
    connection,
  });

  return cachedDb;
};

export async function startDatabase(): Promise<void> {
  try {
    const db = makeDb();
    const { rows } = await db.raw<{ rows: { test: number }[] }>(
      'SELECT 1 as test',
    );
    if (rows[0].test === 1) {
      console.log('DB connected successfully')
    }
  } catch (error) {
    console.error(error);
  }
}
