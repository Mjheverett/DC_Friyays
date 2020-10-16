import React, { Component } from 'react'

class Text extends Component {
    state = {
        text: '',
        displayText: '',
        textHistory: [],
    }

    addText = () => {
        const { text } = this.state;
        const newText = text + text;
        this.setState({
            text: newText,
        })
    }

    _handleChange = (newText) => {
        this.setState({
            text: newText,
        });
    };

    _handleClick = () => {
        const { text, displayText, textHistory } = this.state;
        const newText = displayText + text;

        this.setState({
            text: '',
            displayText: newText,
            textHistory: [...textHistory, newText],
        });
    };

    undoText = () => {
        const { textHistory } = this.state;
        textHistory.pop();
        const index = textHistory.length - 1;
        const newDisplayText = textHistory[index];

        this.setState({
            displayText: newDisplayText,
            textHistory: textHistory,
        })
    }

    render() {
        const { text, displayText } = this.state;
        return (
            <>
                <h1>Text Edit</h1>
                <form>
                    <input 
                        type="text"
                        onChange={event => this._handleChange(event.target.value)}
                        value={text}
                    />
                    <button type="button" onClick={this._handleClick}>
                        Add
                    </button>
                    <button type="button" onClick={this.undoText}>
                        Undo
                    </button>
                </form>
                <p>{displayText}</p>
            </>
        )
    }
}

export default Text;