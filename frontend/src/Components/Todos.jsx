export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <p>{todo.desc}</p>
                <button>{todo.completed==true ? "Completed":"Mark as completed" }</button>
            </div>
        })}
    </div>
}