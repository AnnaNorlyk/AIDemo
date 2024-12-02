import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    image: "https://via.placeholder.com/150",
    title: "Music Concert",
    timeSpan: "18:00 - 21:00",
    date: "2023-12-01",
    location: "Copenhagen",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Art Exhibition",
    timeSpan: "10:00 - 17:00",
    date: "2023-12-02",
    location: "Aarhus",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Tech Conference",
    timeSpan: "09:00 - 16:00",
    date: "2023-12-03",
    location: "Odense",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Cooking Workshop",
    timeSpan: "14:00 - 18:00",
    date: "2023-12-04",
    location: "Aalborg",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Yoga Retreat",
    timeSpan: "07:00 - 10:00",
    date: "2023-12-05",
    location: "Esbjerg",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Book Launch",
    timeSpan: "17:00 - 19:00",
    date: "2023-12-06",
    location: "Roskilde",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Charity Run",
    timeSpan: "08:00 - 11:00",
    date: "2023-12-07",
    location: "Vejle",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Film Screening",
    timeSpan: "20:00 - 22:00",
    date: "2023-12-08",
    location: "Horsens",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Photography Workshop",
    timeSpan: "11:00 - 15:00",
    date: "2023-12-09",
    location: "Randers",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Startup Pitch Event",
    timeSpan: "13:00 - 16:00",
    date: "2023-12-10",
    location: "Kolding",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Poetry Reading",
    timeSpan: "18:00 - 20:00",
    date: "2023-12-11",
    location: "Fredericia",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Holiday Market",
    timeSpan: "09:00 - 18:00",
    date: "2023-12-12",
    location: "Silkeborg",
  },
];


const MainSection = () => {
  return (
    <div className="main-section">
      <h1 className="main-header">Begivenheder</h1>

      {/* Centered Search and Sort Bar */}
      <div className="search-sort-bar">
        <select className="sort-dropdown">
          <option value="date">Sortér: Dato</option>
          <option value="title">Sortér: Navn</option>
          <option value="location">Sortér: Sted</option>
        </select>
        <input type="text" className="search-input" placeholder="Søg..." />
      </div>

      {/* Event Box */}
      <div className="event-box">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            timeSpan={event.timeSpan}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
