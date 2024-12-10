import React from "react";

const EventCard = ({ image, title, timeSpan, date, location }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-card-content">
        <h3>{title}</h3>
        <p className="time">{timeSpan}</p>
        <p className="date">{date}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
