import express from 'express';
import { auth } from "../middleware/auth.js";


const router = express.Router();

router.get("/", auth, async (request, response) => {
  
})

export default router;