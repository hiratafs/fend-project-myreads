import React, { Component } from 'react'

class StatusLivro extends Component  {

    moveEstante = (e) => {
        console.log(e.target.value)
    }

    render () {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.atualizaLista(
                    this.props.livro, e.target.value)} value={this.props.estante}>
                    <option value="move" disabled>Mover para...</option>
                    <option value="currentlyReading">Lendo</option>
                    <option value="wantToRead">Quero Ler</option>
                    <option value="read">Lido</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default StatusLivro