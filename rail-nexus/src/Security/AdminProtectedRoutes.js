import { useState } from "react";
import Login from "./Login";
import {Route} from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { useMyContext } from "../MyContext";
import FullLogin from "./FullLogin";

function AdminProtectedRoute(props)
{
   
    var isLoggedIn = false;

    var isuserLoggedIn = window.sessionStorage.getItem("isLoggedIn098");
    var User = sessionStorage.getItem("User");
    // console.log(JSON.parse(User))
    // const [data, setData] = useState()
    if(isuserLoggedIn!=null && isuserLoggedIn=='true'&& User != null)
    {
      isLoggedIn = true;
    }
    else
    {
       isLoggedIn = false;
    }
 

    if(isLoggedIn)
    {
        return <Route exact path={props.path} 
                      component={props.component}/>
    }
    else
    {
        return<>
        {/* <Modal show={show} onHide={handleClose}> */}
                <FullLogin></FullLogin>
          
            </> 
    }
}

export default AdminProtectedRoute;