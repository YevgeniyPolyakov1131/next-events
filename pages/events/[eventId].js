import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

export default function EventDetailPage(){
    const router = useRouter();

    const eventId = router.query.eventId; 
    const event = getEventById(eventId);

    if(!event){
        return (
          <>
            <ErrorAlert>
              <p className="center">No events found</p>
            </ErrorAlert>
          </>
        );
    }else{

    return (
        <>
          <EventSummary title={event.title}/>
        	<EventLogistics
						date={event.date}
						address={event.location}
						image={event.image}
						imageAlt={event.title}
          />

					<EventContent>
						<p>{event.description}</p>
					</EventContent>
        </>
    );

    }

}