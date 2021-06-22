import React, { Component } from 'react'

export class createForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.createMyBook(e)}>
                <label>Book Name : </label>
                <input onChange={(e) => this.props.updateBookname(e.target.value)}></input>
                <label>Book Description : </label>
                <input onChange={(e) => this.props.updateBookDescription(e.target.value)}></input>
                <label>Book State : </label>
                <input onChange={(e) => this.props.updateBookState(e.target.value)}></input>
                <input type='submit' value="create cat" />
            </form>
        )
    }
}

export default createForm;
