import './modal.css' ; 
import { useState } from 'react';
export default function Modal({items , deleteEvent , updateEvent}) 
{  const [editIndex, setEditIndex] = useState(null);  
    const [editValue, setEditValue] = useState('');   

    function startEdit(index, currentValue) {
        setEditIndex(index);   
        setEditValue(currentValue);  
    }

    function saveEdit(index) {
        updateEvent(index, editValue);   
        setEditIndex(null); 
        setEditValue('');
    }

    return (
        <div className="modal-main">
            <div className="wrapper">
                {items.map((item, index) => (
                    <div className="wrapper" key={index}>
                        <div className="item">
                            <h1>{item.name}</h1>
                            <div className="wrapper-in">
                                <div className="interactive">
                                    <h3>{new Date(item.date).toDateString()}</h3>

                                    {editIndex === index ? (
                                        <>
                                            <input 
                                                type="text" 
                                                value={editValue} 
                                                onChange={(e) => setEditValue(e.target.value)} 
                                            />
                                            <button onClick={() => saveEdit(index)}>Save</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => startEdit(index, item.name)}>Update Event</button>
                                            <button onClick={() => deleteEvent(index)}>Delete Event</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}