export default function NumberList(props) {
    const { numbers } = props

    const todoList = [
        {
            id: 1,
            todo : "할일1"
        },
        {
            id: 2,
            todo : "할일2"
        },
        {
            id: 3,
            todo : "할일3"
        },
        {
            id: 4,
            todo : "할일4"
        },
        {
            id: 5,
            todo : "할일5"
        },
    ]

    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    );
    
    const itemLists = todoLists.map((todoList) => {
        <li key={todoList.id}>{todoList.todo}</li>
    })

  return (
    <ul>{listItems}</ul>
  )
}