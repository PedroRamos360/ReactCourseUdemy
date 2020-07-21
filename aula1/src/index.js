import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>
                    Hello React!!
                </h1>
                <Button title="teste" descricao="asasas">
                    Update
                </Button>
            </>
        );
    }
}

// Pega o conteúdo da classe App e manda pro index.html na div 'app'
render(<App />, document.getElementById('app'));