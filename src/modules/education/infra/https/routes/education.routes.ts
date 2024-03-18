import { Router } from "express";
import { createEducationFactory } from "../controllers";

const educationRoutes = Router();

educationRoutes.post('/', (req, res) => createEducationFactory.handle(req, res))

export { educationRoutes };