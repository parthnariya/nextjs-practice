import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/data";
import EventItemList from "../../components/events/EventItemList";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/error-alert/error-alert";
const FilteredEventPage = () => {
  const router = useRouter();
  // console.log(router.query.slug)
  const filterData = router.query.slug;
  if (!filterData) return <p className="center">Loading ...</p>;
  const filteredYears = +filterData[0];
  const filteredMonths = +filterData[1];

  if (
    isNaN(filteredYears) ||
    isNaN(filteredMonths) ||
    filteredYears > 2030 ||
    filteredYears < 2021 ||
    filteredMonths < 1 ||
    filteredMonths > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Values</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </>
    );
  }
  //   console.log({ year:filteredYears,month: filteredMonths })
  const filteredEvents = getFilteredEvents({
    year: filteredYears,
    month: filteredMonths,
  });
  console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No Data Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(filteredYears, filteredMonths - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventItemList items={filteredEvents} />
    </>
  );
};
export default FilteredEventPage;
