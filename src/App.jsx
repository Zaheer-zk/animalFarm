import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        'http://localhost:8000?' + new URLSearchParams({ q: searchKey })
      );
      const data = await response.json();
      setAnimals(data);
    };

    search();
  }, [searchKey]);

  return (
    <>
      <main>
        <h1>Animal Farm</h1>

        <input
          type='text'
          placeholder='Search animal here...'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {animals.length === 0 && 'No animals found'}
        {animals.map((animal) => {
          return (
            <ul key={animal.id}>
              <li>{animal.type}</li>
              <li>{animal.age}</li>
              <li>{animal.name}</li>
            </ul>
          );
        })}
      </main>
    </>
  );
}

export default App;
