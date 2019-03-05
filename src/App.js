import React, { Component } from 'react';
import './App.css';
// import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

constructor(props){
    super(props)
    this.state = {
      datas : '',
      user : '',
      user1: '',
      pass : '',
      status : false
  }
  this.updateState = this.updateState.bind(this);
  this.updatePass = this.updatePass.bind(this);
}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users?id=1')
      .then(response => response.json())
      .then(data => this.setState({
        datas : data,
        status : JSON.parse(localStorage.getItem('list'))  
      }))

    
    console.log(this.state.status)
   
}
updateState(e){
  this.setState({user: e.target.value});
}

updatePass(e){
  this.setState({pass: e.target.value});
}


logout(e){
  localStorage.removeItem('list');
}

hendeleSubmit = (event) => {
  
    this.state.datas.forEach((data, index) => 
      this.state.user1 = data.username
    )
    
  if (this.state.user1 == this.state.user && this.state.user1 == this.state.pass) {

       this.state.status = true 
       localStorage.setItem('list', JSON.stringify(this.state.status))
       console.log(this.state.status)
   
  }else{
    alert('login gagal')
  }
  
}

  render() {
    const {status} = this.state
    if(!status){
      return (
       
        <div className="container">
          <div id="jarak"></div>
          <div className="row justify-content-sm-center">
          <div className="col-sm-5">
          <div className="kotak">
            <h1 className="text-center"><b> Login </b></h1>
            <form onSubmit={this.hendeleSubmit} >
              <div className="form-group">
                <label >User Name</label>
                <input type="text" value={this.state.user}  onChange = {this.updateState}  className="form-control"  placeholder="User Name" />
                
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" value={this.state.password} onChange = {this.updatePass} className="form-control" placeholder="Password" />
              </div>
              
              <button type="submit" className="btn btn-info"  >Submit</button>
            </form>
            </div></div>
            </div>
          </div>
      )
      }else{
        return (
          <div>
          <h1>Selamat anda berhasil login </h1>
          <form onSubmit={this.logout}>
          <button className="btn btn-warning" type="submit" >Logout</button> 
          </form>
          </div>
        ) 
    }
    
  }
}
// Bret
export default App;
