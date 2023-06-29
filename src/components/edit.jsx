import { useEffect, useState } from "react";
import { Link,  useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    let params =useParams()
    
    useEffect((id)=>{
        fetch(` http://localhost:3000/data/${params.id}`).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setName(resp.name);
            setAge(resp.age);
            setLocation(resp.location)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])


    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let[location,setLocation]=useState("")
    

let navigate = useNavigate()

    let handleClick=(e,id)=>{
        e.preventDefault();
    
        let data = {id,name,age,location}
    
        fetch(` http://localhost:3000/data/${params.id}`,{
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(data)
        }).then((res)=>{
            alert("saved successfully..")
            navigate("/")
        }).catch((err)=>{
            console.log(err.message);
        })
    
    }

    return ( 
        <div className="edit">
            <h1>Editing</h1>
            <div className="form">
                <form action="" onSubmit={handleClick}>
                   
                    <div className="name">
                        <label htmlFor=""></label>
                    <label htmlFor="">Name:</label>
                    <input  value={name}  required onChange={(e)=>setName(e.target.value)}/>
                    
                </div>
                <div className="age">
                    <label htmlFor="">Age:</label>
                    <input  value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="loc">
                    <label htmlFor="">Location</label>
                    <input  value={location} onChange={(e)=>setLocation(e.target.value)} />
                </div>

                
                <button>Save</button>
                <Link to="/">Back</Link>

                </form>
            </div>

        </div>
     );
}
 
export default Edit;