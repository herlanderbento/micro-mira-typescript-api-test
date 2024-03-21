import { Router } from "express";
import { createEducationFactory, deleteEducationFactory, listEducationsFactory, updateEducationFactory } from "../controllers";

const educationRoutes = Router();

educationRoutes.post('/', (req, res) => createEducationFactory.handle(req, res))
educationRoutes.patch('/:id', (req, res) => updateEducationFactory.handle(req, res))
educationRoutes.get('/:miraId', (req, res) => listEducationsFactory.handle(req, res))
educationRoutes.delete('/:id', (req, res) => deleteEducationFactory.handle(req, res))


export { educationRoutes };