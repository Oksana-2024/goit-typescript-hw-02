import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, onClick }) {
  return (
    <ul className={s.galleryList}>
      {images.map(({ id, ...image }) => (
        <li className={s.imageItem} key={id}>
          <ImageCard {...image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
