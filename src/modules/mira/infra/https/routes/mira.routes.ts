import { Router } from 'express';
import { createMiraFactory } from '../controllers';

const miraRoutes = Router();

miraRoutes.post('/', (req, res) => createMiraFactory.handle(req, res));

export { miraRoutes };
