import RandomColor from "./colorchanger/colorchanger";
import ImageSearchApp from "./ImageSearch/index.js"
import ToDoList from "./todolist/index.js";

function App() {
  return (
    <div style={{
      display:"flex",
    }}>
      <RandomColor></RandomColor>
      <ImageSearchApp></ImageSearchApp>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
