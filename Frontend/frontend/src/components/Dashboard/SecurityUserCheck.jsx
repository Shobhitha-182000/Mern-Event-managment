import React, { useState } from 'react'
import axios from 'axios'

const SecurityUserCheck = () => {
    const [key,setKey]=useState('');
    const securityHandler=()=>{

    }

  return (
    <div>
      <form onSubmit={securityHandler}>
        <label>Enter the Security key
            <input type="text" value={key} onChange={(e)=>{setKey(e.target.value)}} />
        </label>
      </form>
    </div>
  )
}

export default SecurityUserCheck
