import { getAllEvents } from "../../data/data"
import EventItemList from "../../components/events/EventItemList"
import EventSearch from "../../components/events/event-search"
import { useRouter } from "next/router"
const AllEventPage = () => {
    const events = getAllEvents()
    const router = useRouter()
    const filteredEventsHandler = (year,month) =>{
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    } 
    return <>
        <EventSearch onSearch={filteredEventsHandler}/>
        <EventItemList items={events}/>
    </>
}
export default AllEventPage