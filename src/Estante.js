import React, { Component } from 'react'
import Livro from './Livro'

class Estante extends Component {
    render () {
        return (
            <div className="bookshelf">
                      <h2 className="bookshelf-title">Quero Ler</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.exemplar.filter(livro => livro.shelf === "wantToRead")
                                .map(livro => (
                                    <Livro key={livro.id} livro={livro} />
                                ))
                            } 
                        </ol>
                      </div>
            </div>
        )
    }
}

export default Estante