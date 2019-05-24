import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PaginaLivros from './PaginaLivros'
import PaginaBusca from './PaginaBusca'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    /* listalivros ou busca */
    pagina: 'listalivros',
    livros: [],

  }
  
/* RENDERIZAÇÃO DOS LIVROS NAS ESTANTES */
  componentDidMount() {
    this.mostraCatalogo()
  }

  mostraCatalogo = () => {
    BooksAPI.getAll().then(livros => {
      this.setState({livros: livros})
    })  
  }

  atualizaLista = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.mostraCatalogo)
  }

  mudaPagina = () => {
    console.log("Mudei a página")
  }
  

/* ATUALIZAÇÃO DO STATUS DOS LIVROS PELAS ESTANTES */

   render() {
      return (
        <div className="app">
          {this.state.pagina === 'listalivros' && (
              <PaginaLivros  livros={this.state.livros} atualizaLista={this.atualizaLista} mudaPagina={this.mudaPagina} />
          )}

          {this.state.pagina === 'busca' && (
              <PaginaBusca livros={this.state.livros} atualizaLista={this.atualizaLista} />
          )}

        </div>
      )
  }
}

export default BooksApp
