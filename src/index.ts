import dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import Routes from './routes';
import mongodb from './database';

dotenv.config();

mongodb();

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

if (process.env.NODE_ENV == 'development') {
  app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
      },
    }),
  );
}

app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
