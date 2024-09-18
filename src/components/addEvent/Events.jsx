import { useState, useEffect } from 'react';
import './Events.css';
import Modal from '../modal/modal';

export default function EventCreatevalue({ valueChange, selectedDate }) {
    const [items, setItems] = useState([]);
    const [userValue, setUserValue] = useState('');

    useEffect(() => {
        const savedItems = localStorage.getItem('modalItems');
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    function inputChange(event) {
        setUserValue(event.target.value);
    }

    function addItem() {
        if (!userValue.trim()) {
            alert('Название события не может быть пустым!');
            return;
        }

        const newItem = { name: userValue, date: selectedDate.toString() };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        localStorage.setItem('modalItems', JSON.stringify(updatedItems));
        valueChange(userValue);  
        setUserValue('');
    }

    function deleteEvent(index) {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        localStorage.setItem('modalItems', JSON.stringify(updatedItems));
    }

    function updateEvent(index, newName) {
        const updatedItems = [...items];
        updatedItems[index].name = newName;
        setItems(updatedItems);
        localStorage.setItem('modalItems', JSON.stringify(updatedItems));
    }

    return (
        <>
            <div className='wrapper'>
                <input 
                    className='userValue' 
                    placeholder='Event name' 
                    type="text" 
                    onChange={inputChange} 
                    value={userValue} 
                />
                <button className='btn' onClick={addItem}>Click Here to Add Event</button>
            </div>
            <Modal items={items} deleteEvent={deleteEvent} updateEvent={updateEvent} />
        </>
    );
}