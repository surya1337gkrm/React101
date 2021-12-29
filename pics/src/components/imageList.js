import React from "react";
import "./imageList.css";
import ImageCard from "./imageCard";
const ImageList = ({images}) => {
  const imagesList = images.map((image) => {
    return (
      
        <ImageCard key={image.id} image={image} />
      
    );
  });
  return (
    <div className="image-list">

      {imagesList}
    </div>
  );
};

export default ImageList;
