/*Day1 Ract Fundamentals& Environment setup(Task App.js and index.js)
function App() {
return (
<div>
<h1>Hello React!</h1>
<p>This is my first React component.</p>
</div>
);
}
export default App;
*/
/*Day2 Components & Props(App.js and Greeting.js)
import Greeting from "./Greeting";
export default function App() {
return (
<div>
<Greeting name="GOOD" />
<Greeting name="MORNING" />
<Greeting name="Students" />
</div>
);
}
*/
/*Day3 State & Event handling(App.js and Counter.js and App.css)
import Counter from "./Counter";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
*/
//day 4 Conditional Rendering & Lists(App.js,TodoList.js,App.css)
import TodoList from "./TodoList";

export default function App() {
  return <TodoList />;
}
