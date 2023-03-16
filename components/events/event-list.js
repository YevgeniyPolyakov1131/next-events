import EventItem from "./event-item";

import classes from './event-list.module.scss';

export default function EventList(props) {
    const { items } = props;

    return (
        <>
        <ul className={classes.list}>
            {items.map( (event) => ( 
            <EventItem
                key={event.id}
                id={event.id} 
                title={event.title} 
                description={event.description} 
                location={event.location} 
                date={event.date} 
                image={event.image}/>
            ))}            
        </ul>
        </>
    );
}