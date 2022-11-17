import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles.input} onClick={props.handleResult}>
      {props.num}
    </div>
  );
};

export default Input;
