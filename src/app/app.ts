import express, { Application } from 'express';
import { getCoursesController } from './controllers/get-courses';

const app: Application = express();

app.use(express.json());

app.get('/api/courses', getCoursesController);

export default app;
