import {useState} from "react";
import "./App.css";
import '../node_modules/boostrap/dist/css/boostrap.min.css'
import UserForm from './components/UserForm';

function App () {

  return (
    <div class="App">
     <h1>Mina's React Login</h1>


     <UserForm />
    </div>
  );
};

export default App;
