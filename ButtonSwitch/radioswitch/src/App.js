import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state = {
      value : "Home"
      
  };

onChange = e =>{
  this.setState({value : e.target.value})
}

  render(){
    const {value} = this.state;

    return (
    <form>
        <h1>Current Selection : {value}</h1>

        <label>
          Home
          <input type="radio"
          value="Home"
          checked={value === "Home"}
          onChange={this.onChange}/>
</label>


<label>
          About Us
          <input type="radio"
          value="About us"
          checked={value === "Aboutus"}
          onChange={this.onChange}/>
          
</label>


    </form>
  )
}
}

export default App;
