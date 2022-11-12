import './App.css';
import React, { Component } from 'react';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { fetchImages } from './Helpers/PixabeyApi';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
import { Loader } from './Components/Loader/Loader';


class App extends Component {

  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: 0,
    isLoading: false
  }




  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      if (prevState.query !== query) {
        this.setState({ page: 1 })
      }
      this.setState({ isLoading: true })
      fetchImages(query, page).then(
        (data) => {
          this.setState(prev => ({
            images: page === 1 ? data.hits : [...prev.images, ...data.hits],
            totalHits: page === 1 ? data.totalHits - data.hits.length : data.totalHits - [...prev.images, ...data.hits].length
          }))
        }).finally(() => {
          this.setState({ isLoading: false })
        })
    }


  }

  handleSubmitForm = (query) => {
    this.setState({ query })
  }

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }


  render() {
    return (
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmitForm} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading ? <Loader /> : (this.state.totalHits ? <Button handleClick={this.handleLoadMoreBtn} /> : <></>)}
        
      </div>
    );
  }
}

export default App;