import mongoose, { ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo: MongoMemoryServer;

/**
 * Connect to mock memory db.
 */
export const connect = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  const mongooseOpts: ConnectOptions = {
    maxPoolSize: 10,
  };

  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Close db connection
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
};

/**
 * Delete db collections
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
