import React from 'react' 
import LineItem from './LineItem' 
import todosData from '../todosData'

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