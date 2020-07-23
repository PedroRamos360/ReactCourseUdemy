import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';
import './global.css';

class App extends React.Component {
    state = {
        contador: 0,
        nome: '',
    }

    adicionar = () => {
        this.setState({
            contador: this.state.contador += 1
        });
    }

    changeText = (event) => {
        this.setState({
            nome: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Hello React!!</h1>
                <label>Valor: {this.state.contador}</label>
                <Button press = {this.adicionar}>Update</Button>
                <label>Nome: {this.state.nome}</label>
                <input onChange={this.changeText}/>      
            </div>
        );
    };
};

// Pega o conteúdo da classe App e manda pro index.html na div 'app'
render(<App />, document.getElementById('app'));