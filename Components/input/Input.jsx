import Styles from "./input.module.css";
import { useEffect, useRef } from "react";
const Input = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={Styles.wrapper}>
      <input />
      <input />
      <input ref={inputRef} />
    </div>
  );
};

export default Input;
