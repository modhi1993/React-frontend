import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {
  index

  // show,
  // create,
  // update,
  // destroy



} from "./components/cars/api"
import NewCar from "./components/cars/NewCar"


class App extends  React.Component{
  state={

    cars:[]
  }
  componentDidMount(){
    index()
  .then(es=> es.data.cars.map(res=> this.setState.cars.push(res) ))
  .catch(err => console.log(err))


  }
  render(){return (
    <div className="App">
<NewCar/>
  <ul>{this.state.cars.map( (l)=> <li>{l.name}</li>)}</ul>
    </div>
  );}
  
}

export default App;
