import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import { addMessage } from "./../../redux/actions/message";
import style from "./style.module.css";

function FirstScreen() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const { messages } = useSelector((state: any) => state);
  console.log(messages, "messages");
  const handleChangeTextarea = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmitMessage = () => {
    dispatch(addMessage(text));
    setText("");
  };

  return (
    <div className={style.screen}>
      <div className={style.controls}>
        <textarea value={text} onChange={handleChangeTextarea} className={style.textarea}>
          textarea
        </textarea>
        <button onClick={handleSubmitMessage}>Send</button>
      </div>
      <div className={style.messages}>
        {messages
          ? messages.map((text: string) => {
              return <Message text={text} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default FirstScreen;
