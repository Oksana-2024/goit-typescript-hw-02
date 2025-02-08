import s from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";

export default function ImageCard({
  onClick,
  urls,
  likes,
  alt_description,
  user,
}) {
  return (
    <>
      <img
        src={urls.small}
        alt={alt_description}
        width={300}
        className={s.imageCard}
        onClick={(e) => onClick(e, { urls, alt_description })}
      />
      <div className={s.discrBox}>
        <div className={s.author}>
          <p>
            Author:{" "}
            <span className={s.userName}>{user.name.toLowerCase()}</span>
          </p>
        </div>
        <div className={s.likes}>
          <FcLike />
          <p>{likes}</p>
        </div>
      </div>
    </>
  );
}
