import React from "react";
import EventItem from "./EventItem";
import styles from './EventItemList.module.css'

const EventItemList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((e) => (
        <EventItem key={e.id} item={e}/>
      ))}
    </ul>
  );
};

export default EventItemList;
