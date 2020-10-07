import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class Addpet extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      categories: [],
    }
    this.fd = new FormData();
    this.petstore_id = null;
}

    componentDidMount(props){
      console.log(props.params.match.id);
        axios.get(`http://localhost:3000/petscategories.json`).then(res => {
          this.setState({categories: res.data})
         })
         .catch(error => console.log(error))

       axios.get(`http://localhost:3000/sessions/user_present`)
       .then(res => {
         this.petstore_id =res.data.id;
       })
    }

    handleChange = (e) => {
      if(event.target.name === 'image'){
        this.fd.append('image', event.target.files[0], event.target.files[0].name)
      }
      else{
        this.fd.append(event.target.name, event.target.value);

      }

        // if(event.target.name === 'image'){
        //   this.setState((state)=>({
        //     ...state, [event.target.name]: event.target.files[0]
        //   }));
        // }
        // else{
        //   this.setState((state) => ({
        //     ...state, [event.target.name]: event.target.value
        //  }));

        // } 
        
          // this.setState({[event.target.name]: event.target.value})
      }

    submitHandler = () =>{
        event.preventDefault();

        console.log('hi')
        this.fd.append('petstore_id', this.petstore_id);


        axios.post(`http://localhost:3000/petinfos.json`, this.fd)
        .then(res =>{
            console.log(res);
        })  
      //   for (var pair of this.fd.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }
          
    }  


    render(){
        const categories  = this.state.categories;
        return(
            <div>
                 <form className="ui form" onSubmit={this.submitHandler}>
                 <div className="two fields">
                  <div className="field">
                    <label>Choose category</label>
                    <select onChange={this.handleChange} name="petscategory_id" className="ui dropdown">
                     <option value="" hidden >Choose category</option>
                      {
                        categories.map((value,key)=>
                      <option key={key} value={value.id}>{value.category_name}</option>
                       )   
                      }
                    </select>
                  </div>
                  <div className="field">
                    <input name="image" type="file" onChange={this.handleChange} />
                  </div>
                  
                </div> 
                <div className="two fields">
                  <div className="field">
                    <label>Height</label>
                    <input onChange={this.handleChange} type="number" name="height_infeet" placeholder="Height in feet"/>
                  </div>
                  <div className="field">
                    <label>Weight</label>
                    <input onChange={this.handleChange} type="number" name="weight_inkg" placeholder="Weight in kg"/>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Age</label>
                    <input onChange={this.handleChange} type="number" name="age" placeholder="Age in years"/>
                  </div>
                  <div className="field">
                    <label>Price</label>
                    <input onChange={this.handleChange} type="number" name="price_inr" placeholder="Price"/>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Gender</label>
                    <input onChange={this.handleChange} type="text" name="gender" placeholder="Gender"/>
                  </div>
                  <div className="field">
                    <label>Breed</label>
                    <input onChange={this.handleChange} type="text" name="breed_type" placeholder="Breed"/>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>Precautions</label>
                    <input onChange={this.handleChange} type="text" name="precautions" placeholder="Precautions"/>
                  </div>
                  <div className="field">
                    <label>Description</label>
                    <input onChange={this.handleChange} type="text" name="description" placeholder="Description"/>
                  </div>
                </div>
                <div className="field">
                    <label>Other stuff</label>
                    <input onChange={this.handleChange} type="text" name="other_stuff" placeholder="Other Stuff"/>
                  </div>
                 <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
} 