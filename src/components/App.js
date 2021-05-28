import React from 'react' 
import LineItem from './LineItem' 
import itemData from '../itemData'

class App extends React.Component {   
    constructor() { 
        super() 
        this.state = { 
            todos: itemData 
        } 
        this.handleChange = this.handleChange.bind(this)
    } 

    handleChange(id) { 
        this.setState(prevState => { 
            const newItems = prevState.todos.map(item => { 
                if (item.id === id) { 
                    return { 
                        ...item, 
                        completed: !item.completed
                    }
                } 
                return item
            }) 
            return { 
                todos: newItems
            }
        })
    }
    
    render() {  
        const allItems = this.state.todos.map((item) => 
            <LineItem 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange} 
            /> 
        )

        console.log("allItems", allItems)
        return ( 
            
            <div> 
                {allItems}
            </div>
        ) 
        
    }
    
} 

export default App;