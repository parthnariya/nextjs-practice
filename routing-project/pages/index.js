import EventItemList from "../components/events/EventItemList"
import { getFeaturedEvents } from "../data/data"

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()
    return <div>
        <EventItemList items={featuredEvents}/>
    </div>
}
export default HomePage