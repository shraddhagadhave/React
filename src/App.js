import './App.css';
import Header from './MyComp/Header';
import {Todos} from "./MyComp/Todos";
import Footer from './MyComp/Footer'
import { useEffect, useState } from 'react';
import { AddToDo}  from './MyComp/AddToDo';
import { About } from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((todos) => {
      return todos !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title) => {
    if(!title.trim()){
      alert("Todo cannot be empty");
      return;
    }
    
    console.log("I am adding this todo", title)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
  
    const myTodo = {
      sno: sno,
      title: title,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
          <Route exact path="/" element={<>
          <AddToDo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>
          }> 
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route> 
        </Routes> 
      <Footer />
    </Router>
    </>
  );
}

export default App;