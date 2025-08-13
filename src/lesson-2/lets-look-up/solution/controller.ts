

import { generateNasaMockData } from '../starter/generateNasaMockData';

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


app.get('/nasa/mock', (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'startDate and endDate are required' });
  }
  const data = generateNasaMockData(startDate as string, endDate as string);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})