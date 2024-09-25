import React from "react";

const ImageList = ({ images }) => {
  return (
    <div style={{ 
        height: 500,
        overflowY: "scroll",
        display:"flex"
        }}>
      {images.length > 0 ? (
        <ul>
          {images.map((image) => (
        <img
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          style={{ width: "50%", height: "175px",}}/>
      ))}
        </ul>
      ) : (
        <p>Không tìm thấy hình ảnh.</p>
      )}
    </div>
  );
};

export default ImageList;
