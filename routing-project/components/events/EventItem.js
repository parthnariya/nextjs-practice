import Button from "../ui/Button";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-icon";
import DateIcon from "../icons/date-icon";
import styles from "./Eventitem.module.css";
const EventItem = ({ item }) => {
  const { title, image, date, location, id } = item;
  const dateFormate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formateAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{dateFormate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formateAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
