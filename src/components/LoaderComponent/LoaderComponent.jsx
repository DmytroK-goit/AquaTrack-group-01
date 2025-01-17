import { Circles } from "react-loader-spinner";
import css from "./LoaderComponent.module.css";

const LoaderComponent = () => (
  <div className={css.loaderContainer}>
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      visible={true}
    />
  </div>
);

export default LoaderComponent;
