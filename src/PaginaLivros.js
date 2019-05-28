import React, { Component } from 'react'
import Livro from './Livro'
import AdicionaLivro from './AdicionaLivro'

class PaginaLivros extends Component {
    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    
                    {/* ESTANTE DOS LIVROS ATUAIS*/}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Lendo</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                           {this.props.livros.filter(livro => livro.shelf === "currentlyReading")
                                .map(livro => (
                                    <Livro key={livro.id} livro={livro} 
                                    atualizaLista={this.props.atualizaLista}
                                    />
                                ))
                            } 
                        </ol>
                      </div>
                    </div>
                    
                    {/* ESTANTE DOS LIVROS FUTUROS*/}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Quero Ler</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.livros.filter(livro => livro.shelf === "wantToRead")
                                .map(livro => (
                                    <Livro key={livro.id} livro={livro} 
                                    atualizaLista={this.props.atualizaLista} 
/>
                                ))
                            } 
                        </ol>
                      </div>
                    </div>
                    

                    {/* ESTANTE DOS LIVROS LIDOS*/}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Lido</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.livros.filter(livro => livro.shelf === "read")
                                .map(livro => (
                                    <Livro key={livro.id} livro={livro} 
                                    atualizaLista={this.props.atualizaLista} 
                                    />
                                ))
                            } 
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <AdicionaLivro />
            </div>
        )
    }
    
}

export default PaginaLivros