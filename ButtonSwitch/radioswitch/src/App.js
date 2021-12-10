import React, {component} from 'react';
import './App.css';

Class App extends Component{
  state = {
      value : "home"

  };

onChange = e =>{
  this. setState({value : e.target.value})
}

  render(){
    const {value} = this.state;
    return (
    <form>
        <h1>Current Selection : {value}</h1>
        <label>
          Home
          <input type="radio"
          value="home"
          onChange={(this,onChange)}/>
</label>

<label>
          About Us
          <input type="radio"
          value="aboutus"
          onChange={(this,onChange)}/>
</label>


    </form>
  )
}
}

export default App;
