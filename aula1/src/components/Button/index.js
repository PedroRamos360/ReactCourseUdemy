import React from 'react';
import './index.css';

// stateless
const Button = (props) => <button onClick={props.press}>{props.children}</button>

// outra sintaxe possível
// const Button = (props) => (
//     <button onClick={props.press}>{props.children}</button>
// )


export default Button;

// stateful
// class Button extends Component {
//     state = {

//     };

//     componentWillMount() {
//         console.log("WillMount");
//     };

//     componentDidMount() {
//         console.log("DidMount");
//     };

//     render() {
//         console.log("render");
//         return(
//             <button onClick={this.props.press}>{this.props.children}</button>
//         );
//     };
// };
