import React from 'react'


const User = (props) => {
    return (
      <div>
           <h1>{props.login}</h1>
           <img src={props.src} alt={"Avatar"}></img>
      </div>
    );
  };

export default User

