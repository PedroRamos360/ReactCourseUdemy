import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends Component {
    render() {
        return(
            <button onClick={this.props.press}>{this.props.children}</button>
        );
    };
};

export default Button;