import React from "react";
import "./imageList.css";
import ImageCard from "./imageCard";
const ImageList = ({images}) => {
  const imagesList = images.map((image) => {
    return (
      <div key={image.id} className="image-list">
        <ImageCard image={image} />
      </div>
    );
  });
  return (
    <div>
      Image List
      <br />
      {imagesList}
    </div>
  );
};

export default ImageList;
