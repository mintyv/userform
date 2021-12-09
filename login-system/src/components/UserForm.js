import React, { Component } from "react";

class UserForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div ClassName="form-group">
                        <label>Name</label>
                        <inpit type ="text" className="form-control"
                        name = "name"
                        />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type = "email" className="form-control"
                            name = "email"
                            />
                            </div>
                            <div className = "form-group">
                                <label>Password</label>
                                <input type = "password" className="form-control"
                                name = "password"
                                />

                            </div>
                            <br/>
                            <button type = "submit" className = "btn btn-block btn-danger">Create User</button>
                           
                </form>
            </div>
        );
    }
}

export default UserForm;
