import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

// const LoaderType = {
//   visible:;
// }

export default function Loader({ visible }) {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={visible}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
