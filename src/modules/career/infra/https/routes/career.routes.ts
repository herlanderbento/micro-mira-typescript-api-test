import { Router } from 'express';
import { createCareerFactory, listCareersFactory, updateCareerFactory } from '../controllers';

const careerRoutes = Router();

careerRoutes.post('/', (req, res) => createCareerFactory.handle(req, res));

careerRoutes.get('/:miraId', (req, res) => listCareersFactory.handle(req, res));
careerRoutes.patch('/:id', (req, res) => updateCareerFactory.handle(req, res));

export { careerRoutes };
