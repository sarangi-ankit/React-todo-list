import React, { useState } from "react";
import List from "./List"

const App=()=>{

    const[list,setList]=useState("")
    const [item,setItem]=useState([])


    const addList=(event)=>{

        setList(event.target.value)

    }

    const addClick=()=>{
        setItem((allData)=>{
            return (
                [...allData,list]
                
            )
        })
        setList("")
    }
    return(
        <>
        <div className="container">
            <div className="sub-container"><br />
                
                <h1 className="heading">To-Do-List</h1><br />
                
                <input type="text" placeholder="add list" onChange={addList} value={list} />
                <button onClick={addClick}>+</button>


                <ol>
                    
                    {item.map((itemval)=>{
                        return(
                            <List
                            key={index} 
                            id={index}
                            text={itemval}
                            onselect={deleteItem}
                            />
                        )
                    })}
                </ol>
            </div>
        </div>
        
        </>
    )
}
export default App