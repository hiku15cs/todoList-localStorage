import React, { useEffect, useState } from 'react'
import './TodoPage.css';
import TodoImage from './icons8-todo-list-100.png';

function TodoPage() {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('List')));

    const addItems = () => {
        if (inputData) {
            setItems([...items, inputData]);
        }
    }
    function deleteItem(index) {
        const updatedItems = items.filter((val, key) => index !== key);
        setItems(updatedItems);
    }

    useEffect(() => {
        localStorage.setItem("List",JSON.stringify(items));
    }, [items])


    return (
        <div className='parent-container'>
            <div className='child-container'>
                <figure>
                    <img src={TodoImage} alt='todo-logo' />
                    <figcaption>Add your List here.✌</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='test' placeholder='✍ Add Items...' value={inputData}
                        onChange={(e) => setInputData(e.target.value)} />
                    <i className="fa  fa-plus add-btn fav-btn" title='Add Item'
                        onClick={addItems}></i>
                </div>
                {
                    items && items.map((val, index) => {
                        return (<div className='showItems' key={index}>
                            <div className='eachItemms'>
                                <h4>{val}</h4>
                            </div>
                            <i className="fa fa-trash add-btn fav-btn" title='Delete Item' onClick={() => deleteItem(index)}></i>
                        </div>
                        )
                    })
                }
                <button className='btn' onClick={() => setItems([])}> Remove All </button>
            </div>
        </div>
    )
}

export default TodoPage;