import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import ReactLoading from 'react-loading';


function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      {state? <Counter/>: <ReactLoading type='spinningBubbles' color='#265a26' height={'20%'} width={'20%'} />}
      <button onClick={()=>setState(!state)} >show/hide</button>
    </div>
  );
}

export default App;
