
import express from 'express';
import { AsteroidService } from './services/asteroid.service';

const app = express()
const port = 3000

app.get('/asteroids', async (req, res) => {
  const {startDate, endDate} = req.query;

  const asteroidService = new AsteroidService();
  try {
  const asteroids = await asteroidService.fetchAsteroidsForDates(startDate as string, endDate as string);
  res.send(asteroids);

  } catch (err){
      res.status(500).end();
  }

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})