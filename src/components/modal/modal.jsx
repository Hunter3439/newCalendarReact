import { useState } from 'react';
import './modal.css';

export default function Modal({ items, deleteEvent, updateEvent }) {
    const [editIndex, setEditIndex] = useState({ dateKey: null, index: null });
    const [editValue, setEditValue] = useState('');

    function startEdit(dateKey, index, currentValue) {
        setEditIndex({ dateKey, index });
        setEditValue(currentValue);
    }

    function saveEdit(dateKey, index) {
        if (!editValue.trim()) {
            alert('Событие не может быть пустым!');
            return;
        }
        updateEvent(dateKey, index, editValue);
        setEditIndex({ dateKey: null, index: null });
        setEditValue('');
    }

    return (
        <div className="modal-main">
            <div className="wrapper">
                {Object.entries(items).map(([dateKey, events]) => (
                    events.length > 0 && (
                        <div key={dateKey} className="date-section">
                            <h2>{new Date(dateKey).toDateString()}</h2> {}
                            {Array.isArray(events) && events.map((item, index) => ( 
                                <div className="wrapper" key={index}>
                                    <div className="item">
                                        <h1>{item.name}</h1>
                                        <div className="wrapper-in">
                                            <div className="interactive">
                                                {editIndex.dateKey === dateKey && editIndex.index === index ? (
                                                    <>
                                                        <input
                                                            type="text"
                                                            value={editValue}
                                                            onChange={(e) => setEditValue(e.target.value)}
                                                        />
                                                        <button onClick={() => saveEdit(dateKey, index)}>Save</button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button onClick={() => startEdit(dateKey, index, item.name)}>Update Event</button>
                                                        <button onClick={() => deleteEvent(dateKey, index)}>Delete Event</button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}