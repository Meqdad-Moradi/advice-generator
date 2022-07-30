import "./assets/style/style.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useState } from "react";

function App() {
   const [advice, setAdvice] = useState([
      "It is easy to sit up and take notice, what is difficult is geting up and taking action.",
      "lorem ",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "then",
   ]);

   const [newAdvice, setNewAdvice] = useState(null);
   const [adviceNum, setAdviceNum] = useState(0);

   const showAdvice = () => {
      let index = Math.floor(Math.random() * 10);

      setNewAdvice(advice[index]);
      setAdviceNum(index + 1)
   };

   return (
      <main className="app">
         <div className="container">
            <h3 className="advice-num">advice #{adviceNum}</h3>

            <h1 className="advice">{newAdvice}</h1>

            <div className="divider">
               <img src={divider} alt="" />
            </div>

            <button className="button" onClick={showAdvice}>
               <img src={dice} alt="" />
            </button>
         </div>
      </main>
   );
}

export default App;
