import React, {Component} from 'react'
import UsersGrid from "../Organisms/UsersGrid";

class Users extends Component{
    constructor(props){
        super(props)

        this.state = {
            users:[]
        }
    }

         componentDidMount() {
             fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
             .then(response => response.json())
             .then(response2 => {
                 this.setState({
                     users:response2
                 })
             })
         }

    

    render() {
        const {users} = this.state
        return( <UsersGrid users={users} />
        )
    }
}


export default Users