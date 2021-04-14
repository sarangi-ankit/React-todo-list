import React from "react";

const List=(props)=>{
    return(
        
        <>
        <div>
            <i className="fa fa-times" aria-hidden="true"  onClick={props.deleteItem} />
            <li>{props.text}</li>
        </div>
        
        
        </>
    )
}
export default List;