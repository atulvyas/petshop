import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Product extends React.Component {

    state={
        petinfo: [],
        islogged: false
    }

    componentDidMount(){
       axios.get(`http://localhost:3000/sessions/user_present`)
       .then(res => {
        console.log(res)
        if(res.data.status == 1){
           this.setState({islogged: true})
        }
     })

     axios.get(`http://localhost:3000/petinfos.json`)
     .then(res =>{
        console.log(res)
        this.setState({petinfo:res.data})
     })

    }


    render(){

        return (
           <div>
             { this.state.islogged && 
             <Link to="/addpet" className=" right menu">
             <button className="ui basic button">
               <i className="icon user"></i>
                Add Pet
             </button>
             </Link>
             }
               {this.state.petinfo.map(value=>(
                  <Link to={`/editpet/${value.id}`}>
                    <div className="ui card">
                     {/* <div className="image">
                       <img src="/images/avatar2/large/kristy.png"/>
                     </div> */}
                     <div className="content">
                        <a className="header">{value.id}</a>
                       <div className="meta">
                         <span className="date">Joined in 2013</span>
                       </div>
                       <div className="description">
                          Kristy is an art director living in New York.
                       </div>
                     </div>
                     <div className="extra content">
                      <a>
                       <i className="user icon"></i>
                       22 Friends
                      </a>
                    </div>
                  </div>
                  </Link>
               ))}
           </div> 
        )
    }
}