import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const FrontendLayout = ({ children, ...rest }) => {
    return (
      <div>
        Frontend Backend
        {children}
        Frontend Backend
      </div>
    )
  }
  const Frontend = ({ component: Component, ...rest }) => {
    console.log("RouteLayout");
    //todo: logic for validate user 
   
    return (
      <Route {...rest} render={matchProps => (
        <FrontendLayout>
          <Component {...matchProps} />
        </FrontendLayout>
      )} />
    )
  };
   
  export default Frontend;