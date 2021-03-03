import React, { Component } from 'react';
import './components.css';

class Users extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            users: [],
            roles: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:8081/users')
        .then(res => res.json())
        .then(data => this.setState({data}, () =>{
            console.log('Users fetched', data['userList'])
            console.log('Roles fetched', data['roleList'])
            this.setState({users: data['userList']})
            this.setState({roles: data['roleList']})

        }))
        .catch(rejected => console.log(rejected))
    }

    render(){
        return (
            <div>
                <h2>User List</h2>
                <div className="unordered-list">
                    {this.state.users.map(user => 
                        <ul>
                            <li>ID: {user._id}</li>
                            <li>First Name: {user.firstname}</li>
                            <li>Last Name: {user.lastname}</li> 
                            <li>Username: {user.username}</li>
                            <li>Email: {user.email}</li> 
                            <li>Password: {user.password}</li> 
                            <ul>Roles: {user.roles.map(roleId =>
                                    <li>{
                                            this.state.roles.map(role => {
                                                if(roleId === role._id) {
                                                   return role.description
                                                }
                                            })
                                    }</li>
                                )}
                            </ul> 
                            <li>---------------------------</li>
                        </ul>
                     )} 
                </div>
            </div>
        );
    }
}


export default Users;

