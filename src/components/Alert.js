import React from 'react'



export default function Alert(props) {
  return (
    
    props.alert && <div className="container">
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    {props.alert.type}:{props.alert.msg}
   
    </div>
    </div>
    
    
  )
}
