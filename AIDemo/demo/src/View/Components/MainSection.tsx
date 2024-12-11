import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { EventData } from "../../Model/IEventData";


const MainSection: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]); 
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [sortOption, setSortOption] = useState<string>("start");
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  // Fetch events from the API
  useEffect(() => {
    const fetchApprovedEvents = async () => {
      try {
        const response = await fetch("/api/events/approved");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Unable to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchApprovedEvents();
  }, []);

  // Handle sorting of events
  const handleSort = (events: EventData[]) => {
    switch (sortOption) {
      case "name":
        return [...events].sort((a, b) => (a.eventName || "").localeCompare(b.eventName || ""));
      case "start":
        return [...events].sort((a, b) => new Date(a.eventStart || "").getTime() - new Date(b.eventStart || "").getTime());
      case "category":
        return [...events].sort((a, b) => (a.eventCategory || "").localeCompare(b.eventCategory || ""));
      default:
        return events;
    }
  };

  // Filter events based on search query and then sort
  const filteredEvents = handleSort(
    events.filter(
      (event) =>
        (event.eventName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (event.eventCategory || "").toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="main-section">
      <h1 className="main-header">Begivenheder</h1>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Indicator */}
      {isLoading && <div className="loading-message">Loading events...</div>}

      {/* Centered Search and Sort Bar */}
      <div className="search-sort-bar">
        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="start">Sortér: Startdato</option>
          <option value="name">Sortér: Navn</option>
          <option value="category">Sortér: Kategori</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Søg..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Event Box */}
      <div className="event-box">
        {!isLoading && filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.eventId}
              event={event} // Pass the event object directly
            />
          ))
        ) : (
          !isLoading && <p className="no-events-message">Ingen godkendte begivenheder fundet</p>
        )}
      </div>
    </div>
  );
};

export default MainSection;
