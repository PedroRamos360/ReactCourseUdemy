import React, { Component } from 'react';
import Button from './component/Button';
import { Link } from 'react-router-dom';
import Personagem from './Personagem';

class App extends Component {
   state = {
      personagens: []
   };

   async componentWillMount() { // Executa antes do render
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon'); // requisição api
        const dataJson = await response.json(); // transforma o contéudo da requisição em um objeto json

        this.setState({ personagens: dataJson.results }); // Salva em personagens todos personagens retornados
      } catch (error) {
        alert(error);
      }
    }
   render() {
      return (
         <div>
            {
               this.state.personagens.map(personagem => { // Funciona como um loop. Mostra o nome de cada personagem na tela
                  return(
                     <div key={personagem.url}>
                        {personagem.name}
                     </div>
                  )
               })
            }
         </div>
      );
   };
};

export default App;
