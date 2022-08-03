import {useRouter} from 'next/router'
import { getEventById } from '../../data/data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
const ParticularEventPage = () => {
    const router = useRouter()
    const {eventId} = router.query
    const event = getEventById(eventId)
    if(!event) {
        return <p>no event found</p>
    }
    return<>
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} image={event.image} address={event.location} altImage={event.title}/>
        <EventContent>
            {event.description}
        </EventContent>
    </>
}
export default ParticularEventPage