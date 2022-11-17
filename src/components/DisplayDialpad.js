import DisplayResult from "./DisplayResult";
import Input from "./Input";
import styles from "./DisplayDialPad.module.css";

const DisplayDialPad = () => {
  return (
    <div className={styles.container}>
      <DisplayResult></DisplayResult>
      <div className={styles.dialer}>
        <Input num={1}></Input>
        <Input num={2}></Input>
        <Input num={3}></Input>
        <Input num={4}></Input>
        <Input num={5}></Input>
        <Input num={6}></Input>
        <Input num={7}></Input>
        <Input num={8}></Input>
        <Input num={9}></Input>
        <Input num={"R"}></Input>
        <Input num={0}></Input>
        <Input num={"C"}></Input>
      </div>
    </div>
  );
};

export default DisplayDialPad;
