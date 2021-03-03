import React, { Component } from 'react';
import './components.css';
import axios from 'axios'


class UserRoles extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            roles: [],
            data: [],
            userId: 'user',
            roleId: 'role'
        };

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:8081/users')
        .then(res => res.json())
        .then(data => this.setState({data}, () =>{
            console.log('Users fetched', data['userList'])
            console.log('Roles fetched', data['roleList'])
            this.setState({users: data["userList"]})
            this.setState({roles: data['roleList']})

        }))
        .catch(rejected => console.log(rejected))
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.userId)
        console.log(this.state.roleId)
    }

    handleAdd(event) {
        // this.setState({[event.target.name]: event.target.value})
        console.log(this.state.userId)
        console.log(this.state.roleId)

        // const {userId, roleId} = this.state

        axios.post('http://localhost:8081/userroleadd/' + this.state.userId + "/" + this.state.roleId)
        .then(function(response){
            console.log(response)
            return response
        })
        event.preventDefault();
    }

    handleRemove(event) {
        // this.setState({[event.target.name]: event.target.value})
        console.log(this.state.userId)
        console.log(this.state.roleId)

        // const {userId, roleId} = this.state

        axios.post('http://localhost:8081/userroledelete/' + this.state.userId + "/" + this.state.roleId)
        .then(function(response){
            console.log(response)
            return response
        })
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h2>UserRoles</h2>
                <div className="unordered-list">
                        {/* <form onSubmit={this.handleSubmit}> */}

                             <ul>
                                <li>Add Role to User</li>
                                <li>
                                    <select name="roleId" id="roleId" onChange={this.handleInputChange}>
                                        <option>select role</option>
                                        {this.state.roles.map(role => 
                                            <option value={role._id}>{role.description}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    <select name="userId" id="userId" onChange={this.handleInputChange}>
                                        <option>select user</option>
                                        {this.state.users.map(user => 
                                            <option value={user._id}>{user.firstname + " " + user.lastname}</option>
                                        )}
                                    </select>
                                </li>
                                <input type="button" onClick={this.handleAdd} value="Add"></input>
                                <input type="button" onClick={this.handleRemove} value="Remove"></input>
                                {/* <button type="submit">Add</button> */}
                            </ul>
                        {/* </form> */}
                        <li>***************************</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
            </div>
        );
    }
}

export default UserRoles;