import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
    }

    decreaseCount = () => {
        const { count } = this.state;
        const newCount = count - 1;

        this.setState({
            count: newCount,
        })
    }

    increaseCount = () => {
        const { count } = this.state;
        const newCount = count + 1;

        this.setState({
            count: newCount,
        })
    }

    render() {
        const { count } = this.state;

        return (
            <>
                <h1>Counter</h1>
                <form>
                    <button type="button" onClick={this.increaseCount}>Increase</button>
                    <p>{count}</p>
                    <button type="button" onClick={this.decreaseCount}>Decrease</button>
                </form>
            </>
        )
    }
}

export default Counter;