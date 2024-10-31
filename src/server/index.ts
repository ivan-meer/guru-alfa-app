import express from 'express';
import cors from 'cors';
import { directionsRouter } from './routes/directions';
import { locationsRouter } from './routes/locations';
import { pointsRouter } from './routes/points';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/directions', directionsRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/points', pointsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});