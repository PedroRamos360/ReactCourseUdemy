import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends Component {
    static defaultProps = {
        title: "Comportamento Padrão",
        descricao: "descricao default"
    };

    static propTypes = {
        title: PropTypes.string.isRequired
    };

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