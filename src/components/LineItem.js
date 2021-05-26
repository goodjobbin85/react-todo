import React from 'react' 

function LineItem(props) { 
        return ( 
            <div> 
                <input type="checkbox" checked={props.item.completed} /> 
                <p>{props.item.text}</p>
            </div> 
        )
} 

export default LineItem