// @ts-ignore
import style from "./style.module.css";
import date from "date-and-time";
import { useEffect, useState } from "react";

function SecondScreen() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <div className={style.screen}>{date.format(now, "HH:mm:ss")}</div>;
}

export default SecondScreen;
