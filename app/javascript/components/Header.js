import React from 'react'
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom'


export default class Header extends React.Component {

    
    state = {
      persons: [],
      activeItem: 'home',
      islogged: false 
    }

    componentDidMount(){
      axios.get(`http://localhost:3000/application/current_user`).then(res => {
         if(res.data.status == 1){
            this.setState({islogged: true})
         }
      })
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    updateState = () =>{
      this.setState({islogged: !this.state.islogged})
    }


    logout = () =>{
      axios.get(`http://localhost:3000/sessions/destroy`).then(res =>{
         this.setState({islogged: false});
         <Redirect to="/"></Redirect>
      })
    }
  
    render() {
      return (

        <div className="ui inverted  menu ">
           <Link to='/' className="item">Home</Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
             </div>
            </div>
            <Link updateState={this.updateState} to='/login' className="ui item">Login</Link>
            {/* <Link to='/signup' className="ui item">Signup</Link> */}
          </div>
        </div>

      )
    }
}
