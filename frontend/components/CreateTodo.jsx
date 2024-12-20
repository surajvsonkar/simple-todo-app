import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value
            setTitle(value)
        }}></input><br></br>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value
            setDescription(value)
        }}></input><br></br>

        <button style={{
            marginLeft: 10
        }} onClick={()=> {
            fetch('http://localhost:4000/todo/', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json()
                alert("TODO Added")
            })
            
        }}>Add a todo</button>
    </div>
}