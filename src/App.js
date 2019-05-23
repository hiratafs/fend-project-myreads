import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PaginaLivros from './PaginaLivros'
//import PaginaBusca from '.PaginaBusca'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    livros: []
  }
  
/* RENDERIZAÇÃO DO CATÁLOGO */
  componentDidMount() {
    BooksAPI.getAll().then(livros => {
      this.setState({livros: livros})
    })
  }

/* ATUALIZAÇÃO DO STATUS DOS LIVROS PELAS ESTANTES */
  mudaEstante = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }
 
  render() {
    return (
      <div className="app">
        <PaginaLivros  livros={this.state.livros} mudaEstante={this.mudaEstante}/>
      </div>
    )
  }
}

export default BooksApp
