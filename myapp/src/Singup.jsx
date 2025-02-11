import React, { useState } from 'react'

const Singup = () => {
   const[ name, setName]=useState(' ')
   const[ email, setEmail]=useState(' ')


    const handleSubmit=(e)=>{
      e.preventDefault()
       console.log('>>>>>>>>>');
       console.log(name);
       console.log(email);
    }
  return (
    <from onsubmit={handleSubmit}
    >
    <div>
    <label >Name </label>
    <input type ="text"
    value ={name}
    onChange={(e)=>setName(e.target.value)}
    />
</div>

<div>
     <label>email:</label>
     <input type="text"
     value ={email}
     onChange={(e)=>setEmail(e.target.value)}
     />
</div>
<button type='Submit'>Submit</button>
    </from>
  )
}

export default Singup;