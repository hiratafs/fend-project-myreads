import React, { Component } from 'react'
import BotaoRetorna from './BotaoRetorna';
import * as BooksAPI from './BooksAPI';
import Livro from './Livro'

class PaginaBusca extends Component  {

  state = {
    query: '',
    resultadobusca: [],
    limpaBusca: false
  }


  updateQuery = (query) => {
    this.setState({query})

    if(query) {
      BooksAPI.search(query).then(livros => {
        livros.length > 0 ? this.setState({resultadobusca: livros, limpaBusca: false}) : this.setState({resultadobusca: [], limpaBusca: true})
      })
    } else {
      this.setState({resultadobusca:[],  limpaBusca: true})
    }
  }

  render() {
    return (
      <div className="search-books">
          <div className="search-books-bar">
            <BotaoRetorna />
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                placeholder="Search by title or author" 
                onChange={(event) => this.updateQuery(event.target.value)}
                value={this.state.query} />

              </div>
          </div>
          <div className="search-books-results">
            {this.state.resultadobusca.length > 0 && (<ol className="books-grid">
              {this.state.resultadobusca.map(livro => (
                <Livro key={livro.id} livros={this.props.livros} livro={livro} atualizaLista={this.props.atualizaLista}/>
              ))}
            </ol>)}

            {this.state.limpaBusca  && (
                <div>
                  <p>Nenhum resultado! Tente novamente!</p>
                </div>
            )}
          </div>
        </div>
  )
  }
    
}

export default PaginaBusca