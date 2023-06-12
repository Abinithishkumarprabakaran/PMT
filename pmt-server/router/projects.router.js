import express from 'express';
import { auth } from "../middleware/auth.js";
import { addProject, getAllProjects } from '../service/projects.service.js';

const router = express.Router()

router.get('/:id', async (req, res) => {

    const { id } = req.params;
    console.log(id)

    // const res = await getAllProjects()

    // response.send(res);
})

router.post('/:id/addproject', async function (request, response) {
  
  const { id } = request.params;

  console.log(id);
  
  const data = request.body;
  console.log(data)

  const res = await addProject(data)

  response.send(res)
})

export default router