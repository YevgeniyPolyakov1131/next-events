import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import Router from "next/router";

export default function AllEventsPage(){

    const allEvents = getAllEvents();

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`;

        Router.push(fullPath);

    }

    return (
        <>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={allEvents}/>
        </>
    );
}