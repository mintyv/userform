import React, {Component} from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist.css.bootstrap.min.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';


function App() {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (

    <div class="center"> 
    <h1>Counter : {counter}</h1><br/>
    <button onClick={ () => dispatch(increment())}>+</button>
  
    </div>




// class App extends Component{
//   state = {
//       value : "Home"
      
//   };

// onChange = e =>{
//   this.setState({value : e.target.value})
// }

//   render(){
//     const {value} = this.state;

//     return (
//     <form>
//         <h1>Current Selection : {value}</h1>

//         <label>
//           Home
//           <input type="radio"
//           value="Home"
//           checked={value === "Home"}
//           onChange={this.onChange}/>
// </label>


// <label>
//           About Us
//           <input type="radio"
//           value="About us"
//           checked={value === "Aboutus"}
//           onChange={this.onChange}/>
          
// </label>


//     </form>
//   )
// }
// }
  )}
export default App;
