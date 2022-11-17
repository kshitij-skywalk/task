import styles from "./DisplayResult.module.css";
const DisplayResult = (props) => {
  return (
    <div type="text" className={`${styles["display-result"]} ${styles.align}`}>
      {props.result}
    </div>
  );
};

export default DisplayResult;
