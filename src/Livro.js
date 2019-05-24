import React, { Component } from 'react'
import StatusLivro from './StatusLivro'

class Livro extends Component  {
  
    render () {
        return (
            <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.livro.imageLinks.thumbnail})` }}></div>
                    <StatusLivro livro={this.props.livro} atualizaLista={this.props.atualizaLista}/>
                </div>
                <div className="book-title">{this.props.livro.title}</div>
                <div className="book-authors">{this.props.livro.authors}</div>
            </div>
            </li>
    )}

}

export default Livro