import { useEffect, useState } from "react";
import Styles from "./character.module.css";

const Character = ({ id, title, imgUrl }) => {
  const [nickName, setNickName] = useState("007");

  // component did mounting
  useEffect(() => {
    console.log("pirmas kartas");
  }, []);

  // update  (kada pasikeicia state reiksme)
  useEffect(() => {
    console.log("222222");
    // unmounting
    return () => {
      console.log("Unmounting");
    };
  }, [nickName]);

  const onClickCard = () => {
    setNickName("008");
  };
  return (
    <div className={Styles.wrapper}>
      <p>{title}</p>
      <p>{nickName}</p>
      <img src={imgUrl} />
      <button onClick={onClickCard}>PRESS</button>
    </div>
  );
};

export default Character;
