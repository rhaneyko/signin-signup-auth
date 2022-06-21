import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";

import GetStartedPage from '../pages/GetStartedPage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

const Routes = () => {
  return(
    <BrowserRouter>
       <Route exact path='/' component={GetStartedPage}/>
       <Route path='/signin' component={SigninPage}/>
       <Route path='/signup' component={SignupPage}/>

    </BrowserRouter>
  )
}

export default Routes;
