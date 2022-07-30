import "./assets/style/style.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
   const [advice, setAdvice] = useState(null);

   useEffect(() => {
      showAdvice();
   }, []);

   const showAdvice = () => {
      axios
         .get(`https://api.adviceslip.com/advice`)
         .then((res) => setAdvice(res.data.slip));
   };

   return (
      <main className="app">
         <div className="container">
            <h3 className="advice-num">advice #{advice?.id}</h3>

            <p className="advice">"{advice?.advice}"</p>

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
