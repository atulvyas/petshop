import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
export default class Signup extends React.Component {

    state = {
        has_store: false,
        first_name: '',
        last_name: '',
        contact: null,
        email: '',
        shop_name:'',
        street: '',
        locality:'',
        city:'',
        state:'',
        pincode: null,
        password: '',
        redirect: false
    }

    handleChange = () => {

      if(event.target.name === "has_store"){
        this.setState((state) => ({
          ...state, [event.target.name]: JSON.parse(event.target.value)
       }));
      }
      else{
        this.setState((state) => ({
          ...state, [event.target.name]: event.target.value
       }));
      } 
        // this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) =>{
       event.preventDefault();
        const value = this.state
        axios.post(`http://localhost:3000/users`, {value})
        .then(res => {
          const userData = res.data;
          if(userData.has_store === true){
             value.user_id = userData.id;
             console.log(value);
            axios.post(`http://localhost:3000/petstores`,{value})
            .then(res =>{
              console.log(res);
              this.setState({redirect:true});
            })
          }
          else{
           this.setState({redirect:true});
          }
        })
    }  
    render(){
      if(this.state.redirect){
        return <Redirect to='/login'/>
      }
        return (
          
           <div>
             <form className="ui form" onSubmit={this.submitHandler}>
                <div className="two fields">
                 <div className="field">
                    <label>Register as</label>
                    <select onChange={this.handleChange} name="has_store" className="ui dropdown">
                       <option value="" hidden >Register as</option>
                       <option value= {false}>User</option>
                       <option value= {true}>Shopkeeper</option>
                    </select>
                 </div>
                 <div className="field">
                    <label>First Name</label>
                    <input onChange={this.handleChange} type="text" name="first_name" placeholder="First Name"/>
                 </div>
                </div> 
                <div className="two fields">
                 <div className="field">
                    <label>Last Name</label>
                    <input onChange={this.handleChange} type="text" name="last_name" placeholder="Last Name"/>
                 </div>
                 <div className="field">
                    <label>Contact</label>
                    <input onChange={this.handleChange} type="number" name="contact" placeholder="Contact"/>    
                 </div>
                </div> 


            { this.state.has_store && (
               <div>
                <div className="two fields">  
                 <div className="field">
                    <label>Storename</label>
                    <input onChange={this.handleChange} type="text" name="shop_name" placeholder="Storename"/>
                 </div>
                 <div className="field">
                    <label>Street Address</label>
                    <input onChange={this.handleChange} type="text" name="street" placeholder="Address"/>
                 </div>
                </div> 
                <div className="two fields">
                 <div className="field">
                    <label>Locality</label>
                    <input onChange={this.handleChange} type="text" name="locality" placeholder="Lacality"/>
                 </div>
                 <div className="field">
                    <label>City</label>
                    <input onChange={this.handleChange} type="text" name="city" placeholder="City"/>
                 </div>
                </div> 
                <div className="two fields">
                 <div className="field">
                    <label>State</label>
                    <input onChange={this.handleChange} type="text" name="state" placeholder="State"/>
                 </div>
                 <div className="field">
                    <label>Pincode</label>
                    <input onChange={this.handleChange} type="number" name="pincode" placeholder="Pincode"/>
                 </div>
                </div>  
               </div>
             )}
           
                <div className="two fields">
                 <div className="field">
                    <label>Email</label>
                    <input onChange={this.handleChange.bind(this)} type="text" name="email" placeholder="Email"/>
                 </div>
                 <div className="field">
                    <label>Password</label>
                    <input onChange={this.handleChange.bind(this)} type="password" name="password" placeholder="Password"/>    
                 </div>
                </div> 
                <button className="ui button" type="submit">Submit</button>
             </form>
           </div>
        )
    }
}