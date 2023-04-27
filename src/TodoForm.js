import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    text: '',
    priority: 5
}

const TodoForm = ({ createTodo }) => {
    const [ form, setForm ] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo({ ...form, id: uuidv4() });
        setForm(INITIAL_STATE);
    };

    return (
        <div className="four wide column">
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label className="newTodoText" htmlFor="text">Add a new todo:</label>
                    <input 
                        type="text" 
                        name="text" 
                        id="text" 
                        onChange={handleChange} 
                        value={form.text}
                        />
                </div>
                <div className="ui form">
                    <label className="field" htmlFor="priority">How important is this?</label>
                    <select value={form.priority} name='priority' onChange={handleChange} className="ui dropdown">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button className="ui primary very padded button" type="submit">Add</button>
            </form>
        </div>
    )

}

export default TodoForm;