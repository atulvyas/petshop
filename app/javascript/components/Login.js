import React from 'react';
import axios from 'axios';
import Signup from '../components/Signup';
import { Button, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
    redirect: false
  }
  try = () => {
    this.props.history.push('/Signup');
 }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  // componentDidMount(){
  //   axios.get(`http://localhost:3000/sessions/user_present`)
  //   .then(res => {
  //    console.log(res)
  //    if(res.data.status == 1){
  //       this.setState({islogged: true})
  //    }
  // })
  // }

  handleStateUpdate = () =>{
    console.log(this.props);
    this.props.updateState();
  }
  submitHandler = (event) =>{
      const value = this.state
      axios.post(`http://localhost:3000/sessions/create`, {value})
      .then(res => {
        this.setState({redirect:true})
      })
  }
 
  getData = () =>{
    const items = this.state.persons.map(c => {
      <li>{item.first_name}</li>
    });
    console.log(items)
    return items
  };

  render() {

    if(this.state.redirect){
      return <Redirect to='/'/>
    }
  
    return (
      
     <div>
         <button onClick = {this.try}>Signup</button>
         <button onClick = {this.handleStateUpdate}>update</button>
       <Form onSubmit={this.submitHandler}>
         <Form.Field>
           <label>First Name</label>
           <input onChange={this.handleChange.bind(this)} name="username" placeholder='First Name' />
         </Form.Field>
         <Form.Field>
           <label>Password</label>
           <input onChange={this.handleChange.bind(this)} name="password" type='password' placeholder='Password' />
         </Form.Field>
         <Button  type='submit'>Submit</Button>
       </Form>
     </div>
    )
  }
}