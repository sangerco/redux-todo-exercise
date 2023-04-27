import React from "react";

const Todo = ({ id, text, priority, deleteTodo }) => {
    
    const handleDeleteTodo = () => {
        deleteTodo(id);
    }

    return (
        <div className="four wide column">
            <div className="ui segment">
                <strong>{text}</strong>
                <p>Priority: { priority } </p>
                <button className="ui icon button" onClick={handleDeleteTodo}><i className="check icon"></i></button>
            </div>
        </div>
    )
}

export default Todo;