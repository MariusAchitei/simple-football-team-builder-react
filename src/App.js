import logo from "./logo.svg";
import "./App.css";
import "./cardStyles.css";
import { Field } from "./components/field";

function App() {
  return (
    <>
      <main>
        <Field formation={[1, 4, 3, 3]} />
      </main>
    </>
  );
}

export default App;
