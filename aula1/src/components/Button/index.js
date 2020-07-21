import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.descricao}</p>
                <button>{this.props.children}</button>
            </div>
        );
    };
};

export default Button;