import React from 'react' 
import LineItem from './LineItem' 


const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        text: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        text: "Catch up on Arrested Development",
        completed: false
    }
]

class App extends React.Component {   
    
    constructor() { 
        super() 
        
        this.state = { 
            todos: todosData
        }
    }
    
    render() {  
        
        const allItems = this.state.todos.map(item => <LineItem key={item.id} item={item} />)

        return ( 
            <div> 
                {allItems}
            </div>
        )
    }
} 

export default App;