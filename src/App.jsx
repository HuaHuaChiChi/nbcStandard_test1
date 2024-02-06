import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusNumber, minusNumber } from "./redux/modules/calculator";
import { useState } from "react";

function App() {
  const number = useSelector((state)=> state.calculator.number)
  const dispatch = useDispatch()
  const [inputNumber, setInputNumber] = useState("")

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input 
          type="number"
          onChange={(e) => setInputNumber(e.target.value)} 
          Value={inputNumber}
        /> 만큼을
        <button onClick={() => dispatch(plusNumber(inputNumber))} >더할게요</button>
        <button onClick={() => dispatch(minusNumber(inputNumber))}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;
