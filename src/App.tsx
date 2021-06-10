import React from 'react';
import './App.css';
import PetList from './Components/PetList/PetList';
import { useQuery, gql } from '@apollo/client';

const ALL_PETS = gql`
  {
      allPets {
        name,
        id
      }
  }
`;

function App() {
  const { data } = useQuery(ALL_PETS);
  return (
    <div className="App">
        { data && 
        <PetList pets={data.allPets}/>}
    </div>
  );
}

export default App;
