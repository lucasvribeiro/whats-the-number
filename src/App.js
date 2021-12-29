// import Digit from "./components/Digit/Digit";

// import { defaultColor, correctColor, errorColor } from "./services/colors";

import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      {/* <Digit digit={0} color={defaultColor} />
      <Digit digit={1} color={correctColor} />
      <Digit digit={2} color={errorColor} /> */}

      {/* <Input placeholder="Digite o palpite" /> */}
      <Button
        fnColor="#ffffff"
        bgColorOne="#ef6c00"
        bgColorTwo="#c0661c"
        disabled={true}
      >
        ENVIAR
      </Button>
    </div>
  );
}

export default App;
