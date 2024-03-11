import { Router } from 'express';
import { createMiraFactory, getMiraByUserFactory } from '../controllers';

const miraRoutes = Router();

miraRoutes.post('/', (req, res) => createMiraFactory.handle(req, res));
miraRoutes.get('/:userId/users', (req, res) => getMiraByUserFactory.handle(req, res));


export { miraRoutes };
