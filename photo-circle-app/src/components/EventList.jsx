import { useAllEvents, useMyPhotos } from "../dataconnect-generated/react";

function EventList() {

  const {data, isLoading, isError} = useAllEvents();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong...</p>;

  return (
    <ul>
      {data?.events.map(event => (
        <li key={event.id}>{event.name}</li>
      ))}
    </ul>
  );
}

export default EventList