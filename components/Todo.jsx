import React, { useState } from "react";
import styles from "../styles/todo.module.css";

const Todo = () => {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    const inputChange = (e) => {
        setActivity(e.target.value);
    };

    const addActivity = () => {
        if (activity.trim() !== "") {
            setListData((list) => {
                const updateList = [...list, activity];
                console.log(updateList);
                return updateList;
            });
            setActivity("");
        } else {
            alert("plase add some activity");
        }
        setHidden("");
    };

    const removeHandler = (index) => {
        const updatedListData = listData.filter((elements, id) => {
            return index != id;
        });
        setListData(updatedListData);
    };

    const removeAll = () => {
        setListData([]);
    };

    const [hidden, setHidden] = useState("No todos");

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Todo List</h3>
            <div className={styles.inputAndButton}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Add Activity"
                    value={activity}
                    onChange={inputChange}
                />
                <button onClick={addActivity} className={styles.inputButton}>
                    Add
                </button>
            </div>
            <h3 className={styles.hidden}>{hidden}</h3>
            {listData.length >= 1 && (
                <h3 className={styles.todoTitle}>Here is Your Todos</h3>
            )}
            {listData != [] &&
                listData.map((data, index) => {
                    return (
                        <div className={styles.todoData}>
                            <div className={styles.todos}>{data}</div>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                            />
                            <button
                                onClick={() => removeHandler(index)}
                                className={styles.removeButton}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            {listData.length >= 2 && (
                <button onClick={removeAll} className={styles.removeAll}>
                    Remove All
                </button>
            )}
        </div>
    );
};

export default Todo;
