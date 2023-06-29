import { useEffect } from "react";
import { useState } from "react";
import "../styles/main.css"
import { useNavigate } from "react-router-dom";


const Home = () => {

    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let[location,setLocation]=useState("")

let handleClick=(e)=>{
    e.preventDefault();

    let data = {name,age,location}

    fetch(" http://localhost:3000/data",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(data)
    })
alert("added")
}

let [data,setData]=useState([])

useEffect(()=>{
    let fetching = async()=>{
        let response = await fetch("http://localhost:3000/data")
        let data = await response.json()
        setData(data)
    }
    fetching()
},[data])

let handleDel = (id,name)=>{   
    fetch(`http://localhost:3000/data/${id}`,{
        method:"DELETE"
    })
    alert(`${name} will be deleted permently`)
} 

let navigate=useNavigate();
let handleEdit = (id)=>{
    navigate(`/edit/${id}`)
}


    return ( 
        <div className="home">
            <h1>CURD</h1>
            <div className="form" >
                <table border="2" bgcolor="gray">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><input type="text" value={name} placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)}/></td>
                        <td><input type="text" value={age} placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}/></td>
                        <td><input type="text" value={location} placeholder="Enter your location" onChange={(e)=>setLocation(e.target.value)} /></td>
                        <td><button style={{backgroundColor:"gold",borderRadius:"10px"}} onClick={handleClick}>Add</button></td>
                    </tr>
                </table>
                <br /><br /><br />
            </div>
             <div className="table">
                    
                    <table border="2" bgcolor="gold" >
                        <tr>
                            <th width="200">SL.NO</th>
                            <th width="400">NAME</th>
                            <th width="400">AGE</th>
                            <th width="400">LOCATION</th>
                            <th width="110">ACTION</th>
                        </tr>
                    </table>
                    
                    {data.map(dat=>(
                        <div className="dat">
                            <table border="2"  bgcolor="">
                        <tr>
                            <td width="200">{dat.id}</td>
                            <td width="400">{dat.name}</td>
                            <td width="400">{dat.age}</td>
                            <td width="400">{dat.location} </td>
                            <td width="110>">
                            <button style={{backgroundColor:"lightblue",borderRadius:"10px"}} onClick={()=>handleEdit(dat.id,dat.name)}>Edit</button>
                            <button style={{backgroundColor:"red",borderRadius:"10px"}} onClick={()=>handleDel(dat.id,dat.name)}>Delete</button>
                            </td>
                       </tr>
                    </table>
                        </div>
                    ))}
                    
                </div>
           
        </div>
     );
}
 
export default Home;