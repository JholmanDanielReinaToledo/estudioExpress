import { Router } from 'express';

const router = Router();

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

router.get('/', (req, res)  => {
  res.status(200).send(tareas)
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const tareaEncontrada = tareas.find((tarea) => {
    return tarea.id == id;
  });

  if (tareaEncontrada) {
    return res.status(200).send(tareaEncontrada)
  }
  return res.status(404).send();
});

router.post('/',  (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);

  res.status(200).send(tarea)
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const tareaEncontrada = tareas.findIndex((tarea) => {
    return tarea.id == id;
  });

  tareas.splice(tareaEncontrada, 1);

  res.status(200).send(tareas);
})

export default router;
