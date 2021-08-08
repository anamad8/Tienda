import React from 'react'

class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }

    onIncrease() {
        this.setState(prevState => ({
        number: prevState.number + 1
        }));
    }

    onDecreae() {
        this.setState({ number: this.state.number - 1 });
    }

    render() {
        return (
            <div>
            <h1>Carrito</h1>
            <button onClick={this.onIncrease.bind(this)}>Increase</button>
            <button onClick={this.onDecreae.bind(this)}>Decrease</button>
            <p>{this.state.number}</p>
            </div>
        );
    }
}

export default ItemCount;
