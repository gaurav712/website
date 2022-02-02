import React, { useEffect, useState } from "react";
//@ts-ignore
import Styles from "../../stylesheets/AboutCard.module.css";
import { Greetings, Info } from "../../Data";
//@ts-ignore
import Photo from "../../assets/me.png";

const AboutCard: React.FC = () => {
  const [greeting, setGreeting] = useState<Array<string>>(Greetings[0]);

  useEffect(() => {
    let count = 1;
    setInterval(() => {
      if (count === Greetings.length) {
        count = 0;
      }
      setGreeting(Greetings[count]);
      count = count + 1;
    }, 3000);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.greet}>
        <div className={Styles.greetMessage}>
          <div>
            {greeting[0]}{" "}
            <span role="img" aria-label="">
              👋
            </span>
          </div>
          <div>{greeting[1]}</div>
        </div>
        <img id={Styles.photo} src={Photo} alt="" />
      </div>
      <div className={Styles.info}>
        <ul>
          {Info.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
