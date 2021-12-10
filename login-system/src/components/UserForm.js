import React, { Component } from "react";


const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({isError, ...rest})
let isValid = false;

object.values(isError).forEach(val => {
    if(val.length > 0){
        isValid = false
    }
    else{
        isValid = true
    } 
});

object.values(rest).forEach(val => {
    if(val === null){
        isValid = false
    }
    else{
        isValid = true
    }
});
return isValid;
}; 


export default class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            
            isError:{
                name:'',
                email:'',
                password:''
            }
        }
    }
    
    
onSubmit = e =>{
    e.preventDefault();
    if(formValid(this.state)){
        console.log(this.state);
    
    }
    else{
        console.log("form is invalid!");
    }
};

formValChange = e=>{
    e.preventDefault();
    const fname, value } = e.target;

    let isError = {...this.state.isError};

    switch(name){
        case "name":
            isError.name = value.length <4? "name should be 4 characters":"";
            break; 

        case "email":
            isError.name = reg.Exp.test(value) ? "" :"Email address is invalid";
            break;    

        case "password":
         isError.password = value.length < 6 ? "Password should be 6 characters":"";
        break;     
        default:
            break;
    }
    this.setState({
        isError,
        [name] :value
    })
}



    render() {

        const {isError} = this.state;
        return (



            
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type ="text" 
                        className = {isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name = "name"
                        onChange={this.formValChange}
                        />
                        {isError.name.length > 0 && (
                            <span className = "invalid-feedback">{isError.name}</span>
                        )}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type = "email" 
                            className = {isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            name = "email"
                            onChange={this.formValChange}
                            />
                              {isError.name.length > 0 && (
                            <span className = "invalid-feedback">{isError.email}</span>
                            
                            </div>
                            <div className = "form-group">
                                <label>Password</label>
                                <input type = "password" 
                                className = {isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                name = "password"
                                onChange={this.formValChange}
                                />
                                  {isError.name.length > 0 && (
                            <span className = "invalid-feedback">{isError.password}</span>

                            </div>
                            <br/>
                            <button type = "submit" className = "btn btn-block btn-danger">Create User</button>
                           
                </form>
            </div>
        );
    }


export default UserForm;
