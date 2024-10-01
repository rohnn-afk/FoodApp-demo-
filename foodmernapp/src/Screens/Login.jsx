// import React, { useState } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({  email: '', password: '' })
 const navigate = useNavigate();

  const handleclick = async (e) => {

      e.preventDefault();
      try{
      const response = await fetch('http://localhost:5000/api/signinuser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
      })

      const data = await response.json();
      console.log(data);
      if(data.success){
        navigate('/');
        localStorage.setItem('Email',credentials.email)
        localStorage.setItem("token",data.token)
      }
      if (!data.success) {
          alert('enter valid credentials')
      }
  
  }
      catch(err){
          console.log(err);
          
      }

  }

  const onchange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });

  }


  return (
    <div>
    <div className="container">

        <form onSubmit={handleclick}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange} value={credentials.email} />
                <div id="emailHelp" className="form-text">{`We'll never share your email with anyone else`}.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={onchange} value={credentials.password} />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to='/createuser' className="btn btn-danger m-3">New user?</Link>
        </form>

    </div>
</div>
  )
}

export default Login
