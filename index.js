import express from 'express';
import bodyParser from 'body-parser';
import RouterTareas from './routes/tarea.routes.js';
import { postgraphile } from 'postgraphile';

const app = express();

app.use(bodyParser.json());

app.use('/tarea', RouterTareas);

app.use(
  postgraphile(
    "postgres://postgres:sasa@localhost:5432/postgres",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    },
  ),
);

app.listen(3000, () => {
  console.log('cambio')
  console.log('escuchando en el puerto 3000');
})
