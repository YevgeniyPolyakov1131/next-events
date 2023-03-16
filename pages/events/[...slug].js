import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import Router from "next/router";
import EventsSearch from "@/components/events/event-search";
import EventList from "@/components/events/event-list";
import ErrorAlert from "@/components/ui/error-alert";

export default function FilteredEventsPage(){

    const router = useRouter();

    if(router.query.slug !== undefined){
        const filteredYear = parseInt(router.query.slug[0]);
        const filteredMonth = parseInt(router.query.slug[1]);
    
        const dateFilter = {
            year: filteredYear,
            month: filteredMonth
        }

        if (isNaN(filteredYear) ||
            isNaN(filteredMonth) ||
            filteredYear > 2030 ||
            filteredMonth < 1 ||
            filteredMonth > 12){
                return (
                    <>
                    <EventsSearch onSearch={findEventsHandler} year={filteredYear} month={filteredMonth}/>
                    <ErrorAlert>
                        <p className="center">Invalid filter. Please adjust your values!</p>
                    </ErrorAlert>
                    </>
                );
            }
        
        const filteredEvents = getFilteredEvents(dateFilter);
    
        function findEventsHandler(year, month){
            const fullPath = `/events/${year}/${month}`;
    
            Router.push(fullPath);
    
        }

        if(filteredEvents.length === 0){
            return (
                <>
                    <EventsSearch onSearch={findEventsHandler} year={filteredYear} month={filteredMonth}/>
                    <ErrorAlert>
                        <p className="center">No events found for chosen filter!</p>
                    </ErrorAlert>
                </>
            );
        } else{
    
            return (
                <>
                    <EventsSearch onSearch={findEventsHandler} year={filteredYear} month={filteredMonth}/>
                    <EventList items={filteredEvents}/>
                </>
            );
        }
    }


}