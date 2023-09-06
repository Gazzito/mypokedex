
import './App.css';
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import CardList from "./components/CardList";
import ButtonGroup from "./components/ButtonGroup";
import Pagination from "./components/TablePagination";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [active, setActive] = useState(1);
  const [offsets, setOffsets] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const limit=10;

  const handlePageChange = (page, lastPage) => {
    setActive(page);
    if(page < lastPage)
    setOffsets(offsets-10)
    else if (page > lastPage ) {setOffsets(offsets+10)}
  };
  
 useEffect(() => {
  setLastPage(active);
  console.log(lastPage)
  console.log("passei por aqui")
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offsets}`)
  .then((response) => response.json())
  .then((data) => {
    setPokemons(data.results); // Atualiza o estado
    console.log(data.results, "pokemons"); // Use o valor atualizado
  })
  .catch((error) => {
    console.error(error);
  });
}, [active, offsets]);





  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"></link>
    <div>
      <Header></Header>
      <ButtonGroup></ButtonGroup>
      <CardList pokemons = {pokemons} offsets = {offsets}></CardList>
      <Pagination active = {active} onPageChange = {handlePageChange} offsets = {offsets} lastPage = {lastPage}></Pagination>
      <br></br>
    </div>
    </>
    
      
  );
}

export default App;
