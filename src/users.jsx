import { useState,useEffect } from "react";
import "./users.css"

const Users = () => {
    let [userData,setData]=useState([])
    let handleClick=(id)=>{
        setData(userData.filter(x=>x.id !==id))
        alert(`${id} has been removed`)
    }
    useEffect(()=>{
        let fetchData = async() =>{
        let response = await fetch("https://api.github.com/users")
        let data = await response.json()
        setData(data)
        }
        fetchData()
    })

  
    return ( 
        <div className="main">
        <div className="users">
            <h1 id="git">GIT<del>HUB</del> USERS</h1>
            <h1 id="ul">Users List - {userData.length}</h1>
            {userData.map((data)=>(
                <div className="userList">
                    <div className="images">
                    <img width="150" src={data.avatar_url} alt="" />
                    </div>
                    <div className="new">
                    <h1>{data.login}</h1>
                    <h3>Type : {data.type}</h3>
                    </div>
                    <div className="but">
                        <button onClick={()=>handleClick(data.id,data.login)}>❌</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Users;