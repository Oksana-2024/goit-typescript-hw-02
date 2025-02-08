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
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
