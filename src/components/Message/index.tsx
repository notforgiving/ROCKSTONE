import style from './style.module.css';

interface MessageProp {
  text:string
}

function Message({text}:MessageProp) {
  return (
    <div className={style.message}>
      {text}
    </div>
  );
}

export default Message;