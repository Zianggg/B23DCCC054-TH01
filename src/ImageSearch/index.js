import React, { useState } from "react";
import ImageList from "./component/list";
import axios from "axios";

const ImageSearchApp = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=46166847-40e887f0f1cbd269c98d3b401&q=${query.trim()}&image_type=photo`
      // `https://api.unsplash.com/search/photos?query=${query}&client_id=krw2R0UEdUvxVqxY6ve5Tp3xp1qqbIDnMbuZu8oY6iI`
    );
    debugger;
    setImages(response?.data?.hits ?? []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <div
      style={{
        margin: 24,
        width: 500,
        paddingRight: 24,
        border: "3px solid #ccc",
        textAlign: "center",
      }}
    >
      <h1>Tìm kiếm hình ảnh</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm hình ảnh"
        />
        <button type="submit">Tìm</button>
      </form>
      <ImageList images={images} />
    </div>
  );
};

export default ImageSearchApp;
