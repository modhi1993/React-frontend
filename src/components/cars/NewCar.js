import React , {Component} from "react"
import {create} from './api'

class NewCar extends Component{
state={
    carForm:{
        name:"",
        model:"",
        color:"",
        passenger:0
    }
}
onChangeHandler = event =>{
const name= event.target.name
const value= event.target.value
this.setState(({...copyState})=> {
    copyState.carForm[name]=value
    return copyState

})

}
onSubmitHandler=(event)=>{
    event.preventDefault()
    create(this.state.carForm)
    .then(
        res=> console.log(res.data)
    )
    .catch(
        err=> console.log(err)
    )


}
render(){


return(

<div>

<form onSubmit={this.onSubmitHandler}>
     <label>Name:</label>
     <input name="name" value={this.state.carForm.name} onChange={this.onChangeHandler}/>
     <br/>
     <label>Model:</label>
     <input name="model" value={this.state.carForm.model} onChange={this.onChangeHandler}/>
     <br/>
     <label>Color:</label>
     <input name="color" value={this.state.carForm.color} onChange={this.onChangeHandler}/>
     <br/>
     <label>Passenger:</label>
     <input name="passenger" value={this.state.carForm.passenger} onChange={this.onChangeHandler} type="number"/>

     <br/>
     <input type="submit"/>
</form>

</div>


)

}




}
export default NewCar