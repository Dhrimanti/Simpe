import { useState } from "react";
import { Todos } from "./Todos";
export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    async function badmos(){
        fetch("http://localhost/3000")
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        console.log(data);
    }

  
    
    return <div>
        <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={
            function(e){
                const value=e.target.value;
                setTitle(value);
                

            }
        }></input>
        <input style={{padding:10,margin:10}} type="text" placeholder="description" onChange={
            function(e){
                const value=e.target.value;
                setDescription(value);
                

            }
        }></input>
        <button style={{
            padding:10,
            margin:10,
            backgroundColor:"blue",
            color:"white",
            fontWeight:"bold"
        }}  onClick={() => {
            fetch("http://localhost:3000/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: title,
                description: description,
              }),
            })
              .then((res) => res.json())
              .then((response) => {
                alert("Success");
              })
              .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred");
              });
          }}>Add a todo</button>
          <br></br>
          <button onClick={badmos}>please click</button>
    </div>
}