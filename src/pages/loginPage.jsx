import { useNavigate } from "react-router-dom"
import yupShema from "./yup"
import { useState } from "react"
import "./login.css"
function Loginpage(){
    const navigate= useNavigate()
    const [data,setdata]=useState({
        email:"",
        password:"",
        role:""
    })
    const [error, seterror]=useState({})
    
    async function handlesubmit(e){
        e.preventDefault()

        try{
            const result=await yupShema.validate(data,{abortEarly:false})
            if (data.role==="admin") navigate("admin")
            else if (data.role=="student") navigate("student")
        }
        catch(error){
            let newerror={}

            error.inner.forEach( (e)=>
            newerror[e.path]=e.message
        )
        seterror(newerror)
        }
               
    }
    function handlechange(e){
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })
        seterror({
            ...error,
            [e.target.name]:""
        })
    }
    return(
        <>
        <form onSubmit={handlesubmit}>

        <div>
        <label>Email Address:</label>
            <input
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handlechange}/>
        </div>
        {error.email && <div className="error">{error.email}</div>}
        
        <div>
            <label>Password:</label>
            <input 
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handlechange}/>
        </div>
         {error.password && <div className="error">{error.password}</div>}

        <div>
            <h3>Select the Role:</h3>
            <label>
            <input
            type="radio"
            name="role"
            value="admin"
            checked={data.role==="admin"}
            onChange={handlechange}
            />  Admin </label>
            <label>
            <input
            type="radio"
            name="role"
            value="student"
            checked={data.role==="student"}
            onChange={handlechange}
            />  Student </label>
        </div>
         {error.role && <div className="error">{error.role}</div>}

        <button type="submit"> Done </button>

        <h1>This is the Login Page</h1>
        
        </form>
        </>
    )
}
export default Loginpage