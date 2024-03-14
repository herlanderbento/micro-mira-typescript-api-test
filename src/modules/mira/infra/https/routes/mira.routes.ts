import { Router } from 'express';
import {
  createMiraFactory,
  getMiraByUserFactory,
  getMiraFactory,
  listMirasFactory,
  updateMiraFactory,
} from '../controllers';

const miraRoutes = Router();

miraRoutes.post('/', (req, res) => createMiraFactory.handle(req, res));
miraRoutes.get('/', (req, res) => listMirasFactory.handle(req, res));
miraRoutes.get('/:id', (req, res) => getMiraFactory.handle(req, res));
miraRoutes.get('/:id/shared', (req, res) => getMiraFactory.handle(req, res));
miraRoutes.get('/:userId/users', (req, res) =>
  getMiraByUserFactory.handle(req, res)
);
miraRoutes.patch('/:id', (req, res) => updateMiraFactory.handle(req, res));

export { miraRoutes };
