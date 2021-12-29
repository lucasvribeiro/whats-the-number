import { defaultColor, correctColor, errorColor } from "./services/colors";

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import Digit from "./components/Digit/Digit";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <Title colorOne="#ef6c00" colorTwo="#c0661c">
          QUAL É O NÚMERO?
        </Title>
      </div>

      <div className="center-container">
        <Digit digit={0} color={defaultColor} />
      </div>

      <div className="bottom-container">
        <Input placeholder="Digite o palpite" />
        <Button
          fnColor="#ffffff"
          bgColorOne="#ef6c00"
          bgColorTwo="#c0661c"
          disabled={false}
        >
          ENVIAR
        </Button>
      </div>
    </div>
  );
}

export default App;
