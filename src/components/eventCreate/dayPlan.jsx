import './dayPlan.css'
import EventCreatevalue from '../addEvent/Events'
export default function Events({selectedDate}) 
{   
    function handleValueChange(value) {
        console.log('Полученное значение:', value);
    }

    return (
        <div className='eventReBox'>
            <h1>Create Event</h1>
            <h2>Selected date: {selectedDate.toDateString()}</h2>
            
            <EventCreatevalue valueChange={handleValueChange} selectedDate={selectedDate} />
        </div>
    );
}