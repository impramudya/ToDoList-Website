import logo from './logo.svg';
import './css/main.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

import {motion} from "framer-motion"

function App() {
  return (
    <div className="App">
      <motion.h1
      initial= {{ Y: -200}}
      animate={{ y: 0}}
      transition={{duration:0.5}}
      whileHover={{scale:1.1}}
      >To Do List</motion.h1>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
