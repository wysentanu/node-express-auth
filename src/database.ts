import mongoose from 'mongoose';
import config from './libs/config';

async function connect(): Promise<void> {
  try {
    await mongoose.connect(config.DB.URI);
    if (process.env.NODE_ENV !== 'test') {
      console.log('Mongoose connected to %s', config.DB.URI);
    }
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
}

export default connect;
