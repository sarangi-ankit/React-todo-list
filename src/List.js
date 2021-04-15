import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const List=(props)=>{

    const [line,setLine]=useState(false)

    const deleteList=()=>{
        setLine(true)
    }
    return(
        
        <>
        <div>
            <span onClick={deleteList} >
                <DeleteIcon className="deleteIcon" />
            </span>
            <li style={{textDecorationLine:line?"line-through":"none"}}>
                {props.text}
            </li>
        </div>
        
        
        </>
    )
}
export default List;