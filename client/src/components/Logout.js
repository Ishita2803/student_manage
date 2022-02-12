import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom";
const Logout = () => {

    const history=useHistory();
    useEffect(() => {
      fetch('/logout',{
          method:"GET",
          headers:{
              Accept:"applications/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      }).then((res)=>{
          localStorage.setItem("isAuthenticated", "false");
          history.push('/',{replace:true});
      }).catch((err)=>{
        console.log(err);
      });
    });
    
  return (
    <div>Logout</div>
  )
}

export default Logout