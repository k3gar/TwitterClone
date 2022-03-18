import { render } from "@testing-library/react";
import React from "react";
import HomePage from "./components/HomePage";
//import Login from "./components/Login";
//import LoginPage from "./components/LoginPage";

/* class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  };
  callAPI(){
    fetch('http://localhost:9000/testAPI')
    .then (res => res.text())
    .then (res => this.setState({apiResponse: res}))
  };
  componentWillMount(){
    this.callAPI();
  };

  render(){
    return (
      <div>
        <LoginPage /> 
        <p>{this.state.apiResponse}</p>
        <HomePage />
      </div>
      );
  };
}; */


function App() {
  const myOnScroll = (e) => {
    let prueba = e.target
    console.log(prueba)
  }

  return (
  <div>
    {/* <LoginPage />  */}
    {/* <p>{this.state.apiResponse}</p> */}
    <HomePage />
  </div>
  );
}

export default App;
