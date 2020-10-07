import React from 'react'

import {Switch, Route} from 'react-router-dom'
import Login from './Login'
import Product from './product'
import Signup from './Signup'
import Addpet from './Addpet'

export default class App extends React.Component{
  render(){
    
    return (       
      <Switch>
        <Route exact={true} path="/" component={Product}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/signup" component={Signup}/> 
        <Route exact={true} path="/addpet" component={Addpet}/>  
        <Route exact={true} path="/editpet/:id" component={Addpet}/>  
      </Switch> 
    )
  }
}
// const App = () =>{
//   return(
    
//    <div> 
//     <Switch>
//        <Route exact path="/" component={Product}/>
//        <Route path="/login" component={Login}/>
//        <Route path="/signup" component={Signup}/>   
//     </Switch>  
//   </div> 
//   )  
// }

// export default App