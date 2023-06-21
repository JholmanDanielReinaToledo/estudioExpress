import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const tareas = [
  {
    id: 1,
    nombre: 'Tarea 1'
  },
  {
    id: 2,
    nombre: 'Tarea 2'
  },
];

app.use(bodyParser.json())

app.get('/tarea', (req, res)  => {
  res.status(200).send(tareas)
});

app.get('/tarea/:id', (req, res) => {
  const id = req.params.id;

  const tareaEncontrada = tareas.find((tarea) => {
    return tarea.id == id;
  });

  if (tareaEncontrada) {
    return res.status(200).send(tareaEncontrada)
  }
  return res.status(404).send();
});

app.post('/tarea',  (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);

  res.status(200).send(tarea)
});

app.delete('/tarea/:id', (req, res) => {
  const id = req.params.id;

  const tareaEncontrada = tareas.findIndex((tarea) => {
    return tarea.id == id;
  });

  tareas.splice(tareaEncontrada, 1);

  res.status(200).send(tareas);
})

app.listen(3000, () => {
  console.log('cambio')
  console.log('escuchando en el puerto 3000');
})

console.log('Iniciando la aplicacion');