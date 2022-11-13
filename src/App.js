import "./App.css";
import { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { fetchImages } from "./Helpers/PixabeyApi";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { Button } from "./Components/Button/Button";
import { Loader } from "./Components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page)
      .then((data) => {
        setImages(page === 1 ? data.hits : [...images, ...data.hits]);
        setTotalHits(
          page === 1
            ? data.totalHits - data.hits.length
            : data.totalHits - [...images, ...data.hits].length
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSubmitForm = (query) => {
    setQuery(query);
  };

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <SearchBar handleSubmit={handleSubmitForm} />
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : totalHits ? (
        <Button handleClick={handleLoadMoreBtn} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
