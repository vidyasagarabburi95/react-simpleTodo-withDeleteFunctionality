import './index.css'

const TodoItem = props => {
  const {details, deletePara} = props
  const {title, id} = details

  const deleteParagraph = () => {
    deletePara(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={deleteParagraph}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
