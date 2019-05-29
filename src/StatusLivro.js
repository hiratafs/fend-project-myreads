import React, { Component } from 'react'

class StatusLivro extends Component  {


    render () {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.atualizaLista(
                    this.props.livro, e.target.value)} defaultValue={this.props.estanteatual}>
                    <option value="move" onClick={this.marcaEstante} disabled>Mover para...</option>
                    <option value="currentlyReading" >Lendo</option>
                    <option value="wantToRead">Quero Ler</option>
                    <option value="read">Lido</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default StatusLivro