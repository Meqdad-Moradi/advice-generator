import "./assets/style/style.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useState } from "react";

function App() {
   const [advice, setAdvice] = useState([
      "It is easy to sit up and take notice, what is difficult is geting up and taking action.",
      "Ad mea simul timeam evertitur, no mei congue cotidieque. Ex duo alii principes assueverit, an percipit liberavisse quo.",
      "Meis nonumy quaeque ea cum, per cibo movet posidonium cu. Sint ponderum quo in.",
      "Eos te justo postulant, mei nulla probatus efficiendi ut, qui alia gubergren vituperata ne. Dicam deserunt duo ut.",
      "It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation.",
      "Vel esse nostrud cu, ne omnes labore temporibus nec, quo posse invidunt ad. Vel ea equidem invidunt.",
      "Eum cetero conclusionemque ei, in suas mentitum eum. Diam nullam eum no, dicant principes maiestatis eum an.",
      "Ut ius munere tritani, qui fabulas iudicabit at. Sea brute vivendum ei. Duo ex feugiat repudiare reformidans.",
      "Eu mea mucius laoreet elaboraret. Meis nihil vitae cu vim, vim ne nisl hinc iracundia. Stet voluptatibus id per.",
      "It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
   ]);

   const [newAdvice, setNewAdvice] = useState(null);
   const [adviceNum, setAdviceNum] = useState(undefined);

   const showAdvice = () => {
      let index = Math.floor(Math.random() * advice.length);

      setNewAdvice(advice[index]);
      setAdviceNum(index + 1);
   };

   return (
      <main className="app">
         <div className="container">
            <h3 className="advice-num">advice #{!adviceNum ? 1 : adviceNum}</h3>

            <p className="advice">{!newAdvice ? advice[0] : newAdvice}</p>

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
