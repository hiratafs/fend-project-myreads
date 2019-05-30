import React, { Component } from 'react'
import StatusLivro from './StatusLivro'
import capaIndisponivel from './img/sem_capa.png'

class Livro extends Component  {

    render () {

        const capaLivro = this.props.livro.imageLinks && this.props.livro.imageLinks.thumbnail ? this.props.livro.imageLinks.thumbnail : capaIndisponivel;

        return (
            <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${capaLivro})` }}></div>
                    <StatusLivro livro={this.props.livro} livros={this.props.livros} atualizaLista={this.props.atualizaLista} estanteatual={this.props.estanteatual}/>
                </div>
                <div className="book-title">{this.props.livro.title}</div>
                <div className="book-authors">{this.props.livro.authors}</div>
            </div>
            </li>
    )}

}

export default Livro