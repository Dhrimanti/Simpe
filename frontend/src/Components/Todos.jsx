export function Todos({todos}){
    return <div>
        {todos.map(function(todos){
            return <div>
                <h1>{todos.title}</h1>
                <p>{todos.desc}</p>
                <button>{todos.completed==true ? "Completed":"Mark as completed" }</button>
            </div>
        })}
    </div>
}