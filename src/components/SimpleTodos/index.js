import {Component} from 'react'

import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
export default class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }

  deletePara = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredData})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="container">
        <div className="secondContainer">
          <h1>Simple Todos</h1>
          <div>
            <ul>
              {todoList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  details={eachTodo}
                  deletePara={this.deletePara}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
