import express from 'express';
import cors from 'cors';

// Initialize the express app
const app = express();
app.use(express.json());
app.use(cors());

// Make some animals
import Chance from 'chance';
const chance = Chance();

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});
// console.log(animals);

// Endpoint to search for animals
app.get('', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  //   console.log(query);
  const result = animals.filter((animal) =>
    animal.type.toLowerCase().includes(query)
  );
  console.log('result:', result);
  res.send(result);
});

app.listen(8000, () => {
  console.log('listening on http://localhost:8000');
});
