import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import UserForm from './components/UserForm';

function App () {

  return (
    <div class="Center">
     <h1>Mina's React Login</h1>


     <UserForm />
    </div>
  );
}

export default App;
