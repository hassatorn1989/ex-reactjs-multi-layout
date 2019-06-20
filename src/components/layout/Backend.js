import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const BackendLayout = ({ children, ...rest }) => {
    return (
      <div>
        Header Backend
        {children}
        Footer Backend
      </div>
    )
  }
  const Backend = ({ component: Component, ...rest }) => {
    console.log("RouteLayout");
    //todo: logic for validate user 
   
    return (
      <Route {...rest} render={matchProps => (
        <BackendLayout>
          <Component {...matchProps} />
        </BackendLayout>
      )} />
    )
  };
   
  export default Backend;