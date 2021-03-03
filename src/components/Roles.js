import React, { Component } from 'react';
import './components.css';

class Roles extends Component {
    constructor(){
        super();
        this.state = {
            data: [], 
            users: [],
            roles: []
            
        };
    }

    componentDidMount(){
        fetch('http://localhost:8081/roles')
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
                <h2>Role List</h2>
                <div className="unordered-list">
                    {this.state.roles.map(role => 
                        <ul>
                            <li>ID: {role._id}</li>
                            <li>Role Description: {role.description}</li>
                            <ul>Users: {role.users.map(userId =>
                                    <li>{
                                            this.state.users.map((user) => {
                                                if(userId === user._id) {
                                                    return user.firstname + " " + user.lastname
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

export default Roles;