import DisplayResult from "./DisplayResult";
import Input from "./Input";
import styles from "./DisplayDialPad.module.css";
import { useState } from "react";

const DisplayDialPad = () => {
  const [result, setResult] = useState("");
  const handleResult = (e) => {
    setResult((prevState) => {
      return prevState + e.target.textContent;
    });
  };
  return (
    <div className={styles.container}>
      <DisplayResult result={result}></DisplayResult>
      <div className={styles.dialer}>
        <Input handleResult={handleResult} num={1}></Input>
        <Input handleResult={handleResult} num={2}></Input>
        <Input handleResult={handleResult} num={3}></Input>
        <Input handleResult={handleResult} num={4}></Input>
        <Input handleResult={handleResult} num={5}></Input>
        <Input handleResult={handleResult} num={6}></Input>
        <Input handleResult={handleResult} num={7}></Input>
        <Input handleResult={handleResult} num={8}></Input>
        <Input handleResult={handleResult} num={9}></Input>
        <Input num={"R"}></Input>
        <Input handleResult={handleResult} num={0}></Input>
        <Input num={"C"}></Input>
      </div>
    </div>
  );
};

export default DisplayDialPad;
