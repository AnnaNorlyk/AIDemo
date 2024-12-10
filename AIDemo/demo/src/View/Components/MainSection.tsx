import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

interface Event {
  eventId: number;
  eventName: string;
  eventDescription?: string;
  eventCategory?: string;
  eventStart: string;
  eventEnd: string;
  eventStatus: string;
  eventCreationTimestamp: string; // Keeping as string since it's likely in ISO format
}

const MainSection: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // State to store events
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search input
  const [sortOption, setSortOption] = useState<string>("date"); // State for sorting
  const [error, setError] = useState<string | null>(null); // State for errors
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to track loading

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
        }
    };

    fetchApprovedEvents();
}, []);


  // Handle sorting of events
  const handleSort = (events: Event[]) => {
    switch (sortOption) {
      case "name":
        return [...events].sort((a, b) => a.eventName.localeCompare(b.eventName));
      case "start":
        return [...events].sort((a, b) => new Date(a.eventStart).getTime() - new Date(b.eventStart).getTime());
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
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
              image="https://via.placeholder.com/150" // Replace with actual image property if exists
              title={event.eventName}
              timeSpan={`${event.eventStart} - ${event.eventEnd}`}
              date={new Date(event.eventStart).toLocaleDateString()}
              location={event.eventCategory || "Ukendt Kategori"}
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
