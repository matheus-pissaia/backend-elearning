import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CoursesController from '../controllers/CoursesController';

const coursesRouter = Router();
const coursesController = new CoursesController();

coursesRouter.use(ensureAuthenticated);

coursesRouter.post('/', coursesController.create);
