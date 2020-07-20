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
                <Button/>
            </>
        );
    }
}

render(<App />, document.getElementById('app'));