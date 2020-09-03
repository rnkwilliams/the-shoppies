import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css';
import MovieList from './components/MovieList'

class App extends React.Component {

  state = {
    movies: [],
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("in there")
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&type=movie&apikey=6168123d`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({ movies: [...data.Search] })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
