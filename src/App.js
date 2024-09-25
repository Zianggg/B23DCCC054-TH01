import RandomColor from "./colorchanger/colorchanger";
import ImageSearchApp from "./ImageSearch/index.js"
import TDL from "./todolist/index.js";

function App() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <RandomColor></RandomColor>
      <ImageSearchApp></ImageSearchApp>
      <TDL></TDL>
    </div>
  );
}

export default App;
